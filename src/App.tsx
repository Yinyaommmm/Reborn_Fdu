import "./App.css";
import { GameModule } from "./game/game";
import Game from "./pages/game";
import { $UI } from "./store/ui";

function App() {
    const route = $UI.use((state) => state.route);
    GameModule.gamestart();
    return <>{route === "game" && <Game />}</>;
}

export default App;
