export interface User {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export interface IPassword {
    type: string,
    icon: JSX.Element
}