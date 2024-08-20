import React, { createContext, useLayoutEffect, useState } from 'react';
import {onAuthStateChanged} from 'firebase/auth'
import {db, auth} from '../firebase/config'
import {doc, getDoc} from 'firebase/firestore'

export const AuthContext = createContext(null);
export default function AuthProvider({children}){
    const [user, setUser] = useState(null)
    useLayoutEffect(() => { 
        onAuthStateChanged(auth, (currentUser) => {
            if(currentUser){
                getDoc(doc(db,"users", currentUser.uid)) 
                .then(()=> {
                    setUser({
                        userName: currentUser.displayName,
                        userId: currentUser.uid
                    })
                })
            }
            else {
                setUser(null)
            }
        })
    },[user?.userName])
    const setAsUser = (val) =>{
        setUser(val)
    }
    return (
        <AuthContext.Provider value={{ name: user?.userName, userId: user?.userId, setAsUser}}>
            {children}
        </AuthContext.Provider>
    )
}

