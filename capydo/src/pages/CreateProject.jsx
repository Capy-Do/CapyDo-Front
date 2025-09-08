import React, { useState } from 'react';
import styles from "../styles/CreateProject.module.css";
import { RiRadioButtonFill } from 'react-icons/ri';

const CreateProject = ({ onClose }) => {
    const [privacy, setPrivacy] = useState('publico');
    const [projectName, setProjectName] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!projectName.trim()) {
        alert("Por favor, ingresá un nombre para el proyecto.");
        return;
        }

        setLoading(true);

        setTimeout(() => {
        const nuevoProyecto = {
            nombre: projectName,
            privacidad: privacy,
        };

        console.log("Proyecto creado:", nuevoProyecto);

        setLoading(false);
        setProjectName('');
        setPrivacy('publico');

        // Cierra el modal al crear el proyecto
        if (onClose) onClose();
        }, 2000);
    };

    return (
        <div>
        <h1 className={styles.title}>Crear Proyecto</h1>
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Nombre del proyecto"
            className={styles.input}
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            />
            <h3>Privacidad</h3>
            <div className={styles.privacy}>
            <div
                className={`${styles.radio} ${
                privacy === 'publico' ? styles.active : ''
                }`}
                onClick={() => setPrivacy('publico')}
            >
                <RiRadioButtonFill />
                Público
            </div>
            <div
                className={`${styles.radio} ${
                privacy === 'privado' ? styles.active : ''
                }`}
                onClick={() => setPrivacy('privado')}
            >
                <RiRadioButtonFill />
                Privado
            </div>
            </div>
            <p className={styles.description}>
            {privacy === 'publico'
                ? 'Todos los miembros del espacio pueden ver el proyecto.'
                : 'Solo tú y los miembros asignados podrán ver el proyecto.'}
            </p>
            <button type="submit" className={styles.button} disabled={loading}>
            {loading ? 'Creando...' : 'Crear Proyecto'}
            </button>

            {loading && (
            <div className={styles.spinnerEmoji}>🦄 Creando proyecto...</div>
            )}
        </form>
        </div>
    );
};

export default CreateProject;