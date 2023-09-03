import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import './LoginStyles.css'
import { PiTelevisionBold } from 'react-icons/pi'
import Spinner from "../Spinner/Spinner";
import { useDispatch } from "react-redux"
import {login} from '../../store/slice/userSlice'


const Login = () => {

const dispatch=useDispatch()

    const [submitState, setSubmitState] = useState('true')
    const navigateTo = useNavigate();
    let [credentials, setCredentials] = useState({
        username: "",
        password: ""
    });
    let backend_link;
    if (import.meta.env.MODE === 'production') {
        backend_link = import.meta.env.VITE_SERVER_LINK
    }
    else if (import.meta.env.MODE === 'development') {
        backend_link = import.meta.env.VITE_LOCAL_LINK
    }



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
            setSubmitState()
            const check = await axios.post(backend_link + '/login', { credentials });
            if (check.data) {
                dispatch(login(check.data))
                navigateTo('/', { state: check.data })
            }
            else {
                setSubmitState('true')
                alert('Invalid username or password')
            }
        }
        catch (error) {
            console.log('error');
        }
    };


    return (
        <div className="wrapper">
            <div className="login">
                <h1 ><PiTelevisionBold />FilmyRadar</h1>
                <form onSubmit={handleSubmit} autoComplete="off">
                    <div className="login-form-div">
                        <input data-lpignore="true" onChange={handleChange} name="username" type="text" value={credentials.username} placeholder="User Name" />
                    </div>
                    <div className="login-form-div">
                        <input data-lpignore="true" onChange={handleChange} name="password" type="password" value={credentials.password} placeholder="Password" />
                    </div>
                    {submitState ?
                        <button className="btn-login" type="submit">Login
                        </button>
                        :
                        <Spinner></Spinner>
                    }
                    <Link to="/register"><button>Dont have an account? Sign up!</button></Link>
                </form>

            </div>
        </div>
    );
};

export default Login;