import { Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation/Navigation.component";
import Home from "./components/routes/home/Home";
import Shop from "./components/routes/shop/Shop";
import Details from "./components/routes/details/Details";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/furniture/:furnitureId" element={<Details />} />
      </Route>
    </Routes>
  );
}

export default App;
