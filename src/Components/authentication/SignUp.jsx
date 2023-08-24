import './SignUpStyles.css'
import { Link, useNavigate } from "react-router-dom";
import { PiTelevisionBold } from 'react-icons/pi'
import axios from "axios";
import { useState } from "react";
const SignUp = () => {
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
    let backend_link;
    if (import.meta.env.MODE === 'production') {
        backend_link = import.meta.env.VITE_SERVER_LINK
    }
    else if (import.meta.env.MODE === 'development') {
        backend_link = import.meta.env.VITE_LOCAL_LINK
    }
    function handleSubmit(e) {
        e.preventDefault();
        if (cfPassColor === "" || cfPassColor === "red") {
            alert("passwords do not match")
        }
        else {
            sendData();
        }
    }
    async function sendData() {

        const check = await axios.post(backend_link+"/register", { formData });
        if (check.data) {
            navigateTo('/', { state: check.data });
        }
        else if (check.data === false)
            alert("username already taken");

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
                    {/* <p>* marked fields are optional</p> */}
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

                    <button type="submit" className='btn-register'>Register</button>
                </form>
                <Link to="/login"><button>Already have an account? Log in!</button></Link>
            </div>
        </div>
    );
};

export default SignUp;