import "./App.scss";
import "./scss/responsive.scss";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Home } from "./pages/Home/Home";
import { ProductDetail } from "./pages/ProductDetail/ProductDetail";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Footer } from "./components/Footer/Footer";
import { Modal } from "./components/Modal/Modal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="app">
      {/* <BrowserRouter> */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/:categories" element={<Home />} />
        <Route path="/search/:id" element={<Home />} />
      </Routes>
      <Sidebar />
      <Footer />
      <Modal />
      {/* </BrowserRouter> */}
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        // transition: slide,
      />
    </div>
  );
}

export default App;
