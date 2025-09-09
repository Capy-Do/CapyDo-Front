# 📌 CapyDo

**CapyDo** es una aplicación de organización y gestión de proyectos, tanto individuales como grupales. Está diseñada para ser **simple, intuitiva y accesible**, ideal para estudiantes y grupos que quieren organizarse sin la complejidad de herramientas empresariales como Jira.

---

## 👀 Visión General
CapyDo fomenta el trabajo en equipo desde edades tempranas, facilita la organización en entornos académicos o informales y elimina barreras técnicas.  
El objetivo es ofrecer una plataforma visualmente atractiva, fácil de usar y con funcionalidades tanto básicas como avanzadas.

---

## CapyDo Frontend  

Frontend oficial de CapyDo, una plataforma para gestión de tareas colaborativas.  

---

## 🎯 Objetivos
- Fomentar el trabajo en equipo.
- Facilitar la organización y colaboración.
- Ofrecer una herramienta sin complejidad técnica.
- Estimular el trabajo guiado y ordenado.

---

## 🧑‍🤝‍🧑 Público Objetivo
- Estudiantes de secundaria y universitarios.
- Grupos informales.
- Docentes e instituciones educativas.

---

## 🚀 Funcionalidades Principales

### 🆓 Básico (Gratis)
- **Cuentas personales**: Registro, inicio de sesión, recuperación de contraseña.
- **Espacios de trabajo y proyectos**: Creación, personalización, roles, plantillas.
- **Tableros Kanban / Listas**: Columnas personalizables, tarjetas/tareas arrastrables.
- **Tareas**: Checklist, fechas de vencimiento, prioridades, asignaciones, etiquetas.
- **Calendario**: Vista de tareas y plazos.
- **Comentarios y menciones** en tareas.
- **Invitaciones a miembros** por email.
- **Notificaciones básicas** por asignaciones, menciones y vencimientos.
- **Historial mínimo** de cambios.
- **Funciones IA**: Resúmenes, informes, sugerencias de mejora.
- **Modo oscuro** y temas básicos.

### 💎 Premium
- Personalización avanzada (temas, fuentes, iconos, portadas, widgets).
- Vista tipo Timeline/Gantt.
- Automatizaciones avanzadas.
- IA asistente y análisis predictivo.
- Estadísticas y reportes visuales.
- Exportación a PDF/Excel.
- Integraciones con otras apps.
- Subida de archivos y almacenamiento extra.
- Roles personalizados y aprobación de tareas.
- Historial completo.

### 🎓 Sistema Educativo
- Acceso al plan premium.
- Roles especiales para tutores.
- Panel de progreso por alumno/grupo.
- Calendario general del curso.
- Recursos compartidos.

---

## 🧩 Componentes reutilizables (No HTML independiente)
Estos se integran dentro de otras páginas:

- **NavBar** (WAN) – Barra de navegación (se carga en todas las páginas).
- **Notificaciones** (WAN) – Panel o dropdown que se muestra dentro de otras vistas, no como página aparte.

---

## 🗂 Estructura General del Proyecto

| Tipo             | Tema / Funcionalidad                       | Responsable |
|------------------|---------------------------------------------|-------------|
| **HTML completos** | Home                                        | ANA         |
|                  | Calendario                                  | NICO        |
|                  | Inicio de Sesión                            | EZE         |
|                  | Recuperar Contraseña                        | EZE         |
|                  | Registro                                    | MARIAN      |
|                  | Crear Espacio                               | MELI        |
|                  | Espacio Creado                              | MELI        |
|                  | Crear Proyecto                              | MER         |
|                  | Perfil (Vista / Personalización)            | ANA         |
|                  | IA Chatbot                                  | MER         |
|                  | Ajustes / Configuración                     | MARIAN      |
|                  | Configuración del Proyecto (Administración) | NICO        |
| **Componentes**   | NavBar                                     | WAN         |
|                  | Notificaciones                              | WAN         |

---

## 📅 Guía de Desarrollo
1. **Investigación** de apps similares (Jira, Asana, Todoist, Notion...).
2. **Prototipado visual** (Figma u otra herramienta).
3. **MVP** con funciones esenciales.
4. **Pruebas** con usuarios reales.
5. **Mejoras y nuevas funciones** según feedback.
6. **Estrategia de difusión** hacia el público objetivo.

---

## 🛠 Tecnologías Sugeridas
- **Frontend**: React, TailwindCSS.
- **Backend**: Node.js, Express.
- **Base de Datos**: PostgreSQL o MongoDB.
- **IA**: API externa o integración con modelo LLM.
- **Integraciones**: Google Calendar, Trello, Notion.
- **Control de versiones**: GitHub.

---

> 🐹 *CapyDo: Organiza tu mundo, un proyecto a la vez.*
