import { Aside, Footer,Newworkspace ,MainComponent, Header } from "../../components";


import { useState } from "react";

export const Main = () => {
    const Lesson = [
        {id : 1, nameLesson: "درس مدیریت پروژه", colorSquare:"rgba(113, 253, 169, 1)",projects:[] },
        {id : 2, nameLesson: "کارهای شخصی", colorSquare:"rgba(146, 255, 7, 1)",projects:[] },
        {id : 3, nameLesson: "درس کامپایلر", colorSquare:"rgba(222, 136, 253, 1)",projects:[] },
        {id : 4, nameLesson: "درس طراحی الگوریتم", colorSquare:"rgba(252, 7, 51, 1)",projects:[] },
        ];
    const [showWork,setWork]=useState(false)
    const [showProject,setnew]=useState(false)
    const [Mylesson, setMylesson] = useState(Lesson);
    
    return(<>    <Newworkspace Mylesson={Mylesson} setMylesson={setMylesson}  show={showWork} setshow={setWork}/>
        <div className='w-[1440px] h-[1024px] mx-auto my-0 flex flex-row'>
            {/* left content */}
            <div className="flex flex-col justify-start w-[1080px] h-auto mr-5">
                <Header />
                <MainComponent />
                <Footer />
            
            </div>
            {/* right content */}
            <div className="w-[330] h-auto">
            <Aside Mylesson={Mylesson} setMylesson={setMylesson}  setWork={setWork}/>
            </div>
        </div></>
    );
}