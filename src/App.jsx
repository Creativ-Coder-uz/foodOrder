import "./App.css";
import Layout from "./components/Layout/Layout";
import AllFoods from "./components/UI/AllFoods/AllFoods";
import Context from "./context/Context";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/Pages/NotFound/NotFound";
import Login from "./components/Pages/Login/Login";
function App() {
  const [orders, setOrders] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [ordersCount, setOrdersCount] = useState(1);
  const [successModal, setSuccessModal] = useState(false);
  const [isVerify, setVerify] = useState(false);
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
        isVerify,
        setVerify,
      }}
    >
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route
              path="/home"
              element={
                <Layout>
                  <AllFoods />
                </Layout>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </>
    </Context.Provider>
  );
}

export default App;
