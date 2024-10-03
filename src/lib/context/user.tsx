import { Models } from "appwrite";
import { account } from "../appwrite";
import React, { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext<Record<string, any> | null>(null);

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider({ children }: { children: React.ReactElement }) {
  const [user, setUser] = useState<Models.Session | null | Models.User<Models.Preferences>>(null);

  async function login(email: string, password: string) {
    const loggedIn = await account.createEmailPasswordSession(email, password);
    setUser(loggedIn);
    window.location.replace("/"); // you can use different redirect method for your application
  }

  async function logout() {
    await account.deleteSession("current");
    setUser(null);
  }

  async function init() {
    try {
      const loggedIn = await account.get();
      setUser(loggedIn);
    } catch {
      setUser(null);
    }
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <UserContext.Provider value={{ current: user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}
