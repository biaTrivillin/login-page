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
};
