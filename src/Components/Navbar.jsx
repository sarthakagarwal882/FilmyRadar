import axios from "axios";
import { useState } from "react";
import { BiSearch } from 'react-icons/bi'
import {PiTelevisionBold } from 'react-icons/pi'
// import { BiSolidUserCircle } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import './NavbarStyles.css'
const Navbar = () => {
    const [searchText, setSearchText] = useState("")
    function handleSearchChange(data) {
        setSearchText(data.target.value);
    }
    async function handleFormSubmit(e) {
        e.preventDefault();
        const data = await axios.post("http://localhost:8000/search", { searchText })
        console.log(data);
    }
    return (
        <div className="navbar" >
            <Link to='/'>
            <h1><PiTelevisionBold/><span className="nav-h-span">F</span>ilmy<span className="nav-h-span">R</span>adar</h1>
            </Link>
            <div className="nav-search">
                <form onSubmit={handleFormSubmit}>
                    <input type="text" placeholder="Movies, TV shows, Person" onChange={handleSearchChange} value={searchText} />
                    <button type="submit"><BiSearch /></button>
                </form>
            </div>
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

        </div>
    );
};
export default Navbar;