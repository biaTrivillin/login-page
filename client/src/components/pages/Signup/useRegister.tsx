import axios from "axios";

export const useRegister = (firstNameValue: string, lastNameValue: string, emailValue: string, passwordValue: string) => {
    axios.post("http://localhost:3000/register", {
        firstName: firstNameValue,
        lastName: lastNameValue,
        email: emailValue,
        password: passwordValue
    }).then((response) => {
        console.log(response);
    });
};