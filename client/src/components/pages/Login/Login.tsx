import "../../../styles/glassmorphism.css";
// import { FaGoogle } from "react-icons/fa";
// import { FaFacebookF } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
// import { FaGithub } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from "../../../context/AuthProvider/useAuth";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { IError, UserLogin } from "./types";
// import axios from "axios";
// import { useAuth } from "./useAuth";
// import { authenticate } from "./utils";
import { useAuth } from "./useAuth";
// import { setLocalStorage } from "../../../context/AuthProvider/util";

function Login() {

    // const [errorMessage, setErrorMessage] = useState("opacity-0");

    // const navigate = useNavigate();

    // const auth = useAuth();

    // async function handleLogin(values: {email: string, password: string}) {
        
    //     try {
    //         await auth.authenticate(values.email, values.password);

    //         navigate("/profile");

    //     } catch (error) {
    //         setErrorMessage("");
    // }

    const user = {
        email: "",
        password: "",
    };

    const [information, setInformation] = useState<UserLogin>(user);

    const [errorMessage, setErrorMessage] = useState<IError>({
        style: "opacity-0",
        msg: ""
    });

    const [errorStyleEmail, setErrorStyleEmail] = useState<string>("");
    const [errorStylePassword, setErrorStylePassword] = useState<string>("");
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setInformation({...information, [name]: value});

    };

    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        if (information.email == "" || information.password == "") {
            setErrorMessage({...errorMessage, msg: "Preencha todos os campos", style: "opacity-10"});
        } else {
            setErrorMessage({...errorMessage, style: "opacity-0"});
        }

        information.email == "" ? setErrorStyleEmail("border-danger border-2") : setErrorStyleEmail("");
        information.password == "" ? setErrorStylePassword("border-danger border-2") : setErrorStylePassword("");

        const authenticate = async () => {
            const userPassword = await useAuth(information.email);

            if (userPassword.password == information.password) {
                localStorage.setItem("token", userPassword.userid);
                navigate("/profile");
            } else { 
                setErrorMessage({...errorMessage, msg: "Incorrect email or password.", style: "opacity-10"});
                setErrorStyleEmail("border-danger border-2");
                setErrorStylePassword("border-danger border-2");
            }
        };

        authenticate();

    };


    return (
        <section className="background-radial-gradient overflow-hidden">
				
            <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
                <div className="row gx-lg-5 align-items-center mb-5">
                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <h1 className="my-5 display-5 fw-bold ls-tight text-light">
							Nature&apos;s Finest,  <br />
                            <span>Yours to Flourish</span>
                        </h1>
                        <p className="mb-5 fs-6 text-light fw-semibold">
							Welcome to GreenHaven, your trusted source for a lush variety of plants that bring life and serenity to your space. Explore our diverse selection of species, carefully cultivated to thrive in any environment. Start your green journey with us today!
                        </p>
                    </div>

                    <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
                        {/* <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
							<div id="radius-shape-2" className="position-absolute shadow-5-strong"></div> */}
                        <div className="card bg-transparent border-0 card_container">
                            <div className="card-body px-4 py-5 px-md-5">
                                <form noValidate onSubmit={handleSubmit}>
                                    <div data-mdb-input-init className="form-outline mb-4">
                                        <input onChange={handleChange} name="email" type="email" id="form3Example3" className={`form-control ${errorStyleEmail}`} placeholder="Email address" />
                                        {/* <span className={`text-danger form-text ${errorMessageEmail.style}`}>{errorMessageEmail.msg}</span> */}
                                    </div>

                                    <div data-mdb-input-init className="form-outline mb-4">
                                        <input onChange={handleChange} name="password" type="password" id="form3Example4" className={`form-control ${errorStylePassword}`} placeholder="Password"/>
                                        <span className={`text-danger form-text ${errorMessage.style}`}>{errorMessage.msg}</span>
                                    </div>

                                    <div className="form-check d-flex justify-content-center mb-4">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="form2Example33"/>
                                        <label className="form-check-label text-light" htmlFor="form2Example33">
											Lembre minha senha
                                        </label>
                                    </div>

                                    <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4">
											Login
                                    </button>

                                    {/* <div className="text-center">
                                        <p className="text-light">or login with:</p>
                                        <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1"><FaFacebookF />
                                        </button>

                                        <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1"><FaGoogle />
                                        </button>

                                        <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1"><FaXTwitter />
                                        </button>

                                        <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1"><FaGithub />
                                        </button>
                                    </div> */}

                                    <div className="text-center">
                                        <p className="text-light">Don&apos;t have an account yet? <Link to="/signup">Sign up now!</Link></p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>	
        </section>
    );
}

export default Login;
