import "./App.css";
import { GameModule } from "./game/game";
import { Birth } from "./pages/birth";
import Game from "./pages/game";
import { $UI } from "./store/ui";

function App() {
    const route = $UI.use((state) => state.route);
    GameModule.gamestart();
    return (
        <>
            {route === "game" && <Game />}
            {route === "birth" && <Birth />}
        </>
    );
}

export default App;
