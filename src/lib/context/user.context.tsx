import { Models } from "appwrite";
import { account } from "../appwrite";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = createContext<any>(null);

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider({ children }: { children: React.ReactElement }) {
  const [user, setUser] = useState<Models.Session | null | Models.User<Models.Preferences>>(null);
  const [hasLoginError, setHasLoginError] = useState(false);
  const [isLoginLoading, setIsLoginLoading] = useState(false);

  const navigate = useNavigate();

  async function login(email: string, password: string) {
    setIsLoginLoading(true);
    try {
      const loggedIn = await account.createEmailPasswordSession(email, password);
      setUser(loggedIn);
      navigate("/") // you can use different redirect method for your application
    } catch {
      setHasLoginError(true);
    } finally {
      setIsLoginLoading(false);
    }
  }

  async function logout() {
    await account.deleteSession("current");
    setUser(null);
    navigate("/login")
  }

  async function init() {
    try {
      const loggedIn = await account.get();
      setUser(loggedIn);
    } catch {
      setUser(null);
      navigate("/login")
    }
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <UserContext.Provider value={{ current: user, login, logout, hasLoginError, isLoginLoading }}>
      {children}
    </UserContext.Provider>
  );
}
