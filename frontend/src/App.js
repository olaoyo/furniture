import { Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation/Navigation.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}></Route>
    </Routes>
  );
}

export default App;
