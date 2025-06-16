import { HTMLMotionProps } from "motion/react";
import { FC } from "react";

import GameCards from "./components/cards";
import { GameChoices } from "./components/choises";
import GameHeader from "./components/header";

import { CircularTransitionTrigger } from "@/hooks/useCircularTransition";

import "./index.css";

interface GameProps extends HTMLMotionProps<"div"> {
    trigger?: CircularTransitionTrigger;
}

const Game: FC<GameProps> = ({ trigger }) => {
    return (
        <div className="w-screen h-screen overflow-hidden game-background">
            <GameHeader />
            <GameCards trigger={trigger} />
            <GameChoices />
        </div>
    );
};

Game.displayName = "Game";
export default Game;
