import "./index.css";
import { Container, Row } from "reactstrap";
import img from "../../Images/Sign.png";
import { useState, useEffect } from "react";
import axios from "axios";
import Alert from 'react-bootstrap/Alert';

function SignUp() {

    const [show, setShow] = useState(false);
    const [height, setHeight] = useState();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [surname, setSurname] = useState("");
    const [name, setName] = useState("");

    const seePassword = () => {
        const typeInput = document.getElementById("passwordInput").type;
        if (typeInput === "text") {
            document.getElementById("password1Input").type = "password";
            document.getElementById("passwordInput").type = "password";
        } else {
            document.getElementById("password1Input").type = "text";
            document.getElementById("passwordInput").type = "text";
        }
    }
    useEffect(() => {
        setHeight(window.innerHeight);
    }, []);
    function validate(email, password, username, fullname) {
        if (!fullname) {
            alert("To'liq ismingizni kiriting!");
            return false;
        } if (!username) {
            alert("Foydalanuvchi ismingizni kiriting!");
            return false;
        } if (!email) {
            alert("Emailngizni kiriting!");
            return false;
        } if (!password) {
            alert("Parolingizni kiriting!");
            return false;
        }
        return true;
    }
   
   
    const signUpFonk = async () => {
        await axios({
            method: 'post',
            url: 'http://localhost:8080/add',
            data: {
                name: name,
                surname: surname,
                email: email,
                password: password,
                about: null
            }
        });
        setShow(true);
    };
    const handleClick = () => {
        const isValid = validate(email, password, name, surname);
        if (isValid) {
            signUpFonk();
        }
    };

    return (
        <div >
            <Alert show={show} variant="success" className="ms-5 me-5 mt-5">
                <Alert.Heading>Welcome to our family</Alert.Heading>
                <p>
                    It's nice to have you among us, welcome to our family
                </p>
                <hr />
                <div className="d-flex justify-content-end">
                    <button onClick={() => setShow(false)} variant="outline-success">
                        Close me
                    </button>
                </div>
            </Alert>
            <div className="signUp">
                <img src={img} ></img>
                <div className="rounded-4 card" >
                    <div className="card rounded-4 " >
                        <div className="">
                            <label className="form-label " >Name*</label>
                            <input type="text" className="form-control " onChange={e => setName(e.target.value)} id="fullnameInput" placeholder="Enter your fullname" />
                        </div>

                        <div className="">
                            <label className="form-label" >Surname*</label>
                            <input type="text" className="form-control " onChange={e => setSurname(e.target.value)} id="usernameInput" placeholder="Enter your username" />
                        </div>

                        <div className="">
                            <label className="form-label" >Email*</label>
                            <input type="email" className="form-control " onChange={e => setEmail(e.target.value)} id="emailInput" placeholder="Enter your mail" />
                        </div>

                        <div className="position-relative">
                            <label className="form-label">Password*</label>
                            <div className="input-group has-validation">
                                <span className="input-group-text " onClick={seePassword}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
                                        <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z" />
                                        <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829" />
                                        <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z" />
                                    </svg>
                                </span>
                                <input type="password" className="form-control" id="password1Input" placeholder="Enter your password" required />
                                <div className="invalid-feedback">
                                    Enter your password
                                </div>
                            </div>
                        </div>

                        <div className="position-relative ">
                            <label className="form-label">Password*</label>
                            <div className="input-group has-validation">
                                <span className="input-group-text " onClick={seePassword}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
                                        <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z" />
                                        <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829" />
                                        <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z" />
                                    </svg>
                                </span>
                                <input type="password" className="form-control" onChange={e => setPassword(e.target.value)} id="passwordInput" placeholder="Enter your password" required />
                                <div className="invalid-feedback">
                                    Enter your password
                                </div>
                            </div>
                        </div>

                        <button className="btn btn-warning border border-secondary " onClick={handleClick} type="button">Sign Up</button>
                        <a href="/signin" ><p className="text-center text-warning ">Do have an account ?</p></a>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default SignUp;