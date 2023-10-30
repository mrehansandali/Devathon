import React, { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { useNavigate, Link } from 'react-router-dom';
import signuplogo from "./assets/signup.jpg"

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();

    const handleSignin = async (e) => {
        e.preventDefault();
        try {
            // Sign in the user
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            setErrorMessage(null);

            // Redirect to the home page
            navigate('/home', { replace: true });
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorMessage);
        }
    };

    return (
        <>
            {errorMessage && (
                <div className="alert alert-danger alert-dismissible fade show" role="alert">
                    <strong>Error ! </strong>Wrong Credentials !
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            )}

            <div className="signuplogo">
                <img src={signuplogo} alt="" />
            </div>


            <div className="container signupform">
                <form onSubmit={handleSignin}>
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
                            Sign In
                        </button>
                        <Link to="/Signup">Don't Have An Account ? Sign Up</Link>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Signin;
