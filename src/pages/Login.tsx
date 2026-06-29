import React, { useState } from "react";

const Login = () => {

    const [username, setUsername] = useState('');

    const handleInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
        console.log(`${evt.target.name}: ${evt.target.value}`);
        setUsername(evt.target.value);
    };
    const submitInput = (evt: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
        evt.preventDefault(); // important 
        alert(`${username} submitted!`);
        setUsername('');
    };

    return (
        <>
            <h1>Login Component </h1>
            <p>This is login component.</p>
            <form>
                <input type="text" name="username" value={username} onChange={handleInput} />
                <input type="submit" onClick={submitInput} />
            </form>

            <p>Username: {username}</p>
        </>
    );
};
export default Login;

