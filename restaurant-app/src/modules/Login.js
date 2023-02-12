import React, { useState } from "react";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Username: ${username}, Password: ${password}`);
        // Add code to send these values to the server and handle a successful/unsuccessful login
    };

    return (
        <div className="d-flex align-items-center h-100">
            <form onSubmit={handleSubmit} className="mx-auto" style={{ width: "25%", margin: "4rem" }}>
                <div className="form-group">
                    <h4
                        style={{}}
                    >Log In</h4>
                    <input
                        style={{ marginTop: "3rem" }}
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <input
                        style={{ marginTop: "1.5rem" }}
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        className="form-control"
                    />
                </div>
                <div className="text-center">
                    <button
                        style={{ marginTop: "1.8rem", width: "50%" }}
                        type="submit"
                        className="btn btn-primary"
                    >
                        Login
                    </button>
                </div>

            </form>

        </div>
    );
}

export default Login;