import { useEffect } from "react";

import "./App.css";
import { GameModule } from "./game/game";
import { useCircularTransition } from "./hooks/useCircularTransition";
import { Birth } from "./pages/birth";
import Game from "./pages/game";
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
            {route === "game" && <Game />}
            {route === "birth" && <Birth trigger={trigger} />}
        </>
    );
}

export default App;
