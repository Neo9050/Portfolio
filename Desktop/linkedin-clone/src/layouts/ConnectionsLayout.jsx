import React,{useMemo, useState} from 'react';
import Connections from "../Pages/Connections";
import { getCurrentUser } from '../api/FirestoreAPIs';
import Topbar from "../components/common/Topbar";

export default function ConnectionsLayout() {
  const [currentUser, setCurrentUser] = useState({});
  
  useMemo(()=>{ //usememo hook
    getCurrentUser(setCurrentUser); // calling getcurrentuser here
  },[])
  return (
    <div>
      <Topbar currentUser = {currentUser}/>
    <Connections currentUser = {currentUser}/> 
    </div>
  );
}