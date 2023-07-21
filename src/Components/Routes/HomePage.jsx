import { useLocation } from "react-router-dom"
import Home from "../Home"
import Navbar from "../Navbar"

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