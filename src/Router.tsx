import { Routes, Route } from "react-router-dom";
import { DefautLayout } from "./styles/layouts/DefaultLayout";
import { Home } from "./pages/Home/Index";
import { Checkout } from "./pages/Checkout/Index";
import { OrderConfirmation } from "./pages/OrderConfirmation/OrderConfirmation";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefautLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
      </Route>
    </Routes>
  );
};
