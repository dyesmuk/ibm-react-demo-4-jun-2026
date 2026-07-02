import { useContext } from "react";
import { Link, useNavigate } from "react-router";
import AuthContext from "../context/AuthContextType";
// import toggleTheme from "./toggleTheme";

const NavBar = () => {
    const { isLoggedIn, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <>
            <p>{isLoggedIn ? 'logged in' : 'logged out'}</p>
            <nav>
                <Link to='/home'>Home</Link>
                {isLoggedIn && <Link to='/parent'>Parent</Link>}
                {isLoggedIn && <Link to='/employees'>Employees</Link>}
                {isLoggedIn && <Link to='/employeeslist'>EmployeesList</Link>}
                {!isLoggedIn && <Link to='/login'>Login</Link>}
                {!isLoggedIn && <Link to='/register'>Register</Link>}
                {isLoggedIn && <button onClick={handleLogout}>Logout</button>}
                {/* <button onClick={toggleTheme}>Color Mode</button> */}

            </nav>
        </>
    );
};

export default NavBar;























// import { Link } from "react-router";
// import { useContext } from "react";
// import { AuthContext } from "../context/AuthContextType";

// const NavBar = () => {
//     const { isLoggedIn, logout } = useContext(AuthContext);

//     return (
//         <>
//             <p>{isLoggedIn ? 'user logged in' : 'user not logged in'}</p>
//             <nav>
//                 <Link to="/home">Home</Link>
//                 {!isLoggedIn && (<> {" | "} <Link to="/login">Login</Link> {" | "} <Link to="/register">Register</Link> </>)}
//                 {isLoggedIn && (<> {" | "} <Link to="/employees">Employees</Link> {" | "} <button onClick={logout}>Logout</button> </>)}
//             </nav>
//         </>
//     );
// };

// export default NavBar;

