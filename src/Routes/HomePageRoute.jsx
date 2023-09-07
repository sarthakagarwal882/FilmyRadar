import Home from "../Components/home/Home"
import Navbar from "../Components/navbar/Navbar"
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { login } from '../store/slice/userSlice';
const HomePage = () => {
    const dispatch = useDispatch()
    const credentials = ((Cookies.get('filmyRadarCredentials')))
    if (credentials === undefined)
        console.log('true');
    else
        dispatch(login(JSON.parse(credentials).data))
    return (
        <div >
            <Navbar/>
            <Home/>
        </div>
    )
    
}
export default HomePage