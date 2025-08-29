import React, { useState } from "react";
import "../styles/NotificationsPanel.css";

const NotificationsPanel = ({ isVisible, onClose }) => {
    const [activeTab, setActiveTab] = useState('todas');
    const [showOptionsMenu, setShowOptionsMenu] = useState(false);
    const [notificationSearch, setNotificationSearch] = useState("");
    const [showOnlyUnread, setShowOnlyUnread] = useState(false);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const toggleOptionsMenu = () => {
        setShowOptionsMenu(!showOptionsMenu);
    };

    if (!isVisible) return null;

    return (
        <div className="notifications-dropdown">
            {/* Header */}
            <div className="notifications-header">
                <h3 className="notifications-title">Notificaciones</h3>
                <div className="options-menu-container">
                    <button className="options-btn" onClick={toggleOptionsMenu}>⋮</button>
                    
                    {/* Options Menu */}
                    {showOptionsMenu && (
                        <div className="options-menu">
                            <button className="option-item">📖 Marcar todo como leído</button>
                            <button className="option-item">🗑️ Eliminar todo</button>
                            <button className="option-item">⚙️ Configuración de notificaciones</button>
                        </div>
                    )}
                </div>
            </div>

            {/* Tab Navigation */}
            <div className="notifications-tabs">
                <button 
                    className={`tab ${activeTab === 'todas' ? 'active' : ''}`}
                    onClick={() => handleTabClick('todas')}
                >
                    Todas
                </button>
                <button 
                    className={`tab ${activeTab === 'menciones' ? 'active' : ''}`}
                    onClick={() => handleTabClick('menciones')}
                >
                    Menciones
                </button>
                <button 
                    className={`tab ${activeTab === 'asignaciones' ? 'active' : ''}`}
                    onClick={() => handleTabClick('asignaciones')}
                >
                    Asignaciones
                </button>
            </div>

            {/* Search and Filter Bar */}
            <div className="notifications-search-bar">
                <div className="notification-search-container">
                    <div className="search-icon">🔍</div>
                    <input
                        type="text"
                        placeholder="Buscar todas las notificaciones"
                        value={notificationSearch}
                        onChange={(e) => setNotificationSearch(e.target.value)}
                        className="notification-search-input"
                    />
                </div>
                <div className="unread-toggle-container">
                    <span className="toggle-label">Solo no leídas</span>
                    <label className="toggle-switch">
                        <input
                            type="checkbox"
                            checked={showOnlyUnread}
                            onChange={(e) => setShowOnlyUnread(e.target.checked)}
                        />
                        <span className="toggle-slider"></span>
                    </label>
                </div>
            </div>

            {/* Content Area */}
            <div className="notifications-content">
                {activeTab === 'todas' && (
                    <div className="notifications-list">
                        <div className="empty-state">
                            <p>No hay notificaciones</p>
                        </div>
                    </div>
                )}

                {activeTab === 'menciones' && (
                    <div className="notifications-list">
                        <div className="empty-state">
                            <p>No hay menciones</p>
                        </div>
                    </div>
                )}

                {activeTab === 'asignaciones' && (
                    <div className="notifications-list">
                        <div className="empty-state">
                            <p>No hay asignaciones</p>
                        </div>
                    </div>
                )}
            </div>

            {/* Footer */}
            <div className="notifications-footer">
                <button className="view-all-btn">Ver todas las notificaciones</button>
            </div>
        </div>
    );
};

export default NotificationsPanel;