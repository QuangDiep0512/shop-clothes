import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ProductProvider } from "./context/ProductContext";
import { SidebarProvider } from "./context/SidebarContext";
import { CartProvider } from "./context/CartContext";
import { LoginProvider } from "./context/LoginContext";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <LoginProvider>
      <SidebarProvider>
        <CartProvider>
          <ProductProvider>
            <React.StrictMode>
              <App />
            </React.StrictMode>
          </ProductProvider>
        </CartProvider>
      </SidebarProvider>
    </LoginProvider>
  </BrowserRouter>
);
reportWebVitals();
