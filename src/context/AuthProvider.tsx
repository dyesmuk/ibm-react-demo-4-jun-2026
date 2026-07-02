// AuthProvider.tsx
import { useState } from "react";
import AuthContext from "./AuthContextType";
import { loginUser } from "../services/user.service";

const AuthProvider = ({ children }: any) => {
    const storedEmployee = localStorage.getItem('employee');
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
    const [employee, setEmployee] = useState(storedEmployee ? JSON.parse(storedEmployee) : null);

    const login = async (credentials: { email: string; password: string }) => {
        const response: any = await loginUser(credentials);
        if (!response.data?.token) {
            throw new Error('Invalid credentials');
        }
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('employee', JSON.stringify(response.data.employee));
        setEmployee(response.data.employee);
        setIsLoggedIn(true);
        return response.data.employee;
    };

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('employee');
        setEmployee(null);
        setIsLoggedIn(false);
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, employee, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;



// import { useState } from "react";
// import AuthContext from "../context/AuthContextType";

// const AuthProvider = ({ children }: any) => {

//     const storedEmployee = localStorage.getItem('employee');

//     const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
//     const [employee, setEmployee] = useState(storedEmployee ? JSON.parse(storedEmployee) : null);

//     const login = (employeeData: any, token: string) => {
//         localStorage.setItem('token', token);
//         // localStorage.
//         localStorage.setItem('employee', JSON.stringify(employeeData));
//         setEmployee(employeeData);
//         setIsLoggedIn(true);
//     };

//     const logout = () => {
//         localStorage.removeItem('token');
//         localStorage.removeItem('employee');
//         setEmployee(null);
//         setIsLoggedIn(false);
//     };

//     return (
//         <AuthContext.Provider value={{ isLoggedIn, employee, login, logout }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export default AuthProvider;

// // import { useState } from "react";
// // import AuthContext from "../context/AuthContextType";

// // // step 3
// // const AuthProvider = ({ children }) => {

// //     const [isLoggedIn, setIsLoggedIn] = useState(false);
// //     const login = () => setIsLoggedIn(true);

// //     console.log('3 auth context implemented.');

// //     return (
// //         <AuthContext.Provider value={{ isLoggedIn, login }} >
// //             {children}
// //         </AuthContext.Provider>
// //     );
// // };

// // export default AuthProvider;













// // // import { useState } from "react";
// // // import { AuthContext } from "../context/AuthContextType";

// // // const AuthProvider = ({ children }) => {

// // //     const [isLoggedIn, setIsLoggedIn] = useState(false);

// // //     const login = () => setIsLoggedIn(true);

// // //     const logout = () => setIsLoggedIn(false);

// // //     return (
// // //         <AuthContext.Provider
// // //             value={{
// // //                 isLoggedIn,
// // //                 login,
// // //                 logout
// // //             }}
// // //         >
// // //             {children}
// // //         </AuthContext.Provider>
// // //     );
// // // };

// // // export default AuthProvider;

