import React, { useState } from "react";
import styles from "../styles/CreateSpace.module.css"; 

const CreateSpace = ({ onClose }) => {
  const [spaceName, setSpaceName] = useState("");
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!spaceName.trim()) return alert("Ingresá un nombre para el espacio");
    console.log("Nuevo espacio creado:", { spaceName, image });
    setSpaceName("");
    setImage(null);
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.card}>
        {/* Header */}
        <div className={styles.header}>
          <h2>Crear un nuevo espacio</h2>
          <button className={styles.closeBtn} onClick={onClose}>×</button>
        </div>

        {/* Imagen */}
        <div className={styles.imageContainer}>
          {image ? (
            <img src={image} alt="Preview" className={styles.imagePreview} />
          ) : (
            <label className={styles.imageCircle}>
              +
              <input type="file" accept="image/*" onChange={handleImageChange} />
            </label>
          )}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            placeholder="Nombre del espacio"
            value={spaceName}
            onChange={(e) => setSpaceName(e.target.value)}
            className={styles.input}
          />
          <button type="submit" className={styles.submitBtn}>
            Crear espacio
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateSpace;
