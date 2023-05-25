import { StatusHeader } from "./StatusHeader/StatusHeader";
import { BoardView } from "./BoardView/BoardView";

export const MainComponent = () => {

    return(
        <main className="w-full h-[844px]">
            <header>
                <StatusHeader/>
            </header>
            <section>
                <BoardView></BoardView>
            </section>
        </main>
    );
}