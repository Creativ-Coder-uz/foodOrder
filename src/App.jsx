import "./App.css";
import Layout from "./components/Layout/Layout";
import AllFoods from "./components/UI/AllFoods/AllFoods";
import Context from "./context/Context";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Register from "./components/Pages/Register/Register";
import NotFound from "./components/Pages/NotFound/NotFound";
import Login from "./components/Pages/Login/Login";

function App() {
  const [orders, setOrders] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [ordersCount, setOrdersCount] = useState(1);
  const [successModal, setSuccessModal] = useState(false);
  const [user, setUser] = useState({});
  return (
    <Context.Provider
      value={{
        orders,
        setOrders,
        openModal,
        setOpenModal,
        ordersCount,
        setOrdersCount,
        successModal,
        setSuccessModal,
        user,
        setUser,
      }}
    >
      <>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Layout>
                  <AllFoods />
                </Layout>
              }
            />
            <Route path="/register" element={<Register />} />
            <Route
              path="/home"
              element={
                <Layout>
                  <AllFoods />
                </Layout>
              }
            />
            <Route path="*" element={<NotFound />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </>
    </Context.Provider>
  );
}

export default App;
