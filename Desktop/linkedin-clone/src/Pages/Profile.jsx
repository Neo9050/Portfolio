import React, { useEffect, useState } from 'react';
import ProfileComponent from "../components/ProfileComponents";
import { onAuthStateChanged } from 'firebase/auth';
import {useNavigate} from "react-router-dom";
import { auth } from '../firebaseConfig';
import Loader from '../components/common/Loader';

export default function Profile({currentUser}) {
  const [loading, setLoading] = useState(true);
  // const [currentUser, setCurrentUser] = useState(null);
  let navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth,(res)=>{
      if(!res?.accessToken){
       navigate('/');
      }
      else{
        // setCurrentUser(res); // set the current user in state
        setLoading(false);
      }
    });
  },[]);

  return loading ? <Loader/> : <ProfileComponent currentUser={currentUser}/>;
}
