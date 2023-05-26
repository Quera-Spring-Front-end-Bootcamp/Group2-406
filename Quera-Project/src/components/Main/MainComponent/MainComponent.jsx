import { StatusHeader } from "./StatusHeader/StatusHeader";
import { ProjectsBoard } from "./ProjectsBoardParent/ProjectsBoard";

export const MainComponent = () => {

    return(
        <main className="w-full h-[844px]">
            <header>
                <StatusHeader/>
            </header>
            <section>
                <ProjectsBoard/>
            </section>
        </main>
    );
}