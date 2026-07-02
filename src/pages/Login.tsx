import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router"; // this 
import AuthContext from "../context/AuthContextType";
import { loginUser } from '../services/user.service';

const Login = () => {

    const { login, isLoggedIn } = useContext(AuthContext);

    const navigate = useNavigate();

    const [user, setUser] = useState({ email: '', password: '' });

    const [message, setMessage] = useState('');

    useEffect(() => {
        console.log(isLoggedIn);
        if (isLoggedIn) {
            navigate('/employeeslist', { replace: true });
        }
    }, [isLoggedIn, navigate]);

    const handleInput = (evt: any) => {
        const { name, value } = evt.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    const validateInput = () => {
        if (user.email.trim() && user.password.trim())
            return true;
        else if (user.password.trim().length > 4 && user.password.trim().length < 40)
            return true;
        return false;

    };

    const submitInput = async (evt: any) => {
        evt.preventDefault();
        if (validateInput) {
            // all the code here 
        }
        try {
            const response: any = await loginUser(user);
            if (response.data?.token) {
                console.log(response.data);
                setMessage('Login successful, going to Employee list...');
                login(response.data.employee, response.data.token);
                // setTimeout(() => {
                setMessage('');
                navigate('/employeeslist');
                // }, 2000);
            } else {
                setMessage('Invalid credentials.');
            }
            setUser({ email: '', password: '' });
        }
        catch (error) {
            setUser({ email: '', password: '' });
            setMessage('Invalid credentials.');
            console.error(error);
        }
    };

    return (
        <>
            <h1>Login Component (Controlled Form) </h1>
            <p>This is login component.</p>

            <form onSubmit={submitInput}>
                <input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleInput}
                    autoFocus
                    placeholder="Enter your email"
                />
                <br />
                <input
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={handleInput}
                    placeholder="Enter your password"
                />
                <br />
                <button type="submit">🔓Login</button>
            </form>
            <p>{message}</p>
        </>
    );
};

export default Login;


// import { useContext, useState } from "react";
// import { useNavigate } from "react-router"; // this
// import AuthContext from "../context/AuthContextType";
// import { loginUser } from '../services/user.service';

// const Login = () => {

//     const { login } = useContext(AuthContext);

//     const navigate = useNavigate();

//     const [user, setUser] = useState({ email: '', password: '' });

//     const [message, setMessage] = useState('');

//     const handleInput = (evt: any) => {
//         const { name, value } = evt.target;
//         setUser((prevUser) => ({
//             ...prevUser,
//             [name]: value,
//         }));
//     };

//     const submitInput = async (evt: any) => {
//         console.log('submitInput');
//         evt.preventDefault();
//         try {
//             console.log('trying');
//             const response: any = await loginUser(user);
//             console.log(response);
//             if (response.data) {
//                 setMessage('Login successful, going to Employee list...');
//                 console.log(response.data);
//                 login();
//                 setTimeout(() => {
//                     setMessage('');
//                     navigate('/employeeslist');
//                 }, 2000);
//             } else {
//                 setMessage('Invalid credentials.');
//             }
//             setUser({ email: '', password: '' });
//         }
//         catch (error) {
//             setUser({ email: '', password: '' });
//             setMessage('Invalid credentials.');
//             console.error(error);
//         }
//     };

//     return (
//         <>
//             <h1>Login Component</h1>
//             <p>This is login component.</p>

//             <form onSubmit={submitInput}>
//                 <input
//                     type="email"
//                     name="email"
//                     value={user.email}
//                     onChange={handleInput}
//                     autoFocus
//                     placeholder="Enter your email"
//                 />
//                 <br />

//                 <input
//                     type="password"
//                     name="password"
//                     value={user.password}
//                     onChange={handleInput}
//                     placeholder="Enter your password"
//                 />
//                 <br />
//                 <button type="submit">🔓Login</button>
//             </form>
//             <p>{message}</p>
//         </>
//     );
// };

// export default Login;

// import axios from "axios";
// import { useState } from "react";


// const Login = () => {

