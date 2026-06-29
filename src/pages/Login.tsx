import { useState } from "react";
const Login = () => {
    const [username, setUsername] = useState('');

    const handleInput = (evt) => {
        console.log(evt.target.value);
        console.log(evt.target.name);
        setUsername(evt.target.value);
    };
    return (
        <>
            <h1>Login Component </h1>
            <p>This is login component.</p>
            <>
                <input type="text" name="username" value={username} onChange={handleInput} />
            </>
            <p>Username: {username}</p>
        </>
    );
};
export default Login;