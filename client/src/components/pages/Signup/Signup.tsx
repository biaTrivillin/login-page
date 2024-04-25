import "../../../styles/glassmorphism.css";
import { useState } from "react";
import { confirmPasswordValidation, emailValidation, nameValidation, passwordValidation } from "./utils";
import { useRegister } from "./useRegister";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { User } from "./types";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

function Signup() {

    const [passwordStyle, setPasswordStyle] = useState({
        type: "password",
        icon : <FaRegEye />
    });

    const [confirmPasswordStyle, setConfirmPasswordStyle] = useState({
        type: "password",
        icon : <FaRegEye />
    });

    const passwordState = [
        {
            set: setPasswordStyle, 
            state: passwordStyle
        },
        {
            set: setConfirmPasswordStyle, 
            state: confirmPasswordStyle
        }
    ];

    const user = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    };

    const [information, setInformation] = useState<User>(user);

    const [errorMessage, setErrorMessage] = useState<User>(user);

    const [errorStyle, setErrorStyle] = useState<User>(user);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setInformation({...information, [name]: value});

    };

    const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {

        const validations = {
            firstName: nameValidation,
            lastName: nameValidation,
            email: emailValidation,
            password: passwordValidation,
            confirmPassword: confirmPasswordValidation
        };

        const name = e.target.name as keyof typeof information;

        if (!validations[name](information[name], information.password)) {
            setErrorMessage({...errorMessage, [name]: "opacity-100"});
            setErrorStyle({...errorStyle, [name]: "border-danger border-2"});
        } else {
            setErrorMessage({...errorMessage, [name]: "opacity-0"});
            setErrorStyle({...errorStyle, [name]: ""});
        }

    };

    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        if (nameValidation(information.firstName) && nameValidation(information.lastName) && emailValidation(information.email) && passwordValidation(information.password) && confirmPasswordValidation(information.confirmPassword, information.password)) {
            useRegister(information.firstName, information.lastName, information.email, information.password);

            navigate("/");
        }

    };

    const showPassword = (input: number) => {
        if (passwordState[input].state.type == "password") {
            passwordState[input].set({...passwordState[input].state, type: "text", icon: <FaRegEyeSlash />});
        } else {
            passwordState[input].set({...passwordState[input].state, type: "password", icon: <FaRegEye />});
        }
    };


    return (
        <section className="background-radial-gradient overflow-hidden">
        
            <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
                <div className="row gx-lg-5 align-items-center mb-5">
                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <h1 className="my-5 display-5 fw-bold ls-tight text-light">
                        Nature&apos;s Finest, <br />
                            <span>Yours to Flourish</span>
                        </h1>
                        <p className="mb-5 fs-6 text-light fw-semibold">
                        Welcome to GreenHaven, your trusted source for a lush variety of plants that bring life and serenity to your space. Explore our diverse selection of species, carefully cultivated to thrive in any environment. Start your green journey with us today!
                        </p>
                    </div>

                    <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
                        <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
                        <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

                        <div className="card bg-transparent border-0 card_container">
                            <div className="card-body px-4 py-5 px-md-5">
                                <form noValidate onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-md-6 mb-4">
                                            <div data-mdb-input-init className="form-outline">
                                                <input onBlur={handleBlur} onChange={handleChange} name="firstName" type="text" className={`form-control ${errorStyle.firstName}`} placeholder="First name"/>
                                                <span className={`text-danger form-text opacity-0 ${errorMessage.firstName}`}>Use at least 3 characters.</span>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-4">
                                            <div data-mdb-input-init className="form-outline">
                                                <input onBlur={handleBlur} onChange={handleChange} name="lastName" type="text" className={`form-control ${errorStyle.lastName}`} placeholder="Last name"/>
                                                <span className={`text-danger form-text opacity-0 ${errorMessage.lastName}`}>Use at least 3 characters.</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div data-mdb-input-init className="form-outline mb-4">
                                        <input onBlur={handleBlur} onChange={handleChange} name="email" type="email" className={`form-control ${errorStyle.email}`} placeholder="Email address"/>
                                        <span className={`text-danger form-text opacity-0 ${errorMessage.email}`}>Your email is invalid.</span>
                                    </div>

                                    <div data-mdb-input-init className="form-outline mb-4">
                                        <div className="position-relative">
                                            <input onBlur={handleBlur} onChange={handleChange} name="password" type={passwordStyle.type} className={`form-control ${errorStyle.password}`} placeholder="Password"/>
                                            <button onClick={() => showPassword(0)} type="button" className="btn btn-link text-dark position-absolute end-0 top-0">{passwordStyle.icon}</button>
                                        </div>
                                        <span className={`text-danger form-text opacity-0 ${errorMessage.password}`}>Your password must contain at least one uppercase letter, one lowercase letter, and one number.</span>
                                    </div>

                                    <div data-mdb-input-init className="form-outline mb-4">
                                        <div className="position-relative">
                                            <input onBlur={handleBlur} onChange={handleChange} name="confirmPassword" type={confirmPasswordStyle.type} className={`form-control ${errorStyle.confirmPassword}`} placeholder="Confirm your password"/>
                                            <button onClick={() => showPassword(1)} type="button" className="btn btn-link text-dark position-absolute end-0 top-0">{confirmPasswordStyle.icon}</button>
                                        </div>
                                        <span className={`text-danger form-text opacity-0 ${errorMessage.confirmPassword}`}>The passwords do not match.</span>
                                    </div>

                                    <div className="form-check d-flex justify-content-center mb-4">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="form2Example33"/>
                                        <label className="form-check-label text-light" htmlFor="form2Example33">
                                        Subscribe to our newsletter
                                        </label>
                                    </div>

                                    <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4">
                                        Sign up
                                    </button>

                                    {/* <div className="text-center">
                                        <p className="text-light">or sign up with:</p>
                                        <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1"><FaFacebookF/>
                                        </button>

                                        <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1"><FaGoogle/>
                                        </button>

                                        <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1"><FaXTwitter/>
                                        </button>

                                        <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1"><FaGithub/>
                                        </button>
                                    </div> */}

                                    <div className="text-center">
                                        <p className="text-light">Already have an account? <Link to="/">Log in!</Link></p>
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

export default Signup;
