import { Link } from "react-router-dom";
import Logo from "./Logo";

const Footer = () => {
    return (
        <footer className="bg-[#E7ECFF] px-[5%] py-6">
            <div className="flex justify-between items-center py-10">
                <span>&copy;2023 HAYA</span>
                <button className="btn">Subscribe to Newsletter</button>
            </div>
            <hr className="bg-[#CDD1D4] text-[#CDD1D4]" />
            <div className="flex justify-between py-3">
                <div className="flex gap-x-5">
                    <Link to={'/'}>Home</Link>
                    <span>About</span>
                    <span>Contact</span>
                </div>
                <Logo />
                <div className="flex gap-x-8 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="16" viewBox="0 0 8 16" fill="none">
                        <path d="M5 5.5V3.5C5 2.948 5.448 2.5 6 2.5H7V0H5C3.343 0 2 1.343 2 3V5.5H0V8H2V16H5V8H7L8 5.5H5Z" fill="#B0B8BC" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M3.5 1.75C3.5 2.7165 2.7165 3.5 1.75 3.5C0.783502 3.5 0 2.7165 0 1.75C0 0.783502 0.783502 0 1.75 0C2.7165 0 3.5 0.783502 3.5 1.75ZM0 5H3.578V16H0V5ZM13.2998 5.12119C13.2954 5.11973 13.2909 5.11825 13.2864 5.11678C13.2616 5.10856 13.2367 5.10033 13.21 5.093C13.162 5.082 13.114 5.073 13.065 5.065C12.875 5.027 12.667 5 12.423 5C10.337 5 9.014 6.517 8.578 7.103V5H5V16H8.578V10C8.578 10 11.282 6.234 12.423 9V16H16V8.577C16 6.915 14.861 5.53 13.324 5.129C13.3159 5.12643 13.3078 5.12382 13.2998 5.12119Z" fill="#B0B8BC" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M16 2.87234C15.405 3.13334 14.771 3.30634 14.11 3.39034C14.79 2.98434 15.309 2.34634 15.553 1.57734C14.919 1.95534 14.219 2.22234 13.473 2.37134C12.871 1.73034 12.013 1.33334 11.077 1.33334C9.261 1.33334 7.799 2.80734 7.799 4.61434C7.799 4.87434 7.821 5.12434 7.875 5.36234C5.148 5.22934 2.735 3.92234 1.114 1.93134C0.831 2.42234 0.665 2.98434 0.665 3.58934C0.665 4.72534 1.25 5.73234 2.122 6.31534C1.595 6.30534 1.078 6.15234 0.64 5.91134C0.64 5.92134 0.64 5.93434 0.64 5.94734C0.64 7.54134 1.777 8.86534 3.268 9.17034C3.001 9.24334 2.71 9.27834 2.408 9.27834C2.198 9.27834 1.986 9.26634 1.787 9.22234C2.212 10.5213 3.418 11.4763 4.852 11.5073C3.736 12.3803 2.319 12.9063 0.785 12.9063C0.516 12.9063 0.258 12.8943 0 12.8613C1.453 13.7983 3.175 14.3333 5.032 14.3333C11.068 14.3333 14.368 9.33334 14.368 4.99934C14.368 4.85434 14.363 4.71434 14.356 4.57534C15.007 4.11334 15.554 3.53634 16 2.87234Z" fill="#B0B8BC" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M13.456 2.75866C14.415 2.81266 14.886 2.95466 15.32 3.72666C15.772 4.49766 16 5.82566 16 8.16466V8.16766V8.17266C16 10.5007 15.772 11.8387 15.321 12.6017C14.887 13.3737 14.416 13.5137 13.457 13.5787C12.498 13.6337 10.089 13.6667 8.002 13.6667C5.911 13.6667 3.501 13.6337 2.543 13.5777C1.586 13.5127 1.115 13.3727 0.677 12.6007C0.23 11.8377 0 10.4997 0 8.17166V8.16966V8.16666V8.16366C0 5.82566 0.23 4.49766 0.677 3.72666C1.115 2.95366 1.587 2.81266 2.544 2.75766C3.501 2.69366 5.911 2.66666 8.002 2.66666C10.089 2.66666 12.498 2.69366 13.456 2.75866ZM11 8.16666L6 5.16666V11.1667L11 8.16666Z" fill="#B0B8BC" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M5 0H11C13.761 0 16 2.239 16 5V11C16 13.761 13.761 16 11 16H5C2.239 16 0 13.761 0 11V5C0 2.239 2.239 0 5 0ZM11 14.5C12.93 14.5 14.5 12.93 14.5 11V5C14.5 3.07 12.93 1.5 11 1.5H5C3.07 1.5 1.5 3.07 1.5 5V11C1.5 12.93 3.07 14.5 5 14.5H11ZM4 8C4 5.791 5.791 4 8 4C10.209 4 12 5.791 12 8C12 10.209 10.209 12 8 12C5.791 12 4 10.209 4 8ZM5.5 8C5.5 9.378 6.622 10.5 8 10.5C9.378 10.5 10.5 9.378 10.5 8C10.5 6.621 9.378 5.5 8 5.5C6.622 5.5 5.5 6.621 5.5 8ZM12.833 3.7C12.833 3.99437 12.5944 4.233 12.3 4.233C12.0057 4.233 11.767 3.99437 11.767 3.7C11.767 3.40564 12.0057 3.167 12.3 3.167C12.5944 3.167 12.833 3.40564 12.833 3.7Z" fill="#B0B8BC" />
                    </svg>
                </div>
            </div>
        </footer>
    );
}

export default Footer;