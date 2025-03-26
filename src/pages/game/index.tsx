import { FC } from "react";

import GameCards from "./components/cards";
import GameHeader from "./components/header";

const Game: FC = () => {
    return (
        <div className="w-screen h-screen overflow-hidden">
            <GameHeader />
            <GameCards />
        </div>
    );
};

Game.displayName = "Game";
export default Game;
