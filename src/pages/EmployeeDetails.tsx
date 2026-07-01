// EmployeeDetails.tsx

import { useEffect } from "react";
import { useParams } from "react-router";
import { getEmployeeById } from "../services/employee.service";
import { getEmpById } from "../redux/empSlice";
import { useDispatch, useSelector } from "react-redux";
import { type RootState } from '../redux/store';

const EmployeeDetails = () => {

    const emp = useParams();
    const dispatch = useDispatch();
    const empData = useSelector((s: RootState) => s.emp.empData);

    useEffect(() => {
        console.log(emp.id);
        getEmployeeById(emp.id)
            .then((response) => {
                console.log(response.data);
                dispatch(getEmpById(response.data));
            })
            .catch();
    }, []);

    return (
        <>
            <h1>Employee Details</h1>
            <>
                {empData && (<>
                    <p>Id: {empData.id}</p>
                    <p>First name: {empData.firstName}</p>
                    <p>Last name: {empData.lastName}</p>
                    <p>Email: {empData.email}</p>
                    <p>Salary: {empData.salary}</p>
                </>)}
            </>
        </>
    );
};

export default EmployeeDetails;