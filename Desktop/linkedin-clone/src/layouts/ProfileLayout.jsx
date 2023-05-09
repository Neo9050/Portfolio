import React,{useMemo, useState} from 'react';
//usememo hook is used here
import Profile from '../Pages/Profile';
import { getCurrentUser } from '../api/FirestoreAPIs';
import Topbar from "../components/common/Topbar";

export default function ProfileLayout() {
  const [currentUser, setCurrentUser] = useState({});

  useMemo(()=>{ //usememo hook
    getCurrentUser(setCurrentUser); // calling getcurrentuser here
  },[])
  return (
    <div>
      <Topbar currentUser = {currentUser}/>
      <Profile currentUser = {currentUser}/>
    </div>
  );
}
//passing currentuser from everywhere to topbar.. Profilelayout
// so that we can use our profile picture.