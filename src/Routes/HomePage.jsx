import { useLocation } from "react-router-dom"
import Home from "../Components/Home"
import Navbar from "../Components/Navbar"

const HomePage = () => {
    let location=useLocation();
    let state=location.state
    console.log(state);
    return (
        <div >
            <Navbar state={state}/>
            <Home state={state}/>
        </div>
    )
    
}
export default HomePage