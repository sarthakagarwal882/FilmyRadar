import Home from "../Components/home/Home"
import Navbar from "../Components/navbar/Navbar"
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { login } from '../store/slice/userSlice';
import axios from "axios";
import backend_ref from "../Components/BackendRef";
import { useState } from "react";
const HomePage = () => {
    const [returnState, setReturnState] = useState(null)
    const dispatch = useDispatch()
    const credentials = ((Cookies.get('filmyRadarCredentials')))
    const checkCookiedata = async (data) => {
        let check = await axios.post(backend_ref + '/verify', data)
        setReturnState(check);
        if (check.data === 'true')
            dispatch(login(JSON.parse(credentials).data))
    }
    if (credentials === undefined)
        null
    else {
        checkCookiedata(JSON.parse(credentials))
    }

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