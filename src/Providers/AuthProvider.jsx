import { createContext, useEffect, useState } from 'react';
export const AtuhContext=createContext();
import PropTypes from 'prop-types'
import auth from '../firebase.config'
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import Swal from 'sweetalert2';



const AuthProvider = ({children}) => {
    const [loading,setLoading]=useState(true)
    const [user,SetUser]=useState(null);
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const SignInUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
const googleSignIn=()=>{
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth,provider)

}
const LogOut=()=>{
    return signOut(auth)
}
const okAlert = (task) => {
        
    Swal.fire({
        position: "center",
        icon: "success",
        title: `${task} Succesfull`,
        showConfirmButton: false,
        timer: 1500
    });}

useEffect(()=>{
    const unSubscribe =onAuthStateChanged(auth,currentUser=>{
        SetUser(currentUser);
        setLoading(false)
    });
    return ()=> unSubscribe();
},[])
    const authInfo={user,SignInUser,createUser,googleSignIn,LogOut,okAlert,loading}
    return (
       <AtuhContext.Provider value={authInfo}>
                {
                    children
                }
       </AtuhContext.Provider> 
    );
};

export default AuthProvider;
AuthProvider.propTypes={
    children:PropTypes.node,
}