import { createContext, useEffect, useState } from "react";
import { AuthProviderType, ContextType, UserType }  from "./types";
import { Login, getUser, setLocalStorage } from "./util";

export const AuthContext = createContext<ContextType>({} as ContextType);

export const AuthProvider = ( {children}: AuthProviderType) => {
    const [user, setUser] = useState<UserType | null>();

    useEffect(() => {
        const user = getUser();

        if(user) {
            setUser(user);
        }
    }, []);

    async function authenticate (email: string, password: string) {

        const response = await Login(email, password);

        const payload = {token: response.token, email};

        setUser(payload);

        setLocalStorage(payload);

    }

    function logout () {
        setUser(null);
        setLocalStorage(null);
    }

    return (
        <AuthContext.Provider value={{...user, authenticate, logout }}>
            {children}
        </AuthContext.Provider>
    );

};