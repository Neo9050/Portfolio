import React, { useEffect, useState } from 'react';
import LinkedinLogo from "../../../assets/linkedinLogo.png";
import { FiHome, FiUsers, FiBriefcase, FiSearch, FiMessageSquare, FiBell } from "react-icons/fi";
import user from "../../../assets/user.png";
import { useNavigate } from 'react-router-dom';
import ProfilePopup from '../ProfilePopup';
import SearchUsers from '../SearchUsers';
import { getAllUsers } from '../../../api/FirestoreAPIs';
import "./index.scss";

export default function Topbar({currentUser}) {
  const [popupVisible, setPopupVisible] = useState(false);
  const [issearch, setIsSearch] = useState(false);
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]); 
  const [searchInput, setSearchInput] = useState(""); 
  
  let navigate = useNavigate();
  const goToRoute = (route) => {
    navigate(route);
  };

  const displayPopup = () => {
    setPopupVisible(!popupVisible);
  };

  const openUser = (user) => {
  navigate("/profile", {
    state: {
      id: user.id,
      email: user.email,
    },
  })
  }

  const handleSearch = () => {
    if(searchInput !== " "){
      let searched = users.filter((user) => {
        return Object.values(user)
          .join(" ")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredUsers(searched);
    }
    else{
      setFilteredUsers(users);
    }
  }

  useEffect(() =>{
    let debounced = setTimeout(()=>{
      handleSearch();
    }, 1000);       // runs ever 1 thounds sec
    
    return () => clearTimeout(debounced);
  },[searchInput]); //when ever our searchinput (state)  changes , this hook will run.

  useEffect(() => {
    getAllUsers(setUsers)
  }, []);

  return (
    <div className='topbar-main'>
      {popupVisible ? (
        <div className='popup-position'>
          <ProfilePopup/>
        </div>
      ) : (
        <></>
      )}
      <img className='linkedin-logo' src={LinkedinLogo} alt='LinkedinLogo' />
      {issearch ? (
        <SearchUsers
          setIsSearch={setIsSearch} 
          setSearchInput={setSearchInput}
        />
      ) : ( 
        <div className='react-icons'>
          <FiSearch 
            size={30} 
            className='react-icon' 
            onClick={() => setIsSearch(true)}
          />
          <FiHome 
            size={30} 
            className='react-icon' 
            onClick={() => goToRoute("/home")} 
          />
          <FiUsers 
            size={30} 
            className='react-icon' 
            onClick={() => goToRoute("/connections")} 
          />
          <FiBriefcase size={30} className='react-icon' />
          <FiMessageSquare size={30} className='react-icon' />
          <FiBell size={30} className='react-icon' />
        </div>
        )}
      
      <img 
        className='user-logo' 
        src={currentUser?.imageLink} 
        alt="user" 
        onClick={displayPopup}
      />

      {searchInput.length === 0 ? (
        <></>
        ) : (
        <div className="search-results"> 
          {filteredUsers.length === 0 ? (
            <div className="search-inner"> No Results Found...</div>
        ):( 
          filteredUsers.map((user) => (
            <div className="search-inner" onClick={() => openUser(user)}>
              <img src={user.imageLink}/>
              <p className="name"> {user.name}</p>
            </div>
            ))
          )} 
        </div>
      )}
    </div>
  );
}  
