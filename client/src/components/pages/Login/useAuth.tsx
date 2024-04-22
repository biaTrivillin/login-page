import axios from "axios";

export const useAuth = async (emailValue: string) => {

    try {
        const response = await axios.post("http://localhost:3000/login", {
            email: emailValue,
        });
        
        return response.data[0];
    } catch(err) {
        return null;
    }



    // const userPassword = axios.post("http://localhost:3000/login", {
    //     email: emailValue,
    // }).then((response) => {
    //     // console.log(response.data[0].password, passwordValue);
    //     return response.data[0].password;
    // });

    // let a;

    // const printPassword = async () => {
    //     const a = await userPassword;

    //     console.log(a);
    // };

    // printPassword();

    // console.log(a, passwordValue);

    // if (passwordValue == userPassword) {
    //     return true;
    // }
};

// export function useAuth (emailValue: string, passwordValue: string) {
//     const [valid, setValid] = useState("");

//     async function confirm () {
//         axios.post("http://localhost:3000/login", {
//             email: emailValue,
//         }).then((response) => {
//             setValid(response.data[0].password);
//         });
//     }

//     confirm();

//     if(valid == passwordValue) {
//         return true;
//     }
// }

// export const useAuth = async (emailValue: string) => {
//     // POST request using fetch with async/await
//     const requestOptions = {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email: emailValue })
//     };
//     const response = await fetch("http://localhost:3000/login", requestOptions);
//     const data = await response.json();

//     return data.data[0];
// };

// export async function Login (emailValue: string, passwordValue: string) {
//     try {
//         const request = await axios.post("login", {email, password});

//         return request.data;
//     } catch (error) {
//         return null;
//     }
// }

// export function useAuth(emailValue: string) {
//     // create a promise for the axios request
//     const promise = axios.post("http://localhost:3000/login", {
//         email: emailValue,
//     });

//     // using .then, create a new promise which extracts the data
//     const dataPromise = promise.then((response) => response.data);

//     // return it
//     return dataPromise;
// }