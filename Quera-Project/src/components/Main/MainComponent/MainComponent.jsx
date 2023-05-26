import { StatusHeader } from "./StatusHeader/StatusHeader";
import { BoardView } from "./BoardView/BoardView";


export const MainComponent = ({ boardViewVisible, listViewVisible, calenderViewVisible }) => {

    return(
        <main className="w-full h-[844px]">
            <header>
                <StatusHeader/>
            </header>
            <section>
                {boardViewVisible && <BoardView />}  
            </section>
        </main>
    );
}