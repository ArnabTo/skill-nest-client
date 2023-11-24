import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile  } from "firebase/auth";
import app from "../firebase.init";
import { GoogleAuthProvider } from "firebase/auth";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const signInWithGoogle=()=>{
        return signInWithPopup(auth, provider)
    }
    const createUser=(email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signUser=(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const updateUser=(name, photo)=>{
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }
    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
    }
    useEffect(()=>{
        const unSubScribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        });
        return () => {
            return unSubScribe()}
    })

    const authFunc = {createUser, signUser, user, loading, updateUser, logOut, signInWithGoogle};
    return (
        <AuthContext.Provider value={authFunc}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;