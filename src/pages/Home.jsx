import Footer from "../components/Footer";
import JobCard from "../components/JobCard";
import NavBar from "../components/Navbar";

const HomePage = () => {
    return (<>
        <NavBar />
        <div className="flex items-center justify-between p-[15%]">
            <div className="text-white w-[50%]">
                <h1 id="intro">Get HIRED OR HAYA
                    any vocation or professional skill
                </h1>
                <button className="btn my-2 !bg-[#3B4EA2]">get started</button>
            </div>
            <div>

            </div>
        </div>
        <div className="text-center text-white">
            <strong className="text-[2.5rem] font-medium">Browse talent by category</strong>
            <p className="text-[1.5rem]">Looking for work? Check for Jobs</p>
            <div className="grid grid-cols-12 gap-5 px-[15%] py-10">
                <div className="col-span-3">
                    <JobCard title="Painter" rating="4.5" skillCount="2373" />
                </div>
                <div className="col-span-3"><JobCard title="Painter" rating="4.5" skillCount="2373" /></div>
                <div className="col-span-3"><JobCard title="Painter" rating="4.5" skillCount="2373" /></div>
                <div className="col-span-3"><JobCard title="Painter" rating="4.5" skillCount="2373" /></div>
                <div className="col-span-3"><JobCard title="Painter" rating="4.5" skillCount="2373" /></div>
                <div className="col-span-3"><JobCard title="Painter" rating="4.5" skillCount="2373" /></div>
                <div className="col-span-3"><JobCard title="Painter" rating="4.5" skillCount="2373" /></div>
                <div className="col-span-3"><JobCard title="Painter" rating="4.5" skillCount="2373" /></div>
            </div>
        </div>
        <div className="bg-white text-center py-[2%]">
            <strong className="text-[3rem]">We Are HAYA</strong>
            <div className="w-[37%] mx-auto text-[1.5rem] my-3">
                From professionals, Artisans, and students, discover the people behind HAYA and
                how they&apos;re using the platform to earn money, apply their talents, and
                learn valuable new skills
            </div>
            <button className="btn mx-auto">Read their stories</button>
        </div>
        <div className="flex items-center justify-between p-[10%]"></div>
        <Footer />
    </>);
}

export default HomePage;