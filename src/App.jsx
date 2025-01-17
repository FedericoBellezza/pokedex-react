// react import
import { BrowserRouter, Route, Routes } from "react-router";

// pages import
import Home from "./pages/Home";
import Pokedex from "./pages/Pokedex";

// layouts import
import DefaultLayout from "./layouts/DefaultLayout";

// bootstrap import
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Home />} />
          <Route path="pokedex" element={<Pokedex />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
