import { createContext } from "react";

console.log('1. auth context created');
const AuthContext = createContext<any>({
    isLoggedIn: false,
    login: () => { }
});

export default AuthContext;










// import { createContext } from "react";

// type AuthContextType = {
//     isLoggedIn: boolean;
//     login: () => void;
//     logout: () => void;
// };

// export const AuthContext = createContext<AuthContextType>({
//     isLoggedIn: false,
//     login: () => { },
//     logout: () => { }
// });