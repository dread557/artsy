import { onAuthStateChanged, getAuth } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/config";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router"

export const AuthContext = createContext({
    user: null,
    loading: null,
    googleLoginHandler: async () => { },
    logout: async () => { }
})

export const useAuthContext = () => useContext(AuthContext)


export const AuthContextProvider = ({ children }) => {
    const [user, loading] = useAuthState(auth)
    const router = useRouter()

    const googleProvider = new GoogleAuthProvider(auth);

    const googleLoginHandler = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            router.push("/")
        } catch (error) {
            throw error;
        }
    };

    const logout = () => {
        signOut(auth);
    };

    const values = {
        user, loading, googleLoginHandler, logout
    }

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}