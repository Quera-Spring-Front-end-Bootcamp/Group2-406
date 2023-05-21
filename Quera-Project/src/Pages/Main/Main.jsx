import { Header } from "../../components/Main/Header/Header";
import { Aside } from "../../components/Main/Aside.jsx/Aside";
import { Footer } from "../../components/Main/Footer/Footer";
import { MainComponent } from "../../components/Main/MainComponent/MainComponent";

export const Main = () => {
    return(
        <div className='w-[1440px] h-[500px] mx-auto my-0 flex'>
           <Header />
            <MainComponent />
            <Aside />
            <Footer />
        </div>
    );
}