import NavBar  from  "./components/navBar/NavBar";
import { BrowserRouter, Routes, Route, Router ,Navigate} from "react-router-dom";
import { Home } from "./pages/Home";
import {YourProducts} from "./pages/YourProducts"
import {AddProduct} from "./pages/AddProduct"
import {Messages} from "./pages/Messages"
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={<Home />} />
            <Route path="yourproducts" element={<YourProducts />}/>
            <Route path="addproduct" element={<AddProduct />}/>
            <Route path="messages" element={<Messages />}/>
            <Route path="*" element={<Navigate replace to = "/"/>}/>  {/* //si pones una ruta que no existe devuelve esto */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div> 
  );
}

export default App;
