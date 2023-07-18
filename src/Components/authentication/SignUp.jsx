import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
const SignUp = () => {
    const navigateTo = useNavigate();
    const [cfPassColor, setCfPassColor] = useState("")
    const [formData, setFormData] = useState({
        fname: "",
        lname: "",
        email: "",
        ph_no: "",
        username: "",
        password: "",
    });

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

        const check = await axios.post("http://localhost:8000/register", { formData });
        if (check.data) {
            navigateTo('/success');
        }
        else
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

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} name="fname" type="text" placeholder="First name" value={formData.fname} required />
                <input onChange={handleChange} name="lname" type="text" placeholder="Last name" value={formData.lname} />
                <input onChange={handleChange} name="email" type="email" placeholder="email" value={formData.email} required />
                <input onChange={handleChange} name="ph_no" type="tel" placeholder="Phone number" value={formData.ph_no} required />
                <input onChange={handleChange} name="username" type="text" placeholder="Username" value={formData.username} required />
                <input onChange={handleChange} name="password" type="password" placeholder="Password" value={formData.password} required />
                <input onChange={checkPass} style={{ backgroundColor: cfPassColor }} name="cf_password" type="password" placeholder="Confirm password" value={formData.cf_password} required />
                <button type="submit">Register</button>
            </form>
            <Link to="/login"><button>Already have an account? Log in!</button></Link>
        </div>
    );
};

export default SignUp;