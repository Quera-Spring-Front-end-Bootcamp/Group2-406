import { Aside, Footer, MainComponent, Header } from "../../components";

export const Main = () => {
    return(
        <div className='w-[1440px] h-[1024px] mx-auto my-0 flex flex-row'>
            {/* left content */}
            <div className="flex flex-col justify-start w-[1080px] h-auto mr-5">
                <Header />
                <MainComponent />
                <Footer />
            </div>
            {/* right content */}
            <div className="w-[330] h-auto">
            <Aside />
            </div>
        </div>
    );
}