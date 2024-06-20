import Player from "pages/Player";
import Inicio from "pages/Inicio";
import Favoritos from "pages/Favoritos/index.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "pages/NotFound";
import PaginaBase from "pages/PaginaBase";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaBase />}>
                    <Route index element={<Inicio />}></Route>
                    <Route path="favoritos" element={<Favoritos />} />
                    <Route path=":id" element={<Player />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;