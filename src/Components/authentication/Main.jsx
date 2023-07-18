import { Link } from "react-router-dom";

const Main = () => {
    return (
        <div>
            <Link to="/login"><button>Login</button></Link>
            <Link to="/signup"><button>Sign Up</button></Link>
        </div>
    );
};

export default Main;