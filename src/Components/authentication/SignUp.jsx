import './SignUpStyles.css'
import { Link, useNavigate } from "react-router-dom";
import { PiTelevisionBold } from 'react-icons/pi'
import axios from "axios";
import { useState } from "react";
import Spinner from '../Spinner/Spinner';
import { useDispatch } from 'react-redux';
import { login } from '../../store/slice/userSlice';
import backend_ref from '../BackendRef';
import Cookies from 'js-cookie';
const SignUp = () => {
    const dispatch = useDispatch()
    const [regState, setRegState] = useState('true')
    const navigateTo = useNavigate();
    const [cfPassColor, setCfPassColor] = useState("")
    const [formData, setFormData] = useState({
        fname: "",
        lname: "",
        gender: "",
        email: "",
        ph_no: "",
        username: "",
        password: "",
    });
    const [gender, setGender] = useState({
        male: false,
        female: false,
        other: false
    })


    function handleSubmit(e) {
        e.preventDefault();
        try {
            if (cfPassColor === "" || cfPassColor === "red") {
                alert("passwords do not match")
            }
            else {
                setRegState();
                sendData();
            }
        }
        catch (e) {
            null
        }
    }


    async function sendData() {

        const check = await axios.post(backend_ref + "/register", { formData });
        console.log(check);
        if (check.data.data) {
            Cookies.set('filmyRadarCredentials',JSON.stringify({token:check.data.token}),{expires:30})
            dispatch(login(check.data))
            navigateTo('/');
        }
        else if (check.data === false) {
            setRegState('true')
            alert("username already taken");
        }

    }
    function handleChange(event) {
        const { value, name } = event.target;
        setFormData((prevValue) => {
            return ({
                ...prevValue,
                [name]: value
            }
            );
        });
    }
    function handleCheck(event) {
        setFormData((prevValue) => {
            return ({
                ...prevValue,
                gender: event.target.name
            })
        }
        )
        setGender(() => {
            if (event.target.name === "male")
                return ({
                    male: true,
                    female: false,
                    other: false
                })
            if (event.target.name === "female")
                return ({
                    male: false,
                    female: true,
                    other: false
                })
            if (event.target.name === "other")
                return ({
                    male: false,
                    female: false,
                    other: true
                })
        })
    }
    function checkPass(event) {
        const value = event.target.value;
        const bool = value === formData.password;
        if (value === "")
            setCfPassColor("");
        else
            setCfPassColor(
                (bool ? "green" : "red")
            );
    }
    function cfSetColor() {
        if (cfPassColor === 'green')
            return (
                'i-signup-div cf-check-pass')
        else if (cfPassColor === 'red')
            return ('i-signup-div cf-check-fail')
    }

    return (

        <div className='wrapper'>
            <div className='signup'>
                <h1 ><PiTelevisionBold />FilmyRadar</h1>
                <form onSubmit={handleSubmit} autoComplete='off'>
                    <div className='inp-dual'>
                        <div className='i-signup-div'>
                            <input onChange={handleChange} name="fname" type="text" placeholder="First name" value={formData.fname} required />
                        </div>
                        <div className='i-signup-div'>
                            <input onChange={handleChange} name="lname" type="text" placeholder="Last name (Optional)" value={formData.lname} />
                        </div>
                    </div>
                    <div className='i-signup-div gender'>
                        <h3>Gender</h3>
                        <div className='gender-div'>
                            <div>
                                <label htmlFor="">Male</label>
                                <input type='checkbox' name="male" onChange={handleCheck} checked={gender.male} />
                            </div>
                            <div>
                                <label htmlFor="">Female</label>
                                <input type="checkbox" name="female" onChange={handleCheck} checked={gender.female} />
                            </div>
                            <div>
                                <label htmlFor="">Other</label>
                                <input type="checkbox" name="other" onChange={handleCheck} checked={gender.other} />
                            </div>
                        </div>
                    </div>
                    <div className='i-signup-div'>
                        <input onChange={handleChange} name="email" type="email" placeholder="Email" value={formData.email} required />
                    </div>
                    <div className='inp-dual'>
                        <div className='i-signup-div'>
                            <input onChange={handleChange} name="ph_no" type="tel" placeholder="Phone number" value={formData.ph_no} required />
                        </div>
                        <div className='i-signup-div'>
                            <input onChange={handleChange} name="username" type="text" placeholder="Username" value={formData.username} required />
                        </div>
                    </div>
                    <div className='inp-dual'>
                        <div className='i-signup-div'>
                            <input onChange={handleChange} name="password" type="password" placeholder="Password" value={formData.password} required />
                        </div>
                        <div className={(cfPassColor === '') ? 'i-signup-div' : cfSetColor()}>
                            <input onChange={checkPass} name="cf_password" type="password" placeholder="Confirm password" value={formData.cf_password} required />
                        </div>
                    </div>
                    {(regState) ?
                        <button type="submit" className='btn-register'>Register</button>
                        :
                        <Spinner></Spinner>
                    }
                </form>
                <Link to="/login"><button>Already have an account? Log in!</button></Link>
            </div>
        </div>
    );
};

export default SignUp;