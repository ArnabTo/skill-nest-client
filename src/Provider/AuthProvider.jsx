import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile  } from "firebase/auth";
import app from "../firebase.init";
import { GoogleAuthProvider } from "firebase/auth";
import useAxiosPublic from "../hooks/useAxiosPublic";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const axiosPublic = useAxiosPublic();

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
    const updateUser=(name, photo, phone)=>{
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo, phoneNumber: phone
        })
    }
    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
        .then(()=>{
            localStorage.removeItem('jwttoken')
        }).finally(()=>{
            setLoading(false)
        })
    }
    //User 
    useEffect(()=>{
        const unSubScribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            if(currentUser){
                const currentuUserInfo = {
                    email: currentUser.email
                }
                 axiosPublic.post('/jwt', currentuUserInfo)
                 .then(res=>{
                    if(res.data.token){
                        localStorage.setItem('jwttoken', res.data.token)
                    }
                 })
            }else{
               localStorage.removeItem('jwttoken');
            }
            setLoading(false)
        });
        return () => {
            return unSubScribe()}
    },[auth, axiosPublic])

    const authFunc = {createUser, signUser, user, loading, updateUser, logOut, signInWithGoogle};
    return (
        <AuthContext.Provider value={authFunc}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;