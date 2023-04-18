import { useState } from "react";
import { FcGoogle } from "react-icons/fc"
import { useAuthContext } from "../contexts/AuthContext";
const SignIn = () => {
    const { googleLoginHandler, user, loading, logout } = useAuthContext()
    console.log(user, loading);
    return (

        <main className="flex flex-col justify-center items-center h-[100vh]">
            <h1 className="text-3xl">Welcome to Artsy! 😎</h1>
            <p className="text-lg mt-4">Please sign in to continue</p>
            <button onClick={() => googleLoginHandler()} className="flex items-center gap-2 bg-[#3341C1] p-4 text-white rounded-md"><FcGoogle /> Sign it with google</button>
            <button onClick={() => logout()}>logout</button>
        </main>
    );
};

export default SignIn;
