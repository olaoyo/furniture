import { Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation/Navigation.component";
import Home from "./components/routes/home/Home";
import Shop from "./components/routes/shop/Shop";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Route>
    </Routes>
  );
}

export default App;
