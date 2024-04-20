import { Api } from "../../services/api";
import { UserType } from "./types";

export function setLocalStorage (user: UserType | null) {
    localStorage.setItem("user", JSON.stringify(user));
}

export function getUser () {
    const data = localStorage.getItem("user");

    if (!data) return null;

    const user = JSON.parse(data);

    return user;
}

export async function Login (email: string, password: string) {
    try {
        const request = await Api.post("login", {email, password});

        return request.data;
    } catch (error) {
        return null;
    }
}