import type { Key } from "react";

export interface EmployeeType {
    _id: Key;
    firstName: string;
    lastName: string;
    email: string;
    salary: number;
    password: string;
}

