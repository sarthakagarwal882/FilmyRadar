import { useLocation } from "react-router-dom"
import Home from "../Components/home/Home"
import Navbar from "../Components/navbar/Navbar"

const HomePage = () => {
    let location=useLocation();
    let state=location.state
    return (
        <div >
            <Navbar state={state}/>
            <Home state={state}/>
        </div>
    )
    
}
export default HomePage