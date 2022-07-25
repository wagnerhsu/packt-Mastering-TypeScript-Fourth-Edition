interface Window {
    myVersion: string
}

declare function getEmployee(id: number, name: string, salary: number): {
    id: number;
    name: string;
    salary: number;
};