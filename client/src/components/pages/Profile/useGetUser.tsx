import axios from "axios";

export const useGetUser = async () => {

    try {
        const response = await axios.post("http://localhost:3000/getUser", {
            userId: localStorage.getItem("token"),
        });

        return response.data[0];
        
    } catch(err) {
        return null;
    }

};