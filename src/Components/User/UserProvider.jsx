import React, {useState} from "react";
import { UserContext } from "./UserContext";


export const UserProvider = ({children}) => {
const [user, setUser] = useState(null);
const login = (userData) => {
    console.log(`User logged in: ${JSON.stringify(userData)}`)
    setUser(userData);
};

const logout = () => {
    setUser(null);
};

return (
    <UserContext.Provider value={{user, login, logout}}>
        {children}
    </UserContext.Provider>
);

};