import { useEffect, useState } from "react";
import type { EmployeeType } from "../models/employee.model";
import { getEmployeeById } from "../services/employee.service";

import { useSelector, useDispatch } from 'react-redux'
import { getEmpById } from '../redux/empSlice';
import { type RootState } from '../redux/store';

const Employee = () => {

    const dispatch = useDispatch();

    // get data from store 
    const dataFromStore = useSelector((state: RootState) => { return state.emp.empData; });

    console.log(dataFromStore);

    const [employee, setEmployee] = useState<EmployeeType>();
    // const userId: number = Math.floor(Math.random() * 10) + 1;
    const [employeeId, serEmployeeId] = useState('6a3c74fd111c607a29ce5e72');



    useEffect(() => {
        console.log('useEffect');
        serEmployeeId('6a3c74fd111c607a29ce5e72');
        getEmployeeById(employeeId)
            .then((response: any) => {
                console.log(response.data);
                setEmployee(response.data);
                // send data to store 
                dispatch(getEmpById(response.data));
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <>
            <h1>Employee Component</h1>
            <p>This is employee component.</p>
            <>
                <h3>Data from store</h3>
                <p>{dataFromStore.id} {dataFromStore.firstName} </p>
            </>
            <h3>Data</h3>
            <>{employee && (<>
                <p>Id: {employee.id}</p>
                <p>First Name: {employee.firstName}</p>
                <p>last Name: {employee.lastName}</p>
                <p>Email: {employee.email}</p>
                <p>Salary: {employee.salary}</p>
            </>)} </>
        </>
    );
};
export default Employee;

