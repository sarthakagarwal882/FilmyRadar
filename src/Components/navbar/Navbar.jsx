import { useState } from "react";
import { BiSearch } from 'react-icons/bi'
import { PiTelevisionBold } from 'react-icons/pi'
import { Link, useNavigate } from 'react-router-dom'
import './NavbarStyles.css'
import { useSelector } from "react-redux";
const Navbar = () => {
    const navigateTo = useNavigate()
    const state = useSelector((userInfo) => { return (userInfo.user.data) })
    const [dropdown,setDropdown]=useState('none')
    const [searchText, setSearchText] = useState("")

    document.body.onClick=(()=>setDropdown('none'))

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

function dropdownSetting(){
    setDropdown((dropdown=='none')?'flex':'none')
}

    return (
        <div className="navbar" >
            <Link to='/'>
                <h1><PiTelevisionBold /><span className="nav-h-span">F</span>ilmy<span className="nav-h-span">R</span>adar</h1>
            </Link>
            <div className="nav-search">
                <form onSubmit={handleFormSubmit}>
                    <input type="text" placeholder="Movies, TV shows" onChange={handleSearchChange} value={searchText} />
                    <button type="submit"><BiSearch /></button>
                </form>
            </div>
            {('username' in state) ?
                <div className="nav-dropdown">
                    <div onClick={dropdownSetting} className="profile-div">
                        <p>{state.username}</p>
                        <span className={setProfileImg()}></span>
                    </div>
                    <div className="nav-drop-menu" onMouseLeave={dropdownSetting} style={{display:dropdown}}>
                        <Link>
                            <span>dashboard</span>
                        </Link>
                        <hr />
                        <Link>
                            <span>profile</span>
                        </Link>
                        <hr />
                        <Link>
                            <span>logout</span>
                        </Link>
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
        </div>
    );
};
export default Navbar;