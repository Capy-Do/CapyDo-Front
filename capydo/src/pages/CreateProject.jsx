import React, { useState } from 'react';
import styles from "../styles/CreateProject.module.css";
import { RiRadioButtonFill } from 'react-icons/ri';

const CreateProject = () => {
    const [privacy, setPrivacy] = useState('publico');
    const [projectName, setProjectName] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!projectName.trim()) {
        alert("Por favor, ingresá un nombre para el proyecto.");
        return;
        }

        setLoading(true);
        setSuccess(false);

        setTimeout(() => {
        const nuevoProyecto = {
            nombre: projectName,
            privacidad: privacy,
        };

        console.log("Proyecto creado:", nuevoProyecto);

        setLoading(false);
        setSuccess(true);
        setProjectName('');
        setPrivacy('publico');

        // Opcional: ocultar el mensaje después de unos segundos
        setTimeout(() => setSuccess(false), 3000);
        }, 2000);
    };

    return (
        <div className={styles.container}>
        <h1 className={styles.title}>Crear Proyecto</h1>
        <p className={styles.description}>
            Los proyectos te permiten agrupar tareas relacionadas con un objetivo específico.
        </p>
        <p className={styles.description}>
            Aquí podrás crear secciones, asignar responsables y establecer fechas límite para cada tarea.
        </p>

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
            className={`${styles.radio} ${privacy === 'publico' ? styles.active : ''}`}
            onClick={() => setPrivacy('publico')}
            >
            <RiRadioButtonFill />
            Público
            </div>
            <div
            className={`${styles.radio} ${privacy === 'privado' ? styles.active : ''}`}
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

        <button className={styles.button} onClick={handleSubmit} disabled={loading}>
            {loading ? 'Creando...' : 'Crear Proyecto'}
        </button>

        {loading && (<div className={styles.spinnerEmoji}>🦄 Creando proyecto...</div>)}
        {success && <p className={styles.success}>¡Proyecto creado con éxito! 🎉</p>}
        </div>
    );
};

export default CreateProject;