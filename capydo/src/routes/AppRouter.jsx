import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateProject from '../pages/CreateProject';

const AppRouter = () => (
    <BrowserRouter>
        <Routes>
        {/* Otras rutas */}
        <Route path="/create-project" element={<CreateProject />} />
        </Routes>
    </BrowserRouter>
);

export default AppRouter;