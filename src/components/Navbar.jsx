import { Link } from "react-router-dom";
import Logo from "./Logo";

const NavBar = () => {
    return (<>
        <nav className="h-[3rem] bg-white px-[15%] flex items-center justify-between">
            <div className="flex items-center gap-x-5">
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Contact</a>
            </div>
            <Logo />
            <div className="flex items-center gap-x-5">
                <Link to={'/login'}>
                    <button className="btn">login</button>
                </Link>
                <Link to={'/signup'}>
                    <button className="btn">sign up</button>
                </Link>
            </div>
        </nav>
    </>);
}

export default NavBar;