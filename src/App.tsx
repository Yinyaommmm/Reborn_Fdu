import { useEffect } from "react";

import "./App.css";
import { useCircularTransition } from "./hooks/useCircularTransition";
import { After } from "./pages/after";
import { Birth } from "./pages/birth";
import { Debug } from "./pages/debug";
import { Dev } from "./pages/dev";
import Game from "./pages/game";
import { Graduation } from "./pages/graduation";
import { Launch } from "./pages/launch";
import { $Debug } from "./store/debug";
import { $UI } from "./store/ui";

function App() {
    const route = $UI.use((state) => state.route);
    const debug = $Debug.use((state) => state.isDebug);

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
        // GameModule.gamestart();
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
            <div className="fixed top-0 left-0 flex items-center z-[99998]">
                Debug:{" "}
                <input
                    className="ml-2"
                    type="checkbox"
                    checked={debug}
                    onChange={(e) => {
                        $Debug.update("trigger debug", (draft) => {
                            draft.isDebug = e.target.checked;
                        });
                    }}
                />
            </div>
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
