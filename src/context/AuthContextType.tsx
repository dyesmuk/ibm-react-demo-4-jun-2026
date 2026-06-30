import { createContext } from "react";

// step 1 
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