import axios from "axios";
import { useState } from "react";
import { BiSearch } from 'react-icons/bi'
import { PiTelevisionBold } from 'react-icons/pi'
// import { BiSolidUserCircle } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import './NavbarStyles.css'
const Navbar = (props) => {
    const [searchText, setSearchText] = useState("")
    function handleSearchChange(data) {
        setSearchText(data.target.value);
    }
    async function handleFormSubmit(e) {
        e.preventDefault();
        const data = await axios.post("http://localhost:8000/search", { searchText })
        console.log(data);
    }
    function setProfileImg(){
        if(props.state.gender==='male')
        return('profile-img-male')
        else if(props.state.gender==='female')
        return('profile-img-female')
        else
        return('profile-img-female')
    }
    return (
        <div className="navbar" >
            <Link to='/'>
                <h1><PiTelevisionBold /><span className="nav-h-span">F</span>ilmy<span className="nav-h-span">R</span>adar</h1>
            </Link>
            <div className="nav-search">
                <form onSubmit={handleFormSubmit}>
                    <input type="text" placeholder="Movies, TV shows, Person" onChange={handleSearchChange} value={searchText} />
                    <button type="submit"><BiSearch /></button>
                </form>
            </div>
            {(props.state == null) ?
                <div className="nav-auth">
                    <Link to="/login">
                        <div>
                            <span>Login</span>
                        </div>
                    </Link>
                    <Link to="/register">
                        <div>
                            <span>Signup</span>
                        </div>
                    </Link>
                </div>
                :
                
                <div className="profile-div">
                    <p>{props.state.username}</p>
                    <span className={setProfileImg()}></span>
                </div>
            }


        </div>
    );
};
export default Navbar;