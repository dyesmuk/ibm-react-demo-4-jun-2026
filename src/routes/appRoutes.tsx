import { BrowserRouter, Route, Routes } from "react-router";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Register from "../pages/Register";

const AppRoutes = () => {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/employees" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </>
    );

};

export default AppRoutes;