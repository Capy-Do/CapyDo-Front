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
                            <button className="option-item">
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.78133 0.658752C2.71187 0.658752 0.2146 3.15602 0.2146 6.22549C0.2146 9.29495 2.71187 11.7922 5.78133 11.7922C8.8508 11.7922 11.3481 9.29495 11.3481 6.22549C11.3481 3.15602 8.8508 0.658752 5.78133 0.658752ZM8.67845 4.35983L5.08148 8.64193C5.04202 8.68893 4.99293 8.7269 4.93752 8.75326C4.88211 8.77963 4.82168 8.79378 4.76032 8.79475H4.75309C4.69308 8.79473 4.63373 8.78209 4.57891 8.75765C4.52409 8.73322 4.47502 8.69753 4.43488 8.65291L2.89332 6.94006C2.85417 6.89854 2.82372 6.84961 2.80375 6.79615C2.78378 6.74268 2.7747 6.68577 2.77704 6.62875C2.77938 6.57173 2.79309 6.51575 2.81738 6.4641C2.84166 6.41246 2.87602 6.36619 2.91845 6.32801C2.96087 6.28983 3.01049 6.26052 3.0644 6.2418C3.11831 6.22308 3.17542 6.21532 3.23238 6.21898C3.28933 6.22265 3.34497 6.23766 3.39604 6.26313C3.44711 6.28861 3.49257 6.32404 3.52975 6.36733L4.74185 7.71405L8.02275 3.80904C8.09634 3.72396 8.20046 3.67125 8.31261 3.66231C8.42475 3.65338 8.5359 3.68893 8.62204 3.76129C8.70818 3.83365 8.76239 3.93699 8.77294 4.049C8.7835 4.161 8.74955 4.27265 8.67845 4.35983Z" fill="#505258"/>
                                </svg>
                                Marcar todo como leído
                            </button>
                            <button className="option-item">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.0914 2.75691H8.67426V2.15262C8.67426 1.88551 8.56815 1.62934 8.37928 1.44047C8.1904 1.25159 7.93423 1.14548 7.66712 1.14548H5.65284C5.38573 1.14548 5.12956 1.25159 4.94069 1.44047C4.75181 1.62934 4.6457 1.88551 4.6457 2.15262V2.75691H2.22857C2.12173 2.75691 2.01926 2.79935 1.94371 2.8749C1.86816 2.95045 1.82571 3.05292 1.82571 3.15976C1.82571 3.26661 1.86816 3.36908 1.94371 3.44463C2.01926 3.52018 2.12173 3.56262 2.22857 3.56262H2.6566L3.135 11.24C3.17075 11.9161 3.68892 12.4254 4.34356 12.4254H8.9764C9.63432 12.4254 10.1422 11.9274 10.185 11.2421L10.6634 3.56262H11.0914C11.1982 3.56262 11.3007 3.52018 11.3763 3.44463C11.4518 3.36908 11.4943 3.26661 11.4943 3.15976C11.4943 3.05292 11.4518 2.95045 11.3763 2.8749C11.3007 2.79935 11.1982 2.75691 11.0914 2.75691ZM5.06291 10.814H5.04856C4.94416 10.8141 4.84381 10.7736 4.76865 10.7012C4.6935 10.6287 4.64942 10.5299 4.6457 10.4255L4.44428 4.78554C4.44047 4.6787 4.47926 4.57472 4.55212 4.49647C4.62498 4.41823 4.72594 4.37214 4.83278 4.36833C4.93962 4.36453 5.0436 4.40332 5.12185 4.47618C5.20009 4.54904 5.24618 4.64999 5.24999 4.75684L5.45142 10.3968C5.45333 10.4497 5.4448 10.5025 5.42631 10.5521C5.40782 10.6017 5.37973 10.6472 5.34365 10.686C5.30757 10.7247 5.2642 10.756 5.21603 10.7779C5.16786 10.7999 5.11583 10.8122 5.06291 10.814ZM7.06284 10.4112C7.06284 10.518 7.0204 10.6205 6.94485 10.696C6.8693 10.7716 6.76683 10.814 6.65998 10.814C6.55314 10.814 6.45067 10.7716 6.37512 10.696C6.29957 10.6205 6.25713 10.518 6.25713 10.4112V4.77119C6.25713 4.66434 6.29957 4.56188 6.37512 4.48633C6.45067 4.41078 6.55314 4.36833 6.65998 4.36833C6.76683 4.36833 6.8693 4.41078 6.94485 4.48633C7.0204 4.56188 7.06284 4.66434 7.06284 4.77119V10.4112ZM7.86855 2.75691H5.45142V2.15262C5.45111 2.12609 5.45612 2.09976 5.46613 2.07518C5.47615 2.05061 5.49097 2.02828 5.50974 2.00952C5.5285 1.99075 5.55083 1.97593 5.5754 1.96591C5.59998 1.9559 5.62631 1.95089 5.65284 1.9512H7.66712C7.69366 1.95089 7.71999 1.9559 7.74456 1.96591C7.76914 1.97593 7.79147 1.99075 7.81023 2.00952C7.829 2.02828 7.84382 2.05061 7.85384 2.07518C7.86385 2.09976 7.86885 2.12609 7.86855 2.15262V2.75691ZM8.67426 10.4255C8.67054 10.5299 8.62646 10.6287 8.55131 10.7012C8.47616 10.7736 8.37581 10.8141 8.27141 10.814H8.2568C8.20391 10.8121 8.15191 10.7999 8.10376 10.7779C8.05562 10.7559 8.01229 10.7246 7.97623 10.6859C7.94017 10.6471 7.91211 10.6017 7.89363 10.5521C7.87515 10.5025 7.86663 10.4497 7.86855 10.3968L8.06998 4.75684C8.07186 4.70393 8.08415 4.65192 8.10614 4.60376C8.12812 4.55561 8.15938 4.51225 8.19812 4.47618C8.23686 4.4401 8.28233 4.41201 8.33193 4.39351C8.38153 4.375 8.43428 4.36645 8.48719 4.36833C8.54009 4.37022 8.5921 4.3825 8.64026 4.40449C8.68842 4.42648 8.73177 4.45773 8.76785 4.49647C8.80392 4.53522 8.83201 4.58068 8.85052 4.63028C8.86902 4.67988 8.87757 4.73264 8.87569 4.78554L8.67426 10.4255Z" fill="#505258"/>
                                </svg>
                                Eliminar todo
                            </button>
                            <div className="option-svg-separator">
                                <svg width="180" height="2" viewBox="0 0 180 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="10" y1="1" x2="170" y2="1" stroke="#505258" strokeOpacity="0.55" strokeWidth="0.76"/>
                                </svg>
                            </div>
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