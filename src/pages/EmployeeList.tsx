import { getAllEmployees } from "../services/employee.service";
import { useSelector, useDispatch } from 'react-redux'
import { getAllEmps } from '../redux/empSlice';
import { type RootState } from '../redux/store';
import type { EmployeeType } from "../models/employee.model";
import { useState } from "react";

const EmployeeList = () => {

    const dispatch = useDispatch();
    const [emps, setEmps] = useState<EmployeeType[]>([]);

    const empList: EmployeeType[] = useSelector((state: RootState) => { return state.emp.allEmpData; });
    console.log(empList);

    const loadEmployees = async (evt) => {
        console.log('loadEmployees');
        evt.preventDefault();
        try {
            const response = await getAllEmployees();
            const emps = response.data.data;
            dispatch(getAllEmps(emps));
            setEmps(emps);
            console.log(emps.data);
        }
        catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <h1>Employee List Component</h1>
            <>
                <button onClick={loadEmployees}>Load Employees List</button>
            </>

            <>
                <h3>List of the employees:</h3>
                {emps && emps.length > 0 ? (
                    <>
                        <h3>List of employees: ({emps.length})</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Designation</th>
                                    <th>Department</th>
                                    <th>Role</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {emps.map((emp: EmployeeType, index: number) => (
                                    <tr key={emp._id}>
                                        <td>{index + 1}</td>
                                        <td>{emp.firstName} {emp.lastName}</td>
                                        <td>{emp.email}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </>
                ) : (
                    <p>No employees loaded. Click the button above.</p>
                )}

            </>
        </>
    );
};

export default EmployeeList;

