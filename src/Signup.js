import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { auth } from "./firebase";
import { useNavigate } from 'react-router-dom';
import signuplogo from "./assets/signup.jpg"
import { Link } from 'react-router-dom';

const Signup = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Save the user's full name to the Realtime Database
            const db = getDatabase();
            const userRef = ref(db, 'users/' + user.uid);
            set(userRef, {
                fullName: fullName,
                email: email,
            });

            setErrorMessage(null);

            navigate('/home', { state: { fullName: fullName } });
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorMessage);
        }
    };

    return (
        <>
            {errorMessage && (
                // <div className="alert alert-danger" role="alert">
                //     {errorMessage}
                // </div>
                <div className="alert alert-danger alert-dismissible fade show" role="alert">
                    <strong>Error ! </strong>Email is Already in Use !
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            )}


            <div className="signuplogo">
                <img src={signuplogo} alt="" />
            </div>

            <div className="container signupform">
                <form onSubmit={handleSignup}>
                    <div className="mb-3">
                        <label htmlFor="fullname" className="form-label">
                            Full Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="fullname"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Email address
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="signupactions">
                        <button type="submit" className="btn btn-primary">
                            Sign Up
                        </button>
                        <Link to="/Signin">Already Have An Account ? Log In</Link>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Signup;
