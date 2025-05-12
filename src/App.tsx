import { useEffect } from "react";

import "./App.css";
import { GameModule } from "./game/game";
import { useCircularTransition } from "./hooks/useCircularTransition";
import { After } from "./pages/after";
import { Birth } from "./pages/birth";
import Game from "./pages/game";
import { Graduation } from "./pages/graduation";
import { Launch } from "./pages/launch";
import { $UI } from "./store/ui";

function App() {
    const route = $UI.use((state) => state.route);
    const { trigger, TransitionComponent } = useCircularTransition();

    useEffect(() => {
        GameModule.gamestart();
    }, []);

    return (
        <>
            {TransitionComponent}
            {route === "game" && <Game trigger={trigger} />}
            {route === "birth" && <Birth trigger={trigger} />}
            {route === "launch" && <Launch trigger={trigger} />}
            {route === "graduation" && <Graduation trigger={trigger} />}
            {route === "after" && <After />}
        </>
    );
}

export default App;
