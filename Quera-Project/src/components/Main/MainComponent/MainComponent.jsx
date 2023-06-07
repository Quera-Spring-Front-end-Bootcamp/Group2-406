/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { StatusHeader } from "./StatusHeader/StatusHeader";
import { ProjectsBoard } from "./ProjectsBoard/ProjectsBoard";
import { BoardView } from "./BoardView/BoardView";

export const MainComponent = ({
  boardViewVisible,
  listViewVisible,
  calenderViewVisible,
  TagDetails
}) => {
  return (
    <main className="w-full h-[844px]">
      <header>
        <StatusHeader TagDetails={TagDetails} />
      </header>
      <section>
        {listViewVisible && <ProjectsBoard />}
        {boardViewVisible && <BoardView />}
      </section>
    </main>
  );
};
