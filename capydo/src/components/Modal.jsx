import React, { useEffect, useRef, useState } from "react";
import "../styles/Modal.css";

const Modal = ({ isOpen, onClose, children }) => {
    const containerRef = useRef(null);
    const contentRef = useRef(null);
    const [scale, setScale] = useState(1);

    useEffect(() => {
        if (!isOpen) return;

        const resize = () => {
        if (!containerRef.current || !contentRef.current) return;
        const { clientWidth: cw, clientHeight: ch } = containerRef.current;
        const { scrollWidth: sw, scrollHeight: sh } = contentRef.current;
        const newScale = Math.min(cw / sw, ch / sh, 1); // no crecer más de 1
        setScale(newScale);
        };

        resize();
        window.addEventListener("resize", resize);
        return () => window.removeEventListener("resize", resize);
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
        <div
            className="modal-container"
            onClick={(e) => e.stopPropagation()} // Evitar cierre al hacer clic dentro del modal
            ref={containerRef}
        >
            <button className="modal-close" onClick={onClose}>
            &times;
            </button>
            <div
            ref={contentRef}
            className="modal-content scaled"
            style={{ transform: `scale(${scale})`, transformOrigin: "center" }}
            >
            {children}
            </div>
        </div>
        </div>
    );
};

export default Modal;