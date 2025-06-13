// import { useEffect } from "react";

import { useEffect } from "react";

import "./App.css";
// import { GameModule } from "./game/game";
import { GameModule } from "./game/game";
import { useCircularTransition } from "./hooks/useCircularTransition";
import { After } from "./pages/after";
import { Birth } from "./pages/birth";
import { Debug } from "./pages/debug";
import { Dev } from "./pages/dev";
import Game from "./pages/game";
import { Graduation } from "./pages/graduation";
import { Launch } from "./pages/launch";
import { $UI } from "./store/ui";

function App() {
    const route = $UI.use((state) => state.route);
    const { trigger, TransitionComponent } = useCircularTransition(
        undefined,
        0.6,
        0.5,
    );
    const {
        trigger: cardsTrigger,
        TransitionComponent: TransitionComponentCards,
    } = useCircularTransition(undefined, 0.6, 2, "cards");

    useEffect(() => {
        GameModule.gamestart();
        const handleContextMenu = (e: Event) => {
            e.preventDefault();
        };
        document.addEventListener("contextmenu", handleContextMenu);
        return () => {
            document.removeEventListener("contextmenu", handleContextMenu);
        };
    }, []);

    return (
        <>
            {TransitionComponent}
            {TransitionComponentCards}
            <Debug />
            {route === "game" && <Game trigger={trigger} />}
            {route === "birth" && <Birth trigger={cardsTrigger} />}
            {route === "launch" && <Launch trigger={trigger} />}
            {route === "graduation" && <Graduation trigger={trigger} />}
            {route === "after" && <After />}
            {route === "dev" && <Dev />}
        </>
    );
}

export default App;
