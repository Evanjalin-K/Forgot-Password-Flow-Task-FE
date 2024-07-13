import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { userServices } from '../services/userServices';

const Home = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

   userServices.login(email, password)
   .then(response => {
    alert("Login Successful")

    setEmail("");
    setPassword("")

    setTimeout(() =>{
        navigate("/dashboard")
    }, 500);
 })

   .catch(error => {
    alert("Login Failed")

   })
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                    <div className="card">
                        <div className="card-header">
                            <h3>Login</h3>
                        </div>
                        <div className="card-body mt-4">
                            <form onSubmit={handleLogin}>
                                <div className="form-group">
                                    <label htmlFor="email">Enter your email address:</label>
                                    <input
                                        type="email"
                                        className="form-control mt-2"
                                        id="email"
                                        placeholder="Enter your email address"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                    <label htmlFor="password" className="mt-4">Enter your password:</label>
                                    <input
                                        type="password"
                                        className="form-control mt-2"
                                        id="password"
                                        placeholder="Enter your password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary btn-block mt-4">
                                    Submit
                                </button>
                            </form>
                            <div id="message" className="mt-3">
                                {message && <p>{message}</p>}
                            </div>
                        </div>
                        <div className="card-footer">
                            <Link to="/forgot">Forgot Password?</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
