import axios from "axios";
import { useEffect, useState } from "react";

const Employee = () => {

    const [employee, setEmployee] = useState({ name: '', email: '' });

    useEffect(() => {
        console.log('useEffect');
        axios.get('https://jsonplaceholder.typicode.com/users/2')
            .then((response: any) => {
                console.log(response);
                setEmployee(response.data);
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <>
            <h1>Employee Component</h1>
            <p>This is employee component.</p>
            <p>{employee && employee.name} </p>
        </>
    );
};
export default Employee;
