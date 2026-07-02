import { useRef } from "react";
import { registerUser } from "../services/user.service";
import { useNavigate } from "react-router"; // this 

const Register = () => {
    
    const navigate = useNavigate();

    const firstNameRef = useRef<HTMLInputElement>(null);
    const lastNameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const handleRegister = async (evt) => {
        evt.preventDefault();

        const employee = {
            firstName: firstNameRef.current?.value,
            lastName: lastNameRef.current?.value,
            email: emailRef.current?.value,
            password: passwordRef.current?.value
        };
        if (!employee.firstName || !employee.lastName ) {
            console.log('All fields are required.');
            return;
        }

        try {
            const response = await registerUser(employee);
            console.log(response.data);
            navigate('/login');
            if (firstNameRef.current) firstNameRef.current.value = "";
            if (lastNameRef.current) lastNameRef.current.value = "";
            if (emailRef.current) emailRef.current.value = "";
            if (passwordRef.current) passwordRef.current.value = "";
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <h1>Register Component (Uncontrolled Form) </h1>
            <form onSubmit={handleRegister}>
                <label htmlFor="">First Name</label>
                <input
                    type="text"
                    ref={firstNameRef}
                    required
                    minLength={4}
                    maxLength={30}
                    pattern="[A-Za-z ]"
                    title="Only letters and spaces are allowed."
                    autoFocus
                />
                <br />
                <label htmlFor="">Last Name</label>
                <input
                    type="text"
                    ref={lastNameRef}
                    required
                    minLength={4}
                    maxLength={30}
                    pattern="[A-Za-z ]"
                    title="Only letters and spaces are allowed."
                />
                <br />
                <label htmlFor="">Email</label>
                <input
                    type="email"
                    ref={emailRef}
                    required
                />
                <br />
                <label htmlFor="">Password</label>
                <input
                    type="password"
                    ref={passwordRef}
                    required
                    minLength={4}
                    maxLength={30}
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,}"
                    title="Upper letter, lower letter, digit, special char needed."
                />
                <br />
                <button type="submit">
                    Register
                </button>
            </form>
        </>
    );
};

export default Register;


// import { useRef } from "react";
// import { registerUser } from "../services/user.service";
// import { useNavigate } from "react-router"; // this 

// const Register = () => {
    
//     const navigate = useNavigate();

//     const firstNameRef = useRef<HTMLInputElement>(null);
//     const lastNameRef = useRef<HTMLInputElement>(null);
//     const emailRef = useRef<HTMLInputElement>(null);
//     const passwordRef = useRef<HTMLInputElement>(null);

//     const handleRegister = async (evt) => {
//         evt.preventDefault();

//         const employee = {
//             firstName: firstNameRef.current?.value,
//             lastName: lastNameRef.current?.value,
//             email: emailRef.current?.value,
//             password: passwordRef.current?.value
//         };

//         try {
//             const response = await registerUser(employee);
//             console.log(response.data);
//             navigate('/login');
//             if (firstNameRef.current) firstNameRef.current.value = "";
//             if (lastNameRef.current) lastNameRef.current.value = "";
//             if (emailRef.current) emailRef.current.value = "";
//             if (passwordRef.current) passwordRef.current.value = "";
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     return (
//         <>
//             <h1>Register Component (Uncontrolled Form) </h1>
//             <form onSubmit={handleRegister}>
//                 <input
//                     type="text"
//                     ref={firstNameRef}
//                     required
//                 />
//                 <br />
//                 <input
//                     type="text"
//                     ref={lastNameRef}
//                     required
//                 />
//                 <br />
//                 <input
//                     type="email"
//                     ref={emailRef}
//                     required
//                 />
//                 <br />
//                 <input
//                     type="password"
//                     ref={passwordRef}
//                     required
//                 />
//                 <br />
//                 <button type="submit">
//                     Register
//                 </button>
//             </form>
//         </>
//     );
// };

// export default Register;


// // const Register = () => {
// //     return (
// //         <>
// //             <h1>Register Component</h1>
// //             <p>This is register component.</p>
// //         </>
// //     );
// // };
// // export default Register;