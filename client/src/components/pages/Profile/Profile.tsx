import { useEffect, useState } from "react";
import profilePic from "../../../assets/profile.jpg";
import { useGetUser } from "./useGetUser";
import { useNavigate } from "react-router-dom";

function Profile () {

    const [user, setUser] = useState({
        firstName: "name",
        lastName: "name",
        email: "email"
    });

    const navigate = useNavigate();

    useEffect(() => {

        if (localStorage.getItem("token") == null) {
            navigate("/");
        }

        const getUser = async () => {
            const userInformation = await useGetUser();

            setUser({...user, firstName: userInformation.firstname, lastName: userInformation.lastname, email: userInformation.email});

        };

        getUser();

    }, []);


    const logout = () => {

        localStorage.clear();
    };


    return (
        <>
            <div className="card w-30 position-absolute top-50 start-50 translate-middle">
                <img src={profilePic} className="card-img-top w-50 align-self-center" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{user.firstName} {user.lastName}</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Email: {user.email}</li>
                </ul>
                <div className="card-body">
                    <a href="https://github.com/biaTrivillin" rel="noreferrer" target="_blank" className="card-link">Projects</a>
                    <a onClick={logout} href="/" className="card-link">Logout</a>
                </div>
            </div>
        </>
    );
}

export default Profile;