//     const apiUrl: string = 'https://jsonplaceholder.typicode.com/users/?username=';

//     const [user, setUser] = useState({ username: '', password: '' });

//     const [message, setMessage] = useState('');

//     const handleInput = (evt) => {
//         const { name, value } = evt.target;
//         setUser((prevUser) => ({
//             ...prevUser,
//             [name]: value,
//         }));
//     };

//     const submitInput = async (evt) => {
//         evt.preventDefault();
//         try {
//             const response: any = await axios.get(`${apiUrl}${user.username}`);
//             if (response.username === user.username) {
//                 setUser({ username: '', password: '' });
//                 setMessage('Login successful!');
//                 console.log(response);
//             }
//         }
//         catch (error) {
//             setUser({ username: '', password: '' });
//             setMessage('Invalid credentials.');
//             console.error(error);
//         }
//     }

//     return (
//         <>
//             <h1>Login Component </h1>
//             <p>This is login component.</p>
//             <form>
//                 <input type="text" name="username" value={user.username} onChange={handleInput} autoFocus placeholder="Enter your username" />
//                 <br />
//                 <input type="password" name="password" value={user.password} onChange={handleInput} placeholder="Enter your username" />
//                 <br />
//                 <input type="submit" onClick={submitInput} />
//             </form>

//             <p>{message && message}</p>
//         </>
//     );
// };
// export default Login;




// import { useState } from "react";

// const Login = () => {

//     const [user, setUser] = useState({ username: '', password: '' });

//     const [message, setMessage] = useState('');

//     const handleInput = (evt) => {
//         const { name, value } = evt.target;
//         setUser((prevUser) => ({
//             ...prevUser,
//             [name]: value,
//         }));
//     };

//     const submitInput = (evt) => {
//         evt.preventDefault(); // important
//         if (user.username === 'sonu' && user.password === 'sonu') {
//             setUser({ username: '', password: '' });
//             setMessage('Login successful!');
//         }
//         else {
//             setUser({ username: '', password: '' });
//             setMessage('Invalid credentials.');
//         }
//     };

//     return (
//         <>
//             <h1>Login Component </h1>
//             <p>This is login component.</p>
//             <form>
//                 <input type="text" name="username" value={user.username} onChange={handleInput} autoFocus placeholder="Enter your username" />
//                 <br />
//                 <input type="password" name="password" value={user.password} onChange={handleInput} placeholder="Enter your username" />
//                 <br />
//                 <input type="submit" onClick={submitInput} />
//             </form>

//             <p>{message && message}</p>
//         </>
//     );
// };
// export default Login;

// import { useState } from "react";

// const Login = () => {

//     const [username, setUsername] = useState('');

//     const handleInput = (evt) => {
//         console.log(`${evt.target.name}: ${evt.target.value}`);
//         setUsername(evt.target.value);
//     };
//     const submitInput = (evt) => {
//         evt.preventDefault(); // important
//         alert(`${username} submitted!`);
//         setUsername('');
//     };

//     return (
//         <>
//             <h1>Login Component </h1>
//             <p>This is login component.</p>
//             <form>
//                 <input type="text" name="username" value={username} onChange={handleInput} />
//                 <input type="submit" onClick={submitInput} />
//             </form>

//             <p>Username: {username}</p>
//         </>
//     );
// };
// export default Login;



// import React, { useState } from "react";

// const Login = () => {

//     const [username, setUsername] = useState('');

//     const handleInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
//         console.log(`${evt.target.name}: ${evt.target.value}`);
//         setUsername(evt.target.value);
//     };
//     const submitInput = (evt: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
//         evt.preventDefault(); // important
//         alert(`${username} submitted!`);
//         setUsername('');
//     };

//     return (
//         <>
//             <h1>Login Component </h1>
//             <p>This is login component.</p>
//             <form>
//                 <input type="text" name="username" value={username} onChange={handleInput} />
//                 <input type="submit" onClick={submitInput} />
//             </form>

//             <p>Username: {username}</p>
//         </>
//     );
// };
// export default Login;


