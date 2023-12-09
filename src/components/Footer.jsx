import { Link } from "react-router-dom";
import Logo from "./Logo";

const Footer = () => {
    return (
        <footer className="bg-[#E7ECFF] px-[5%] py-6">
            <div className="flex justify-between items-center py-10">
                <span>&copy;2023 Yourcompany</span>
                <button>Subscribe to Newsletter</button>
            </div>
            <hr className="bg-[#CDD1D4] text-[#CDD1D4]" />
            <div className="flex justify-between py-3">
                <div className="flex gap-x-5">
                    <Link to={'/'}>Home</Link>
                    <span>About</span>
                    <span>Contact</span>
                </div>
                <Logo />
                <div></div>
            </div>
        </footer>
    );
}

export default Footer;