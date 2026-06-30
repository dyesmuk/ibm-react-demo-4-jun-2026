import { useContext, useState } from "react";
import { useNavigate } from "react-router"; // this 
import AuthContext from "../context/AuthContextType";
import { loginUser } from '../services/user.service';
console.log('5. context called to login');

const Login = () => {

    const { login } = useContext(AuthContext);

    const navigate = useNavigate(); // // this 

    const [user, setUser] = useState({ username: '', password: '' });

    const [message, setMessage] = useState('');

    const handleInput = (evt: any) => {
        const { name, value } = evt.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    const submitInput = async (evt: any) => {
        console.log('submitInput');
        evt.preventDefault();
        try {
            console.log('trying');
            const response: any = await loginUser(user.username);
            console.log(response);
            if (response.data.length > 0 && response.data[0].username === user.username) {
                setMessage('Login successful!');
                console.log(response.data);
                login(); // step 4 here 
                navigate('/employees'); // this 
            } else {
                setMessage('Invalid credentials.');
            }
            setUser({ username: '', password: '' });
        }
        catch (error) {
            setUser({ username: '', password: '' });
            setMessage('Invalid credentials.');
            console.error(error);
        }
    };

    return (
        <>
            <h1>Login Component</h1>
            <p>This is login component.</p>

            <form onSubmit={submitInput}>
                <input
                    type="text"
                    name="username"
                    value={user.username}
                    onChange={handleInput}
                    autoFocus
                    placeholder="Enter your username"
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
                {/* <input type="submit" value="Login" /> */}
                <button type="submit">🔓Login</button>
                {/* // button is preferred */}
            </form>
            <p>{message}</p>
        </>
    );
};

export default Login;

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

