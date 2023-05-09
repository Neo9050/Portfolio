import React,{useState}from 'react';
import ProfileEdit from './common/ProfileEdit';
import ProfileCard from './common/ProfileCard';


export default function ProfileComponents({currentUser}) {
    const [isEdit, setisEdit] = useState(false);

    const onEdit = () => {
        setisEdit(!isEdit);
    };
    return (
        <div>
            {isEdit ? (
            <ProfileEdit onEdit={onEdit} currentUser={currentUser}/>
            ): (
            <ProfileCard currentUser={currentUser} onEdit={onEdit}/>
            )}
        </div>
    );
}
