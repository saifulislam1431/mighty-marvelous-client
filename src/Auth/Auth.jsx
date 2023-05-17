import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

const auth = getAuth(app);

export const userContext = createContext(null);
const Auth = ({children}) => {
const[user , setUser] = useState(null);
const[loading,setLoading] = useState(true);
const googleProvider = new GoogleAuthProvider();

const signUp = (email,password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password);
    
}

const signIn =(email,password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);
    
}

const googleIn =()=>{
    setLoading(true);
    return signInWithPopup(auth,googleProvider);
    
}

const logOUt =()=>{
    return signOut(auth)
}

useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth , currentUser=>{
        setLoading(false)
        setUser(currentUser)
    }) 
    return()=>unsubscribe();
},[])


const userInfo ={
user,
loading,
signUp,
signIn,
googleIn,
logOUt
}
    return (
        <userContext.Provider value={userInfo}>
            {children}
        </userContext.Provider>
    );
};

export default Auth;