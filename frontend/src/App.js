import { Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation/Navigation.component";
import Home from "./components/routes/home/Home";
import Shop from "./components/routes/shop/Shop";
import Details from "./components/routes/details/Details";
import Cart from "./components/routes/cart/Cart";
import Login from "./components/routes/auth/login/Login";
import Register from "./components/routes/auth/register/Register";
import Profile from "./components/routes/auth/profile/Profile";
import Shipping from "./components/routes/shipping/Shipping";
import Payment from "./components/routes/payment/Payment";
import PlaceOrder from "./components/routes/placeOrder/PlaceOrder";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/placeorder" element={<PlaceOrder />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/furniture/:furnitureId" element={<Details />} />
        <Route path="/cart/" element={<Cart />} />
        <Route path="/cart/:furnitureId" element={<Cart />} />
      </Route>
    </Routes>
  );
}

export default App;
