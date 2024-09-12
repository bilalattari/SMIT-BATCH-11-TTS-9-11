import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth, db } from "../utils/firebase";
import { doc, getDoc } from "firebase/firestore";

export const UserContext = createContext();

function UserContextProvider({ children }) {
  const [user, setUser] = useState({
    isLogin: false,
    email: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const docRef = doc(db, "users", user.uid);
        const userInfo = await getDoc(docRef);
        console.log("userInfo->", userInfo.data());
        setUser({
          isLogin: true,
          ...userInfo.data(),
        });
        setLoading(false);
        console.log("User Login he", user);
      } else {
        setUser({
          isLogin: false,
          email: "",
        });
        setLoading(false);
        console.log("User Login nahn he");
      }
    });

    return subscribe;
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {loading ? "Loading..." : children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
