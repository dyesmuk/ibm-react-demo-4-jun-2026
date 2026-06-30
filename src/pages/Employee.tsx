import { useEffect, useState } from "react";
import type { EmployeeType } from "../models/employee.model";
import { getEmployeeById } from "../services/employee.service";

const Employee = () => {

    const [employee, setEmployee] = useState<EmployeeType>();
    const userId: number = Math.floor(Math.random() * 10) + 1;

    useEffect(() => {
        console.log('useEffect');
        getEmployeeById(userId)
            .then((response: any) => {
                console.log(response.data);
                setEmployee(response.data);
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <>
            <h1>Employee Component</h1>
            <p>This is employee component.</p>
            <p>{employee && (<>
                <p>Id: {employee.id}</p>
                <p>Name: {employee.name}</p>
                <p>Username: {employee.username}</p>
                <p>Email: {employee.email}</p>
                <p>Phone: {employee.phone}</p>
                <p>Website: {employee.website}</p>
                <p>Street: {employee.address.street}</p>
                <p>Suite: {employee.address.suite}</p>
                <p>City: {employee.address.city}</p>
                <p>Zipcode: {employee.address.zipcode}</p>
                <p>Latitude: {employee.address.geo.lat}</p>
                <p>Longitude: {employee.address.geo.lng}</p>
                <p>Name: {employee.company.name}</p>
                <p>Catch Phrase: {employee.company.catchPhrase}</p>
                <p>Business: {employee.company.bs}</p>
            </>)} </p>
        </>
    );
};
export default Employee;
