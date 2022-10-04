import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/common/Menu";
import Administrador from "./components/views/Administrador";
import Error404 from "./components/views/Error404";
import Inicio from "./components/views/Inicio";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/common/Footer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Inicio></Inicio>}></Route>
        <Route exact path="/administrador" element={<Administrador></Administrador>}></Route>
        <Route exact path="/menu" element={<Menu></Menu>}></Route>
        <Route exact path="/footer" element={<Footer></Footer>}></Route>
        <Route path="*" element={<Error404></Error404>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
