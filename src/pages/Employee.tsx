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
    const [employeeId, setEmployeeId] = useState('');

    useEffect(() => { console.log('useEffect'); }, []);

    const handleInput = (evt) => {
        console.log(evt.target);
        setEmployeeId(evt.target.value);
    };

    const getEmp = (evt) => {
        evt.preventDefault();
        getEmployeeById(employeeId)
            .then((response: any) => {
                console.log(response.data);
                setEmployee(response.data);
                dispatch(getEmpById(response.data));
                setEmployeeId('');
            })
            .catch(err => console.error(err));
    };
    return (
        <>
            <h1>Employee Component</h1>
            <p>This is employee component.</p>
            <>
                <form onSubmit={getEmp}>
                    <input type="text" name="firstName" value={employeeId} onChange={handleInput} autoFocus placeholder="Please enter employee id" />
                    <button type="submit">Find Employee</button>
                </form>
            </>
            <>
                <h3>Data from store</h3>
                <p>{dataFromStore.id} {dataFromStore.firstName} </p>
            </>
            <h3>Data</h3>
            <>{employee && (<>
                <p>Id: {dataFromStore.id}</p>
                <p>First Name: {dataFromStore.firstName}</p>
                <p>last Name: {dataFromStore.lastName}</p>
                <p>Email: {dataFromStore.email}</p>
                <p>Salary: {dataFromStore.salary}</p>
            </>)} </>
        </>
    );
};
export default Employee;

