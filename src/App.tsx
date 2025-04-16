import "./App.css";
import { ReadExcelFromPublic } from "./load/read";
import Game from "./pages/game";
import { $UI } from "./store/ui";

function App() {
    const route = $UI.use((state) => state.route);
    ReadExcelFromPublic();
    return <>{route === "game" && <Game />}</>;
}

export default App;
