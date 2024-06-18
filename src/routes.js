import FavoritosProvider from "Contex/Favoritos";
import Cabecera from "./components/Cabecera/Cabecera";
import Container from "./components/Container";
import Pie from "./components/Pie";


const { default: Inicio } = require("pages/Inicio");
const { default: Favoritos } = require('pages/Favoritos/index.js');
const { BrowserRouter, Routes, Route } = require("react-router-dom");


function AppRoutes() {
    return (
        <BrowserRouter>
            <Cabecera />
            <Container>
                <FavoritosProvider>
                    <Routes>
                        <Route path="/" element={<Inicio />}></Route>
                        <Route path="/favoritos" element={<Favoritos />}></Route>
                    </Routes>
                </FavoritosProvider>
            </Container>
            <Pie />
        </BrowserRouter>
    )
}

export default AppRoutes;