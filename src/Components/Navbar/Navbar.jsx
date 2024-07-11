import { useState } from "react";
import { BiSearch } from 'react-icons/bi'
import { PiTelevisionBold } from 'react-icons/pi'
import { Link, useNavigate } from 'react-router-dom'
import './NavbarStyles.css'
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/slice/userSlice";
import Cookies from "js-cookie";
const Navbar = () => {
    const navigateTo = useNavigate()
    const dispatch = useDispatch()
    const state = useSelector((store) => { return (store.user.data) })
    const [dropdown, setDropdown] = useState('none')
    const [searchText, setSearchText] = useState("")
    // const [dropLinkStyle,setDropLinkStyle]=useState('none')

    document.body.onClick = (() => setDropdown('none'))

    function handleSearchChange(data) {
        setSearchText(data.target.value);
    }
    async function handleFormSubmit(e) {
        e.preventDefault();
        navigateTo('/search?query=' + searchText)
    }
    function setProfileImg() {
        if (state.gender === 'male')
            return ('profile-img-male')
        else if (state.gender === 'female')
            return ('profile-img-female')
        else
            return ('profile-img-female')
    }

    function dropdownSetting() {
        setDropdown((dropdown == 'none') ? 'flex' : 'none')
    }

    function handleLogout() {
        Cookies.remove('filmyRadarCredentials')
        dispatch(login({}))
        navigateTo('/')

    }

    return (
        <div className="navbar">
            <Link to='/'>
                <h1><PiTelevisionBold /><span className="nav-h-span">F</span>ilmy<span className="nav-h-span">R</span>adar</h1>
            </Link>
            <div className="nav-search">
                <form onSubmit={handleFormSubmit} >
                    <input type="text" name="searchbox" placeholder="Movies, TV shows" onChange={handleSearchChange} value={searchText} />
                    <button type="submit"><BiSearch /></button>
                </form>
            </div>
            {('username' in state) ?
                <div className="nav-dropdown">
                    <div onClick={dropdownSetting} className="profile-div">
                        <p>{state.username}</p>
                        <span className={setProfileImg()}></span>
                    </div>
                    <div className="nav-drop-menu" onMouseLeave={dropdownSetting} style={{ display: dropdown }}>
                        <div>
                            <span>dashboard</span>
                        </div>
                        <hr />
                        <div>
                            <span>profile</span>
                        </div>
                        <hr />
                        <div onClick={handleLogout}>
                            <span>logout</span>
                        </div>
                    </div>
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

        </div >
    );
};
export default Navbar;