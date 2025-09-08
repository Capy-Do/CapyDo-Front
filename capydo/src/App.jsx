import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Modal from "./components/Modal";
import CreateProject from "./pages/CreateProject";
import NotFound from "./pages/NotFound.jsx";
import IaChatbot from "./components/IaChatbot.jsx";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const toggleChatbot = () => setIsChatbotOpen(prev => !prev);

  return (
    <BrowserRouter>
      <div>
        <button onClick={openModal}>Crear Proyecto</button>
        <button onClick={toggleChatbot}>IA Chat</button>

        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <CreateProject onClose={closeModal} />
        </Modal>

        {isChatbotOpen && <IaChatbot onClose={toggleChatbot} />}

        <Routes>
          {/* Aquí van las rutas */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;