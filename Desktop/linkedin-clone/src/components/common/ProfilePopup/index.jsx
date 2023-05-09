import React, {useState, useMemo} from 'react';
import {useNavigate} from "react-router-dom";
import { onLogout } from '../../../api/AuthAPI';
import {getCurrentUser} from "../../../api/FirestoreAPIs";
import Button  from '../Button';
import "./index.scss";

export default function ProfilePopup() {

  let navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({});
  useMemo(() =>{
    getCurrentUser(setCurrentUser);
  },[]);
  return (
    <div className='popup-card'>
      <p className='name'> {currentUser?.name}</p>
      <p className='headline'> {currentUser?.headline}</p>

      <Button
      title="View Profile" 
      onClick={() =>
          navigate("/Profile",{
            state: {
              id: currentUser?.id, //one
            },
          })
        }
      />
      <Button title="Log out" onClick={onLogout}/>
    </div>
  ); 
}


//one - initially it was  id: currentUser?.userID which was causing problem in profile , 
// so we change it to id which should have been used in the 1st place