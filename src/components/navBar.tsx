import { Link } from "react-router";

const NavBar = () => {

    return (
        <>
            <nav>
                <Link to='/home'>Home</Link> |  
                <Link to='/login'>Login</Link> |  
                <Link to='/register'>Register</Link> | 
                <Link to='/employees'>Employees</Link>
            </nav>
        </>
    );
};

export default NavBar;

