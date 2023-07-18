import { useEffect, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
import './LoginStyles.css'
// var bcrypt = require('bcryptjs');


const Login = () => {
    const navigateTo = useNavigate();
    const [pageRes, setPageRes] = useState(0);
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
            const check = await axios.post('http://localhost:8000/login/check', { credentials });
            console.log(check.data);
            if (!check.data) {
                setPageRes(1);
            }
            else{
                setPageRes(-1);
            }
                console.log(check.data);
        }
        catch (error) {
            console.log(error);
        }
    };


    useEffect(() => {
        { (pageRes===1) && navigateTo('/success') }

        { (pageRes===-1) && navigateTo('/failure') }
    }, [pageRes]);



    return (
        <div className="wrapper-login">
        <div className="login">
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} name="username" type="text" value={credentials.username} placeholder="User Name" />
                <input onChange={handleChange} name="password" type="password" value={credentials.password} placeholder="Password" />
                <button type="submit">Log in</button>
                <Link to="/signup"><button>Dont have an account? Sign up!</button></Link>
            </form>

        </div>
        </div>
    );
};

export default Login;