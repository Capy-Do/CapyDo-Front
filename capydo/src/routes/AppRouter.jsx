import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateProject from '../pages/CreateProject';
import Login from "../pages/Login"

const AppRouter = () => (
    <BrowserRouter>
        <Routes>
        {/* Otras rutas */}
        <Route path="/create-project" element={<CreateProject />} />
        <Route path="/login" element={<Login />} />
        </Routes>
    </BrowserRouter>
);

export default AppRouter;