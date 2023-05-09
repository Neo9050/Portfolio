import { storage } from "../firebaseConfig";
import { ref, getDownloadURL, uploadBytesResumable} from "firebase/storage";
import { editProfile } from "./FirestoreAPIs";



export const uploadImage = (file, id, setModalOpen, setProgress, setCurrentImage) => {
    const profilePicsRef = ref(storage, `profileImages/${file.name}`);
    const uploadTask = uploadBytesResumable(profilePicsRef, file);

    uploadTask.on(
    'state_changed',
    (snapshot) => {
        const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
    },
    (error) => {
        console.error(err);
    },
    () => {
        getDownloadURL(uploadTask.snapshot.ref).then((response) => {
            editProfile(id, {imageLink : response});
            setModalOpen(false);
            setCurrentImage({}); //setting current image as empty object.
            setProgress(0);//the progress bar will be hidden, only shown when uploading is happening in the modal.
        });
    }); 
}

export const uploadPostImage = (file, setPostImage, setProgress) => {
    const postPicsRef = ref(storage, `postImages/${file.name}`);
    const uploadTask = uploadBytesResumable(postPicsRef, file);

    uploadTask.on(
    'state_changed',
    (snapshot) => {
        const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
    },
    (error) => {
        console.error(err);
    },
    () => {
        getDownloadURL(uploadTask.snapshot.ref).then((response) => {
            setPostImage(response);
        });
    }); 
}


















