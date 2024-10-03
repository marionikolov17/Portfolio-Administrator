import React, { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useUser } from "../../lib/context/user.context";

export default function Login() {
    const user = useUser();

    const [isShownPassword, setIsShownPassword] = useState(false);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        user.login(email, password);
    }

    return (
        <>
            <main className="w-full min-h-full absolute bg-primary-950 flex justify-center items-center font-poppins overflow-x-hidden px-4 sm:px-0">
                <form 
                    onSubmit={handleLogin}
                    className="w-96 bg-primary-900 rounded-lg shadow flex flex-col items-center py-8 px-8"
                >
                    <div className="bg-brand-600 text-xl text-white py-2 px-4 font-bold rounded-lg">
                        M
                    </div>
                    <h4 className="mt-4 font-bold text-lg text-white">Welcome back</h4>
                    <p className="mt-1 text-sm text-gray-400">Please enter your details to sign in</p>
                    {/* Email */}
                    <div className="mt-6 w-full">
                        <label htmlFor="email" className="block text-sm font-bold text-white">Email</label>
                        <input 
                            type="email"
                            id="email" 
                            required
                            placeholder="Enter your email..."
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="py-2 px-4 w-full bg-transparent outline-none rounded-lg text-sm border border-primary-800 text-white mt-1 transition duration-300 focus:ring-2 focus:ring-brand-600"
                        />
                    </div>
                    {/* Password */}
                    <div className="mt-6 w-full">
                        <div className="flex items-center">
                            <div className="flex justify-start grow">
                                <label htmlFor="password" className="text-sm font-bold text-white">Password</label>
                            </div>
                        </div>
                        <div className="flex w-full items-center bg-transparent border border-primary-800 rounded-lg overflow-hidden mt-1 transition duration-300 hover:ring-2 hover:ring-brand-600">
                            <input 
                                type={isShownPassword ? "text" : "password"}
                                id="password"
                                required
                                placeholder="Password..."
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="py-2 px-4 grow outline-none bg-transparent text-white text-sm"
                            />
                            {!isShownPassword && <IoMdEye className="mx-3 text-xl cursor-pointer text-white" onClick={() => setIsShownPassword(true)}/>}
                            {isShownPassword && <IoMdEyeOff className="mx-3 text-xl cursor-pointer text-white" onClick={() => setIsShownPassword(false)}/>}
                        </div>
                    </div>
                    <button className="mt-6 w-full py-2 flex justify-center text-sm bg-brand-600 text-white rounded-lg shadow transition duration-300 hover:ring-1 hover:ring-primary-800">
                        Sign in
                    </button>
                </form>
            </main>
        </>
    )
}