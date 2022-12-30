import { Routes, Route } from "react-router-dom";
import StartPage from "./components/StartPage";
import DisplayPage from "./components/DisplayPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/display" element={<DisplayPage />} />
      </Routes>
    </div>
  );
}

export default App;
