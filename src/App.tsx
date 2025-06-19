import { AnimatePresence } from "motion/react";
import { useEffect } from "react";

import { useAudio } from "./hooks/useAudio";
import { useAudioPreloader } from "./hooks/useAudioPreloader";
import { useCircularTransition } from "./hooks/useCircularTransition";
import { useFontLoader } from "./hooks/useFontLoader";
import { After } from "./pages/after";
import { Birth } from "./pages/birth";
import { Dev } from "./pages/dev";
import { Earphone } from "./pages/earphone";
import { End } from "./pages/end";
import Game from "./pages/game";
import { Graduation } from "./pages/graduation";
import { Introduction } from "./pages/introduction";
import { Launch } from "./pages/launch";
import { $UI } from "./store/ui";
import { audios } from "./types/audios";

import "./App.css";

function App() {
    const route = $UI.use((state) => state.route);
    const earphoneDisplay = $UI.use((state) => state.earphoneDisplay);
    // const debug = $Debug.use((state) => state.isDebug);
    const { startLoading: audioStartLoading } = useAudioPreloader(audios);
    useFontLoader("FHLFont", "font/FHL.ttf");
    const { trigger, TransitionComponent } = useCircularTransition(
        undefined,
        0.6,
        0.5,
    );
    const {
        trigger: cardsTrigger,
        TransitionComponent: TransitionComponentCards,
    } = useCircularTransition(undefined, 0.6, 2, "cards");
    const { play: playBackgroundMusic } = useAudio(
        "audio/今生永相伴.mp3",
        0.4,
        true,
    );

    useEffect(() => {
        audioStartLoading();
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
            {/* <div className="fixed top-0 left-0 flex items-center z-[99998]">
                Debug v0.1:{" "}
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
            </div> */}
            <AnimatePresence>{earphoneDisplay && <Earphone />}</AnimatePresence>
            {TransitionComponent}
            {TransitionComponentCards}
            {/* <Debug /> */}
            {route === "game" && <Game key="Game" trigger={trigger} />}
            {route === "birth" && (
                <Birth
                    key="Birth"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    trigger={cardsTrigger}
                />
            )}
            {route === "graduation" && (
                <Graduation key="Graduation" trigger={trigger} />
            )}
            {route === "after" && <After key="After" trigger={trigger} />}
            {route === "end" && <End />}
            {route === "launch" && (
                <Launch
                    key="Launch"
                    trigger={trigger}
                    exit={{ opacity: 0, display: "none" }}
                    playBackgroundMusic={playBackgroundMusic}
                />
            )}
            {route === "introduction" && (
                <Introduction
                    key="Introduction"
                    trigger={trigger}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, display: "none" }}
                />
            )}
            {route === "dev" && <Dev />}
        </>
    );
}

export default App;
