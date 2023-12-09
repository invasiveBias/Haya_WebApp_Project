import { useCallback } from "react";
import Footer from "../components/Footer";

const LoginPage = () => {
    const handleSubmit = useCallback((e) => {
        e.preventDefault();
    }, [])

    return (
        <div>
            <div className="flex flex-col justify-center items-center min-h-[70vh]">
                <h1>Login with DID</h1>
                <div className="bg-white">
                    <form action="" onSubmit={handleSubmit}>
                        <label htmlFor="did-address">DID Address</label>
                        <input className="block" type="text" name="did-address" id="did-address" />
                        <button>continue</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default LoginPage;