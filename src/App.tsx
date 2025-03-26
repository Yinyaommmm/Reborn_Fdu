import "./App.css";
import Game from "./pages/game";
import { $UI } from "./store/ui";

function App() {
    const route = $UI.use((state) => state.route);
    return <>{route === "game" && <Game />}</>;
}

export default App;
