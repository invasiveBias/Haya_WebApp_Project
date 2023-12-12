import { useCallback } from "react";
import Footer from "../components/Footer";

const LoginPage = () => {
    const handleSubmit = useCallback((e) => {
        e.preventDefault();
    }, [])

    return (
        <div>
            <div className="flex flex-col justify-center items-center min-h-[70vh]">
                <h1 className="text-white font-bold text-[1.8rem]">Login with DID</h1>
                <div className="bg-white mt-5 w-[30%] p-16 rounded-3xl">
                    <form action="" onSubmit={handleSubmit}>
                        <label htmlFor="did-address">DID Address</label>
                        <input className="block w-full bg-[#DAD7D7] p-1 rounded-lg" type="text" name="did-address" id="did-address" />
                        <button className="btn !bg-[#DAD7D7] mt-5 !py-3 !w-full !text-[#091133] capitalize">continue</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default LoginPage;