import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import './LoginStyles.css'
import { BiSolidLogInCircle } from 'react-icons/bi'
import {PiTelevisionBold} from 'react-icons/pi'
// var bcrypt = require('bcryptjs');


const Login = () => {
    const navigateTo = useNavigate();
    let [credentials, setCredentials] = useState({
        username: "",
        password: ""
    });



    const handleChange = (event) => {
        let { name, value } = event.target;
        setCredentials((prevValue) => {
            return (
                {
                    ...prevValue,
                    [name]: value
                }
            );
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const check = await axios.post('http://localhost:8000/login', { credentials });
            if (check.data) {
                navigateTo('/',{state:credentials.username})
            }
            else {
                alert('Invalid username or password')
            }
        }
        catch (error) {
            console.log(error);
        }
    };


    return (
        <div className="wrapper">
            <div className="login">
                <h1 ><PiTelevisionBold/>FilmyRadar</h1>
                <form onSubmit={handleSubmit} autoComplete="off">
                    <div>
                        <input onChange={handleChange} name="username" type="text" value={credentials.username} placeholder="User Name" />
                    </div>
                    <div>
                        <input onChange={handleChange} name="password" type="password" value={credentials.password} placeholder="Password" />
                    </div>
                    <button className="btn-login" type="submit">Log in
                    </button>
                    <Link to="/register"><button>Dont have an account? Sign up!</button></Link>
                </form>

            </div>
        </div>
    );
};

export default Login;