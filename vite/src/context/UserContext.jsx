import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../utils/firebase";

export const UserContext = createContext();

function UserContextProvider({ children }) {
  const [user, setUser] = useState({
    isLogin: false,
    email: "",
  });

  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          isLogin: true,
          email: user.email,
        });
        console.log("User Login he", user);
      } else {
        setUser({
          isLogin: false,
          email: "",
        });
        console.log("User Login nahn he");
      }
    });

    return subscribe;
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
