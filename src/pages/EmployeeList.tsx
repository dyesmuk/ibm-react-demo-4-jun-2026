import { getAllEmployees } from "../services/employee.service";
import { useSelector, useDispatch } from 'react-redux'
import { getAllEmps } from '../redux/empSlice';
import { type RootState } from '../redux/store';
import type { EmployeeType } from "../models/employee.model";
import { Link } from "react-router";

const EmployeeList = () => {

    const dispatch = useDispatch();

    const empList: EmployeeType[] = useSelector((state: RootState) => { return state.emp.allEmpData; });

    console.log(empList);

    const loadEmployees = async (evt) => {
        console.log('loadEmployees');
        evt.preventDefault();
        try {
            const response = await getAllEmployees();
            console.log(response.data.data);
            dispatch(getAllEmps(response.data.data));
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
                {empList && empList.length > 0 ? (
                    <>
                        <h3>List of employees: ({empList.length})</h3>
                        <>
                            <div>
                                <span>#</span>
                                <span>First Name</span>
                                <span>Last Name</span>
                            </div>
                            {empList.map((emp: EmployeeType, index: number) => (
                                <div key={emp._id}>
                                    <span>{index + 1}</span>
                                    <span>{emp.firstName} {emp.lastName}</span>
                                    <Link to={`/employees/${emp._id}`}>{emp.firstName} {emp.lastName}</Link>
                                </div>
                            ))}
                        </>
                    </>
                ) : (
                    <p>No employees loaded. Click the button above.</p>
                )}

            </>
        </>
    );
};

export default EmployeeList;

