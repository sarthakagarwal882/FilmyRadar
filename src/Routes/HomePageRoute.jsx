import Home from "../Components/home/Home"
import Navbar from "../Components/navbar/Navbar"
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { login } from '../store/slice/userSlice';
import axios from "axios";
import backend_ref from "../Components/BackendRef";
import { useState, useEffect } from "react";


const HomePage = () => {


    const credentials = ((Cookies.get('filmyRadarCredentials')))
    const [returnState, setReturnState] = useState((credentials === undefined) ? 'true' : null)
    const dispatch = useDispatch()

    const checkCookiedata = async (data) => {
        let check = await axios.post(backend_ref + '/verify', data)
        setReturnState('true')
        if (check.data === 'false')
            null
        else
            dispatch(login(check.data))
    }

    if (credentials !== undefined)
        checkCookiedata(JSON.parse(credentials))

    return (
        (returnState) ?
            <div >
                <Navbar />
                <Home />
            </div>
            :
            null
    )

}
export default HomePage