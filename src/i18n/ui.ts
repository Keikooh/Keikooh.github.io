export const languages = {
    en: 'English',
    es: 'Español',
};

export let defaultLang:'es'|'en' = 'es';

/** @type {{ [lang: string]: { [key: string]: string } }} */
export const ui = {
    en: {
        'title': 'Fer Gonzalez | Welcome to my portfolio',
        'btn.code': 'Code',
        'btn.preview': 'Preview',
        'nav.title': 'My Port<span class="text-lavanda">folio</span>',
        'nav.home': 'Home',
        'nav.tech': 'Tech',
        'nav.education': 'Education',
        'nav.experience': 'Experience',
        'nav.projects': 'Projects',
        'home.title': '<span>Hi! Im Fernanda</span><span >Software developer</span>',
        'home.description': 'Software Developer passionate about building creative, functional and efficient solutions. Always seeking to learn. 🚀',
        'section.tech': 'Tech stack',
        'section.education': 'Education',
        'section.experience': 'Experience',
        'section.projects': 'Projects',
        'education.type1': "Bachelor's degree in",
        'education.area1': 'Computer Systems Engineering',
        'education.time1': 'August 2020 - December 2024',
        'education.description1': 'Object oriented, structured and functional programming, design pattern, code optimization.',
        'education.type2': "Online Courses:",
        'education.description2': 'JavaScript, React, Node, TypeScript and Angular',
        'experience.position2': 'Software Engineering Intern',
        'experience.time1': 'May 2024 - August 2024',
        'experience.time2': 'August 2024 - April 2025',
        'experience.location1': 'Leon Gto. Mexico',
        'experience.location2': 'Leon, Gto. Mexico',
        'experience.description1': [
            'I developed a mobile tracking app, including interface design, service implementation, Google Maps API integration, database creation, deployment and testing.',
        ],
        'experience.description2': [
                                    'Collaborated on the front-end development of a claim tracking application, creating a tracking section, customized dynamic charts, and performing general maintenance.',
                                    'Implemented and maintained REST services based on functional requirements, creating endpoints, designing entities, integrating them with existing gateways, and ensuring proper functionality.',
                                    'Developed a new workflow to optimize the receipt settlement process for insurance policies in a treasury application, reducing processing time by 70%.'
                                ],
        'projects.description1': 'E-commerce developed using React for efficient component state management, resulting in a dynamic and intuitive user interface.',                       
        'projects.description2': 'Chatbot developed using Python and the OpenAI API to generate real-time responses. Responsive design',
        'projects.description3': 'Kanban-style task management tool developed using jQuery.',
        'projects.description4': 'Web application that replicates the Spotify experience using modern technologies, including the official Spotify API. It allows users to search for and play songs, albums, playlists, and more'
    },  
    es: {
        'title': 'Fer Gonzalez | Bienvenido a mi portafolio',
        'btn.code': 'Código',
        'btn.preview': 'Vista previa',
        'nav.title': 'Mi Porta<span class="text-lavanda">folio</span>',
        'nav.home':'Inicio',
        'nav.tech':'Tecnología',
        'nav.education':'Educación',
        'nav.experience':'Experiencia',
        'nav.projects':'Proyectos',
        'home.title': '<span>¡Hola! Soy Fernanda</span><span >Desarrolladora de Software</span>',
        'home.description': 'Desarrolladora de Software apasionada por crear soluciones creativas, funcionales y eficientes. Siempre en constante búsqueda de aprendizaje. 🚀',
        'section.tech': 'Stack tecnológico',
        'section.education': 'Educación',
        'section.experience': 'Experiencia',
        'section.projects': 'Proyectos',
        'education.type1': "Licenciatura en",
        'education.area1': 'Ingeniería en Sistemas Computacionales',
        'education.time1': 'Agosto 2020 - Diciembre 2024',
        'education.description1': 'Programación orientada a objetos, estructurada y funcional, patrones de diseño, optimización de código.',
        'education.type2': "Cursos online:",
        'education.description2': 'JavaScript, React, Node, TypeScript y Angular',
        'experience.position1': 'Residencias profesionales',
        'experience.position2': 'Desarrollador Junior',
        'experience.time1': 'Mayo 2024 - Agosto 2024',
        'experience.time2': 'Agosto 2024 - Abril 2025',
        'experience.location1': 'León Gto. México',
        'experience.location2': 'León Gto. México',
        'experience.description1': [
                                    'Desarrollé una aplicación móvil para seguimiento incluyendo el diseño de la interfaz, implementación de servicios, integración con la API de Google Maps, creación de la base de datos, despliegue y pruebas.',
                                ],
        'experience.description2': [
                                    'Colaboré en el desarrollo front-end de una aplicación para el seguimiento de siniestros, creando una sección de tracking, gráficas dinámicas personalizadas y haciendo mantenimiento general.',
                                    'Implementé y dí mantenimiento a servicios REST según requerimientos funcionales, creando endpoints, diseñando entidades, integrándolos a gateways existentes y asegurando su correcto funcionamiento.',
                                    'Desarrollé un nuevo flujo para optimizar el proceso de liquidación de recibos para pólizas en una aplicación de tesorería, logrando reducir el tiempo de procesamiento en un 70%.',
                                ],
        'projects.description1': 'E-commerce desarrollada con React para la gestión eficiente del estado de los componentes, logrando una interfaz dinámica e intuitiva para el usuario.',
        'projects.description2': 'Chatbot desarrollado con Python y la API de OpenAI para generar respuestas en tiempo real. Diseño responsivo.',
        'projects.description3': 'Herramienta tipo tablero Kanban para la gestión de tareas, desarrollada con jQuery.',
        'projects.description4': 'Aplicación web que replica la experiencia de Spotify utilizando diferentes tecnologías, además de usar la API oficial de Spotify. Permite buscar y reproducir canciones, álbumes, playlists y más.'                        
    }
}