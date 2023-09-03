import axios from "axios";
import {useState } from "react";
import { BiSearch } from 'react-icons/bi'
import { PiTelevisionBold } from 'react-icons/pi'
import { Link } from 'react-router-dom'
import './NavbarStyles.css'
import { useSelector } from "react-redux";
const Navbar = () => {

    const state = useSelector((userInfo) => { return (userInfo.user.data) })
    console.log(state);
    const [searchText, setSearchText] = useState("")

    let backend_link;
    if (import.meta.env.MODE === 'production') {
        backend_link = import.meta.env.VITE_SERVER_LINK
    }
    else if (import.meta.env.MODE === 'development') {
        backend_link = import.meta.env.VITE_LOCAL_LINK
    }
    function handleSearchChange(data) {
        setSearchText(data.target.value);
    }
    async function handleFormSubmit(e) {
        e.preventDefault();
        const data = await axios.post(backend_link + "/search", { searchText })
        
    }
    function setProfileImg() {
        if (state.gender === 'male')
            return ('profile-img-male')
        else if (state.gender === 'female')
            return ('profile-img-female')
        else
            return ('profile-img-female')
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
            {('username' in state) ?
                <div className="profile-div">
                    <p>{state.username}</p>
                    <span className={setProfileImg()}></span>
                </div>
                :
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
            }
        </div>
    );
};
export default Navbar;