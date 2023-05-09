import React,{useMemo, useState} from 'react';
import Home from '../Pages/Home';
import { getCurrentUser } from '../api/FirestoreAPIs';
import Topbar from "../components/common/Topbar";

export default function HomeLayout() {
  const [currentUser, setCurrentUser] = useState({});
  
  useMemo(()=>{ //usememo hook
    getCurrentUser(setCurrentUser); // calling getcurrentuser here
  },[])
  return (
    <div>
      <Topbar currentUser={currentUser}/>
    <Home currentUser = {currentUser}/> 
    </div>
  );
}
//passing currentuser to the homepage
