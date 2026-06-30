import { useState } from "react";

const Login = () => {

    const apiUrl: string = 'https://jsonplaceholder.typicode.com/users/?username=Antonette';

    const [user, setUser] = useState({ username: '', password: '' });

    const [message, setMessage] = useState('');

    const handleInput = (evt) => {
        const { name, value } = evt.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    const submitInput = (evt) => {
        evt.preventDefault(); // important 
        // axios here 
        // https://www.npmjs.com/package/axios 
        if (user.username === 'sonu' && user.password === 'sonu') {
            setUser({ username: '', password: '' });
            setMessage('Login successful!');
        }
        else {
            setUser({ username: '', password: '' });
            setMessage('Invalid credentials.');
        }
    };

    return (
        <>
            <h1>Login Component </h1>
            <p>This is login component.</p>
            <form>
                <input type="text" name="username" value={user.username} onChange={handleInput} autoFocus placeholder="Enter your username" />
                <br />
                <input type="password" name="password" value={user.password} onChange={handleInput} placeholder="Enter your username" />
                <br />
                <input type="submit" onClick={submitInput} />
            </form>

            <p>{message && message}</p>
        </>
    );
};
export default Login;

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

