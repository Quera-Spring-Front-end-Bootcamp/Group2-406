import { Aside, Footer, MainComponent, Header } from "../../components";

export const Main = () => {
    return(
        <div className='w-[1440px] h-[1024px] mx-auto my-0 flex'>
           <Header />
            <MainComponent />
            <Aside />
            <Footer />
        </div>
    );
}