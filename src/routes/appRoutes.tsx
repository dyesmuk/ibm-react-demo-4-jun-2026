import { useContext } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";

import Login from "../pages/Login";
import Home from "../pages/Home";
import Register from "../pages/Register";
import NavBar from "../components/navBar";
import Page404 from "../pages/Page404";
import AuthContext from "../context/AuthContextType";
import Parent from "../pages/Parent";
import Employee from "../pages/Employee";

const AppRoutes = () => {

    const { isLoggedIn } = useContext(AuthContext);

    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Navigate to="/home" replace />} />
                <Route path="/home" element={<Home />} />
                <Route
                    path="/login"
                    element={isLoggedIn ? <Navigate to="/employees" replace /> : <Login />}
                />
                <Route
                    path="/employees" element={isLoggedIn ? <Employee /> : <Navigate to="/login" replace />}
                />
                <Route
                    path="/parent" element={isLoggedIn ? <Parent /> : <Navigate to="/login" replace />}
                />
                <Route path="*" element={<Page404 />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;






// import { BrowserRouter, Navigate, Route, Routes } from "react-router";

// import Login from "../pages/Login";
// import Home from "../pages/Home";
// import Register from "../pages/Register";
// import NavBar from "../components/navBar";
// import Page404 from "../pages/Page404";

// const AppRoutes = () => {

//     return (
//         <>
//             <BrowserRouter>
//                 <NavBar></NavBar>
//                 <Routes>
//                     <Route path="/" element={<Navigate to="/home" replace />} />
//                     <Route path="/home" element={<Home />} />
//                     <Route path="/login" element={<Login />} />
//                     <Route path="/register" element={<Register />} />
//                     <Route path="/employees" element={<Home />} />
//                     <Route path="*" element={<Page404 />} />
//                 </Routes>
//             </BrowserRouter>
//         </>
//     );

// };

// export default AppRoutes;





// import { BrowserRouter, Navigate, Route, Routes } from "react-router";
// import Login from "../pages/Login";
// import Home from "../pages/Home";
// import Register from "../pages/Register";
// import NavBar from "../components/navBar";
// import Page404 from "../pages/Page404";

// const AppRoutes = () => {

//     return (
//         <>
//             <BrowserRouter>
//                 <NavBar></NavBar>
//                 <Routes>
//                     <Route path="/" element={<Navigate to="/home" replace />} />
//                     <Route path="/home" element={<Home />} />
//                     <Route path="/login" element={<Login />} />
//                     <Route path="/register" element={<Register />} />
//                     <Route path="/employees" element={<Home />} />
//                     <Route path="*" element={<Page404 />} />
//                 </Routes>
//             </BrowserRouter>
//         </>
//     );

// };

// export default AppRoutes;





