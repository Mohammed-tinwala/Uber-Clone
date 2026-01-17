import { createContext, useState } from "react";

// 1️⃣ Create & export context OUTSIDE component
export const UserDataContext = createContext(null);

const UserContext = ({ children }) => {
  // 2️⃣ Initialize state correctly
  const [user, setUser] = useState({
    fullname: {
      firstname: "",
      lastname: "",
    },
    email: "",
  });

  return (
    <UserDataContext.Provider value={{ user, setUser }}>
      {children}
    </UserDataContext.Provider>
  );
};

export default UserContext;
