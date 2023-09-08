import Home from "../Components/home/Home"
import Navbar from "../Components/navbar/Navbar"
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { login } from '../store/slice/userSlice';
import axios from "axios";
import backend_ref from "../Components/BackendRef";
const HomePage = () => {
    const dispatch = useDispatch()
    const credentials = ((Cookies.get('filmyRadarCredentials')))

    const checkCookiedata = async (data) => {
        let check = await axios.post(backend_ref + '/verify', data)
        if (check.data==='true')
            dispatch(login(JSON.parse(credentials).data))

    }

    if (credentials === undefined)
        null
    else {
        checkCookiedata(JSON.parse(credentials))
    }

    return (
        <div >
            <Navbar />
            <Home />
        </div>
    )

}
export default HomePage