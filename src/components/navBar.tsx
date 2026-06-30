import { useContext } from "react";
import { Link } from "react-router";
import AuthContext from "../context/AuthContextType";

console.log('6. context called to navbar.');
const NavBar = () => {

    const { isLoggedIn } = useContext(AuthContext);
    return (
        <>
            <p>{isLoggedIn ? 'yes' : 'no'}</p>
            <nav>
                <Link to='/home'>Home</Link> |
                {isLoggedIn && <Link to='/parent'>Parent</Link>}
                {isLoggedIn && <Link to='/employees'>Employees</Link>}
                {!isLoggedIn && <Link to='/login'>Login</Link>}
                {!isLoggedIn && <Link to='/register'>Register</Link>}
                {/* <Link to='/parent'>Parent</Link> |
                <Link to='/login'>Login</Link> |
                <Link to='/register'>Register</Link> |
                <Link to='/employees'>Employees</Link> */}
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

