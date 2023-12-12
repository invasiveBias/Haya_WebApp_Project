import { useCallback } from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const SignUpPage = () => {
    const handleSubmit = useCallback((e) => {
        e.preventDefault();
    }, [])

    return (
        <div>
            <div className="flex flex-col justify-center items-center min-h-[70vh]">
                <h1 className="text-white font-bold text-[1.8rem]">Sign up to hire talent</h1>
                <div className="bg-white mt-5 w-[40%] p-16 rounded-3xl">
                    <form action="" onSubmit={handleSubmit}>
                        <input
                            className="block w-full my-3 bg-[#DAD7D7] p-1 rounded-lg placeholder:text-[#091133] px-3"
                            type="text"
                            name="first-name"
                            id="first-name"
                            placeholder="First name"
                        />
                        <input
                            className="block w-full my-3 bg-[#DAD7D7] p-1 rounded-lg placeholder:text-[#091133] px-3"
                            type="text"
                            name="last-name"
                            id="last-name"
                            placeholder="Last name"
                        />
                        <input
                            className="block w-full my-3 bg-[#DAD7D7] p-1 rounded-lg placeholder:text-[#091133] px-3"
                            type="text"
                            name="email"
                            id="email"
                            placeholder="Email Address"
                        />
                        <span className="text-right flex gap-x-2 justify-end items-center !w-full !text-[#091133] capitalize">
                            continue
                            <button type="submit">
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="20" viewBox="0 0 36 20" fill="none">
                                    <rect width="36" height="20" rx="8" fill="#091133" />
                                    <path d="M14.3999 4L21.9999 10L14.3999 15.6" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </span>
                        <Link to="/login">
                            <span className="btn cursor-pointer !bg-[#DAD7D7] mt-2 !py-3 text-sm font-[500] !w-full !text-[#091133] capitalize">
                                Already have an account? Login with DID
                            </span>
                        </Link>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default SignUpPage;