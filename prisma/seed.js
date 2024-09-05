// prisma/seed.js

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const tasksData = [
    {
        "id": 11813,
        "name": "Integradora 1. Caso de Estudio está en fecha de entrega",
        "Fecha": "09\/05\/2024",
        "Materia": "Modelado de bases de datos NoSQL (MongoDB)"
       },
       {
        "id": 11815,
        "name": "Integradora 1. Caso de Estudio debería estar completada",
        "Fecha": "09\/05\/2024",
        "Materia": "Modelado de bases de datos NoSQL (MongoDB)"
       },
       {
        "id": 11375,
        "name": "1.2. Privacidad en los servicios de la nube debería estar completada",
        "Fecha": "09\/07\/2024",
        "Materia": "Conceptualización de servicios en la nube"
       },
       {
        "id": 11325,
        "name": "2.2. Instalación de Laravel está en fecha de entrega",
        "Fecha": "09\/08\/2024",
        "Materia": "Conceptualización de entornos de desarrollo de aplicaciones y servicios"
       },
       {
        "id": 11327,
        "name": "2.2. Instalación de Laravel debería estar completada",
        "Fecha": "09\/08\/2024",
        "Materia": "Conceptualización de entornos de desarrollo de aplicaciones y servicios"
       },
       {
        "id": 11714,
        "name": "Integradora 1. Mi propuesta de diseño de sitio Web está en fecha de entrega",
        "Fecha": "09\/08\/2024",
        "Materia": "Implementación de sistemas de gestión de contenido"
       },
       {
        "id": 11716,
        "name": "Integradora 1. Mi propuesta de diseño de sitio Web debería estar completada",
        "Fecha": "09\/08\/2024",
        "Materia": "Implementación de sistemas de gestión de contenido"
       },
       {
        "id": 11956,
        "name": "Integradora 1. Análisis de juegos está en fecha de entrega",
        "Fecha": "09\/09\/2024",
        "Materia": "Optativa: Diseño de juegos I"
       },
       {
        "id": 11958,
        "name": "Integradora 1. Análisis de juegos debería estar completada",
        "Fecha": "09\/09\/2024",
        "Materia": "Optativa: Diseño de juegos I"
       },
       {
        "id": 11816,
        "name": "2.1. Arquitectura de MongoDB está en fecha de entrega",
        "Fecha": "09\/11\/2024",
        "Materia": "Modelado de bases de datos NoSQL (MongoDB)"
       },
       {
        "id": 11818,
        "name": "2.1. Arquitectura de MongoDB debería estar completada",
        "Fecha": "09\/11\/2024",
        "Materia": "Modelado de bases de datos NoSQL (MongoDB)"
       },
       {
        "id": 12410,
        "name": "2.1. Las etapas de desarrollo del proyecto y el tablero de seguimiento está en fecha de entrega",
        "Fecha": "09\/13\/2024",
        "Materia": "Proyecto V"
       },
       {
        "id": 12412,
        "name": "2.1. Las etapas de desarrollo del proyecto y el tablero de seguimiento debería estar completada",
        "Fecha": "09\/13\/2024",
        "Materia": "Proyecto V"
       },
       {
        "id": 11984,
        "name": "2.1. La experiencia de jugador debería estar completada",
        "Fecha": "09\/14\/2024",
        "Materia": "Optativa: Diseño de juegos I"
       },
       {
        "id": 11328,
        "name": "2.3. Setup de MySQL está en fecha de entrega",
        "Fecha": "09\/15\/2024",
        "Materia": "Conceptualización de entornos de desarrollo de aplicaciones y servicios"
       },
       {
        "id": 11330,
        "name": "2.3. Setup de MySQL debería estar completada",
        "Fecha": "09\/15\/2024",
        "Materia": "Conceptualización de entornos de desarrollo de aplicaciones y servicios"
       },
       {
        "id": 11717,
        "name": "2.1. Configurando la cuenta de WordPress.com está en fecha de entrega",
        "Fecha": "09\/15\/2024",
        "Materia": "Implementación de sistemas de gestión de contenido"
       },
       {
        "id": 11719,
        "name": "2.1. Configurando la cuenta de WordPress.com debería estar completada",
        "Fecha": "09\/15\/2024",
        "Materia": "Implementación de sistemas de gestión de contenido"
       },
       {
        "id": 11376,
        "name": "2.1. Amazon Web Service, Google Cloud y Microsoft Azure debería estar completada",
        "Fecha": "09\/16\/2024",
        "Materia": "Conceptualización de servicios en la nube"
       },
       {
        "id": 11819,
        "name": "2.2. Instalación de un sistema NoSQL está en fecha de entrega",
        "Fecha": "09\/17\/2024",
        "Materia": "Modelado de bases de datos NoSQL (MongoDB)"
       },
       {
        "id": 11821,
        "name": "2.2. Instalación de un sistema NoSQL debería estar completada",
        "Fecha": "09\/17\/2024",
        "Materia": "Modelado de bases de datos NoSQL (MongoDB)"
       },
       {
        "id": 11985,
        "name": "2.2. Principales elementos estéticos de juego y su importancia debería estar completada",
        "Fecha": "09\/19\/2024",
        "Materia": "Optativa: Diseño de juegos I"
       },
       {
        "id": 11331,
        "name": "2.4. Modelos, Migrations y Seeders en Laravel está en fecha de entrega",
        "Fecha": "09\/22\/2024",
        "Materia": "Conceptualización de entornos de desarrollo de aplicaciones y servicios"
       },
       {
        "id": 11333,
        "name": "2.4. Modelos, Migrations y Seeders en Laravel debería estar completada",
        "Fecha": "09\/22\/2024",
        "Materia": "Conceptualización de entornos de desarrollo de aplicaciones y servicios"
       },
       {
        "id": 11720,
        "name": "2.2. Mis primeras entradas al sitio está en fecha de entrega",
        "Fecha": "09\/22\/2024",
        "Materia": "Implementación de sistemas de gestión de contenido"
       },
       {
        "id": 11722,
        "name": "2.2. Mis primeras entradas al sitio debería estar completada",
        "Fecha": "09\/22\/2024",
        "Materia": "Implementación de sistemas de gestión de contenido"
       },
       {
        "id": 11722,
        "name": "2.2. Mis primeras entradas al sitio debería estar completada",
        "Fecha": "09\/22\/2024",
        "Materia": "Implementación de sistemas de gestión de contenido"
       },
       {
        "id": 12413,
        "name": "2.2. El proceso de validación de documentos en un proyecto está en fecha de entrega",
        "Fecha": "09\/22\/2024",
        "Materia": "Proyecto V"
       },
       {
        "id": 12415,
        "name": "2.2. El proceso de validación de documentos en un proyecto debería estar completada",
        "Fecha": "09\/22\/2024",
        "Materia": "Proyecto V"
       },
       {
        "id": 11822,
        "name": "2.3. Diseño guiado está en fecha de entrega",
        "Fecha": "09\/23\/2024",
        "Materia": "Modelado de bases de datos NoSQL (MongoDB)"
       },
       {
        "id": 11824,
        "name": "2.3. Diseño guiado debería estar completada",
        "Fecha": "09\/23\/2024",
        "Materia": "Modelado de bases de datos NoSQL (MongoDB)"
       },
       {
        "id": 11959,
        "name": "2.3. Principales dinámicas de juego y su importancia está en fecha de entrega",
        "Fecha": "09\/24\/2024",
        "Materia": "Optativa: Diseño de juegos I"
       },
       {
        "id": 11961,
        "name": "2.3. Principales dinámicas de juego y su importancia debería estar completada",
        "Fecha": "09\/24\/2024",
        "Materia": "Optativa: Diseño de juegos I"
       },
       {
        "id": 11362,
        "name": "2.2. IBM Cloud, DigitalOcean, Railway y Render está en fecha de entrega",
        "Fecha": "09\/25\/2024",
        "Materia": "Conceptualización de servicios en la nube"
       },
       {
        "id": 11364,
        "name": "2.2. IBM Cloud, DigitalOcean, Railway y Render debería estar completada",
        "Fecha": "09\/25\/2024",
        "Materia": "Conceptualización de servicios en la nube"
       },
       {
        "id": 12435,
        "name": "2.3. Parte 1. El hosting debería estar completada",
        "Fecha": "09\/27\/2024",
        "Materia": "Proyecto V"
       },
       {
        "id": 11334,
        "name": "2.5. GET y POST está en fecha de entrega",
        "Fecha": "09\/29\/2024",
        "Materia": "Conceptualización de entornos de desarrollo de aplicaciones y servicios"
       },
       {
        "id": 11336,
        "name": "2.5. GET y POST debería estar completada",
        "Fecha": "09\/29\/2024",
        "Materia": "Conceptualización de entornos de desarrollo de aplicaciones y servicios"
       },
       {
        "id": 11723,
        "name": "2.3. Adjuntando imágenes y material multimedia está en fecha de entrega",
        "Fecha": "09\/29\/2024",
        "Materia": "Implementación de sistemas de gestión de contenido"
       },
       {
        "id": 11725,
        "name": "2.3. Adjuntando imágenes y material multimedia debería estar completada",
        "Fecha": "09\/29\/2024",
        "Materia": "Implementación de sistemas de gestión de contenido"
       },
       {
        "id": 11825,
        "name": "Integradora 2. Modelado está en fecha de entrega",
        "Fecha": "09\/29\/2024",
        "Materia": "Modelado de bases de datos NoSQL (MongoDB)"
       },
       {
        "id": 11827,
        "name": "Integradora 2. Modelado debería estar completada",
        "Fecha": "09\/29\/2024",
        "Materia": "Modelado de bases de datos NoSQL (MongoDB)"
       },
       {
        "id": 11962,
        "name": "Integradora 2. Propuesta de balance de juegos está en fecha de entrega",
        "Fecha": "09\/29\/2024",
        "Materia": "Optativa: Diseño de juegos I"
       },
       {
        "id": 11964,
        "name": "Integradora 2. Propuesta de balance de juegos debería estar completada",
        "Fecha": "09\/29\/2024",
        "Materia": "Optativa: Diseño de juegos I"
       },
       {
        "id": 12416,
        "name": "2.3. Parte 2. El hosting para nuestro proyecto Web está en fecha de entrega",
        "Fecha": "10\/02\/2024",
        "Materia": "Proyecto V"
       },
       {
        "id": 12418,
        "name": "2.3. Parte 2. El hosting para nuestro proyecto Web debería estar completada",
        "Fecha": "10\/02\/2024",
        "Materia": "Proyecto V"
       },
       {
        "id": 11377,
        "name": "2.3. Una plataforma para cada necesidad debería estar completada",
        "Fecha": "10\/04\/2024",
        "Materia": "Conceptualización de servicios en la nube"
       },
       {
        "id": 11986,
        "name": "3.1. Jugando un juego para analizarlo debería estar completada",
        "Fecha": "10\/04\/2024",
        "Materia": "Optativa: Diseño de juegos I"
       },
       {
        "id": 11848,
        "name": "Preliminar 3. Operaciones y utilidad de las bases de datos MongoDB debería estar completada",
        "Fecha": "10\/05\/2024",
        "Materia": "Modelado de bases de datos NoSQL (MongoDB)"
       },
       {
        "id": 11337,
        "name": "2.6. PUT y DELETE está en fecha de entrega",
        "Fecha": "10\/06\/2024",
        "Materia": "Conceptualización de entornos de desarrollo de aplicaciones y servicios"
       },
       {
        "id": 11339,
        "name": "2.6. PUT y DELETE debería estar completada",
        "Fecha": "10\/06\/2024",
        "Materia": "Conceptualización de entornos de desarrollo de aplicaciones y servicios"
       },
       {
        "id": 11726,
        "name": "2.4. Creando mi primera forma de contacto está en fecha de entrega",
        "Fecha": "10\/06\/2024",
        "Materia": "Implementación de sistemas de gestión de contenido"
       },
       {
        "id": 11726,
        "name": "2.4. Creando mi primera forma de contacto está en fecha de entrega",
        "Fecha": "10\/06\/2024",
        "Materia": "Implementación de sistemas de gestión de contenido"
       },
       {
        "id": 11728,
        "name": "2.4. Creando mi primera forma de contacto debería estar completada",
        "Fecha": "10\/06\/2024",
        "Materia": "Implementación de sistemas de gestión de contenido"
       },
       {
        "id": 11965,
        "name": "3.2. Definiciones mecánicas y estéticas de juego y ejemplos está en fecha de entrega",
        "Fecha": "10\/09\/2024",
        "Materia": "Optativa: Diseño de juegos I"
       },
       {
        "id": 11967,
        "name": "3.2. Definiciones mecánicas y estéticas de juego y ejemplos debería estar completada",
        "Fecha": "10\/09\/2024",
        "Materia": "Optativa: Diseño de juegos I"
       },
       {
        "id": 12436,
        "name": "2.4. Parte 1. Tipos de arquitecturas de sistemas Web debería estar completada",
        "Fecha": "10\/09\/2024",
        "Materia": "Proyecto V"
       },
       {
        "id": 11828,
        "name": "3.1. Gestión de documentos está en fecha de entrega",
        "Fecha": "10\/12\/2024",
        "Materia": "Modelado de bases de datos NoSQL (MongoDB)"
       },
       {
        "id": 11830,
        "name": "3.1. Gestión de documentos debería estar completada",
        "Fecha": "10\/12\/2024",
        "Materia": "Modelado de bases de datos NoSQL (MongoDB)"
       },
       {
        "id": 11340,
        "name": "3.1. Introducción a Angular: componentes y Angular Router está en fecha de entrega",
        "Fecha": "10\/13\/2024",
        "Materia": "Conceptualización de entornos de desarrollo de aplicaciones y servicios"
       },
       {
        "id": 11342,
        "name": "3.1. Introducción a Angular: componentes y Angular Router debería estar completada",
        "Fecha": "10\/13\/2024",
        "Materia": "Conceptualización de entornos de desarrollo de aplicaciones y servicios"
       },
       {
        "id": 11729,
        "name": "Integradora 2. Creando páginas Web en WordPress está en fecha de entrega",
        "Fecha": "10\/13\/2024",
        "Materia": "Implementación de sistemas de gestión de contenido"
       },
       {
        "id": 11731,
        "name": "Integradora 2. Creando páginas Web en WordPress debería estar completada",
        "Fecha": "10\/13\/2024",
        "Materia": "Implementación de sistemas de gestión de contenido"
       },
       {
        "id": 11968,
        "name": "3.3. Simulación de mecánicas está en fecha de entrega",
        "Fecha": "10\/14\/2024",
        "Materia": "Optativa: Diseño de juegos I"
       },
       {
        "id": 11970,
        "name": "3.3. Simulación de mecánicas debería estar completada",
        "Fecha": "10\/14\/2024",
        "Materia": "Optativa: Diseño de juegos I"
       },
       {
        "id": 11343,
        "name": "3.2. Estilos con Bootstrap está en fecha de entrega",
        "Fecha": "10\/19\/2024",
        "Materia": "Conceptualización de entornos de desarrollo de aplicaciones y servicios"
       },
       {
        "id": 11345,
        "name": "3.2. Estilos con Bootstrap debería estar completada",
        "Fecha": "10\/19\/2024",
        "Materia": "Conceptualización de entornos de desarrollo de aplicaciones y servicios"
       },
       {
        "id": 11367,
        "name": "3.1. Plataformas de aplicaciones Web debería estar completada",
        "Fecha": "10\/19\/2024",
        "Materia": "Conceptualización de servicios en la nube"
       },
       {
        "id": 11745,
        "name": "3.1. Mejores prácticas de seguridad y mantenimiento de un sitio Web debería estar completada",
        "Fecha": "10\/19\/2024",
        "Materia": "Implementación de sistemas de gestión de contenido"
       },
       {
        "id": 11831,
        "name": "3.2 Trabajo con arreglos está en fecha de entrega",
        "Fecha": "10\/19\/2024",
        "Materia": "Modelado de bases de datos NoSQL (MongoDB)"
       },
       {
        "id": 11832,
        "name": "3.2 Trabajo con arreglos debería estar completada",
        "Fecha": "10\/19\/2024",
        "Materia": "Modelado de bases de datos NoSQL (MongoDB)"
       },
       {
        "id": 11987,
        "name": "3.4. Realizando un prototipo de juego en papel debería estar completada",
        "Fecha": "10\/19\/2024",
        "Materia": "Optativa: Diseño de juegos I"
       },
       {
        "id": 12419,
        "name": "2.4. Parte 2. La arquitectura para nuestro proyecto Web está en fecha de entrega",
        "Fecha": "10\/19\/2024",
        "Materia": "Proyecto V"
       },
       {
        "id": 12421,
        "name": "2.4. Parte 2. La arquitectura para nuestro proyecto Web debería estar completada",
        "Fecha": "10\/19\/2024",
        "Materia": "Proyecto V"
       },
       {
        "id": 11971,
        "name": "Integradora 3. Implementación de simulación de mecánicas está en fecha de entrega",
        "Fecha": "10\/25\/2024",
        "Materia": "Optativa: Diseño de juegos I"
       },
       {
        "id": 11973,
        "name": "Integradora 3. Implementación de simulación de mecánicas debería estar completada",
        "Fecha": "10\/25\/2024",
        "Materia": "Optativa: Diseño de juegos I"
       },
       {
        "id": 11346,
        "name": "3.3. Integración de estilos con Bootstrap en Angular está en fecha de entrega",
        "Fecha": "10\/26\/2024",
        "Materia": "Conceptualización de entornos de desarrollo de aplicaciones y servicios"
       },
       {
        "id": 11348,
        "name": "3.3. Integración de estilos con Bootstrap en Angular debería estar completada",
        "Fecha": "10\/26\/2024",
        "Materia": "Conceptualización de entornos de desarrollo de aplicaciones y servicios"
       },
       {
        "id": 11348,
        "name": "3.3. Integración de estilos con Bootstrap en Angular debería estar completada",
        "Fecha": "10\/26\/2024",
        "Materia": "Conceptualización de entornos de desarrollo de aplicaciones y servicios"
       },
       {
        "id": 11732,
        "name": "3.2. Plugins y Widgets está en fecha de entrega",
        "Fecha": "10\/26\/2024",
        "Materia": "Implementación de sistemas de gestión de contenido"
       },
       {
        "id": 11734,
        "name": "3.2. Plugins y Widgets debería estar completada",
        "Fecha": "10\/26\/2024",
        "Materia": "Implementación de sistemas de gestión de contenido"
       },
       {
        "id": 11833,
        "name": "3.3 Avance del proyecto está en fecha de entrega",
        "Fecha": "10\/27\/2024",
        "Materia": "Modelado de bases de datos NoSQL (MongoDB)"
       },
       {
        "id": 11835,
        "name": "3.3 Avance del proyecto debería estar completada",
        "Fecha": "10\/27\/2024",
        "Materia": "Modelado de bases de datos NoSQL (MongoDB)"
       },
       {
        "id": 12437,
        "name": "3.1. Parte 1. Arquitectura del desarrollo y componentes del proyecto (UX\/UI)  debería estar completada",
        "Fecha": "10\/28\/2024",
        "Materia": "Proyecto V"
       },
       {
        "id": 11974,
        "name": "4.1. Herramientas tecnológicas para el diseño de juegos digitales está en fecha de entrega",
        "Fecha": "10\/31\/2024",
        "Materia": "Optativa: Diseño de juegos I"
       },
       {
        "id": 11976,
        "name": "4.1. Herramientas tecnológicas para el diseño de juegos digitales debería estar completada",
        "Fecha": "10\/31\/2024",
        "Materia": "Optativa: Diseño de juegos I"
       },
       {
        "id": 11737,
        "name": "3.3. Redes sociales y recursos multimedia debería estar completada",
        "Fecha": "11\/02\/2024",
        "Materia": "Implementación de sistemas de gestión de contenido"
       },
       {
        "id": 11349,
        "name": "3.4. Servicios y llamadas HTTP en Angular está en fecha de entrega",
        "Fecha": "11\/02\/2024",
        "Materia": "Conceptualización de entornos de desarrollo de aplicaciones y servicios"
       },
       {
        "id": 11351,
        "name": "3.4. Servicios y llamadas HTTP en Angular debería estar completada",
        "Fecha": "11\/02\/2024",
        "Materia": "Conceptualización de entornos de desarrollo de aplicaciones y servicios"
       },
       {
        "id": 11735,
        "name": "3.3. Redes sociales y recursos multimedia está en fecha de entrega",
        "Fecha": "11\/02\/2024",
        "Materia": "Implementación de sistemas de gestión de contenido"
       },
       {
        "id": 11368,
        "name": "3.2. Sitio Web sencillo está en fecha de entrega",
        "Fecha": "11\/03\/2024",
        "Materia": "Conceptualización de servicios en la nube"
       },
       {
        "id": 11370,
        "name": "3.2. Sitio Web sencillo debería estar completada",
        "Fecha": "11\/03\/2024",
        "Materia": "Conceptualización de servicios en la nube"
       },
       {
        "id": 11836,
        "name": "Integradora 3. Hoja de especificaciones está en fecha de entrega",
        "Fecha": "11\/03\/2024",
        "Materia": "Modelado de bases de datos NoSQL (MongoDB)"
       },
       {
        "id": 11838,
        "name": "Integradora 3. Hoja de especificaciones debería estar completada",
        "Fecha": "11\/03\/2024",
        "Materia": "Modelado de bases de datos NoSQL (MongoDB)"
       },
       {
        "id": 12422,
        "name": "3.1. Parte 2. Arquitectura de desarrollo y componentes de nuestro proyecto Web está en fecha de entrega",
        "Fecha": "11\/06\/2024",
        "Materia": "Proyecto V"
       },
       {
        "id": 12424,
        "name": "3.1. Parte 2. Arquitectura de desarrollo y componentes de nuestro proyecto Web debería estar completada",
        "Fecha": "11\/06\/2024",
        "Materia": "Proyecto V"
       },
       {
        "id": 11979,
        "name": "4.2. Roles de trabajo y sus actividades en el proceso de desarrollo de juegos debería estar completada",
        "Fecha": "11\/07\/2024",
        "Materia": "Optativa: Diseño de juegos I"
       },
       {
        "id": 11977,
        "name": "4.2. Roles de trabajo y sus actividades en el proceso de desarrollo de juegos está en fecha de entrega",
        "Fecha": "11\/07\/2024",
        "Materia": "Optativa: Diseño de juegos I"
       },
       {
        "id": 11352,
        "name": "3.5. Funciones de visualización, creación y eliminación está en fecha de entrega",
        "Fecha": "11\/09\/2024",
        "Materia": "Conceptualización de entornos de desarrollo de aplicaciones y servicios"
       },
       {
        "id": 11354,
        "name": "3.5. Funciones de visualización, creación y eliminación debería estar completada",
        "Fecha": "11\/09\/2024",
        "Materia": "Conceptualización de entornos de desarrollo de aplicaciones y servicios"
       },
       {
        "id": 11738,
        "name": "3.4. Estadísticas del sitio está en fecha de entrega",
        "Fecha": "11\/09\/2024",
        "Materia": "Implementación de sistemas de gestión de contenido"
       },
       {
        "id": 11740,
        "name": "3.4. Estadísticas del sitio debería estar completada",
        "Fecha": "11\/09\/2024",
        "Materia": "Implementación de sistemas de gestión de contenido"
       },
       {
        "id": 11839,
        "name": "4.1. Ejercicios consultas está en fecha de entrega",
        "Fecha": "11\/10\/2024",
        "Materia": "Modelado de bases de datos NoSQL (MongoDB)"
       },
       {
        "id": 11841,
        "name": "4.1. Ejercicios consultas debería estar completada",
        "Fecha": "11\/10\/2024",
        "Materia": "Modelado de bases de datos NoSQL (MongoDB)"
       },
       {
        "id": 11841,
        "name": "4.1. Ejercicios consultas debería estar completada",
        "Fecha": "11\/10\/2024",
        "Materia": "Modelado de bases de datos NoSQL (MongoDB)"
       },
       {
        "id": 11371,
        "name": "3.3. Aplicación web con base de datos está en fecha de entrega",
        "Fecha": "11\/14\/2024",
        "Materia": "Conceptualización de servicios en la nube"
       },
       {
        "id": 11373,
        "name": "3.3. Aplicación web con base de datos debería estar completada",
        "Fecha": "11\/14\/2024",
        "Materia": "Conceptualización de servicios en la nube"
       },
       {
        "id": 11988,
        "name": "4.3. Prototipado en papel o en frío debería estar completada",
        "Fecha": "11\/14\/2024",
        "Materia": "Optativa: Diseño de juegos I"
       },
       {
        "id": 12425,
        "name": "3.2. Los componentes funcionales del sistema, los datos de entrada y salida y comunicación entre ellos  está en fecha de entrega",
        "Fecha": "11\/15\/2024",
        "Materia": "Proyecto V"
       },
       {
        "id": 12427,
        "name": "3.2. Los componentes funcionales del sistema, los datos de entrada y salida y comunicación entre ellos  debería estar completada",
        "Fecha": "11\/15\/2024",
        "Materia": "Proyecto V"
       },
       {
        "id": 11741,
        "name": "Integradora 3. Temas o plantillas está en fecha de entrega",
        "Fecha": "11\/16\/2024",
        "Materia": "Implementación de sistemas de gestión de contenido"
       },
       {
        "id": 11743,
        "name": "Integradora 3. Temas o plantillas debería estar completada",
        "Fecha": "11\/16\/2024",
        "Materia": "Implementación de sistemas de gestión de contenido"
       },
       {
        "id": 11842,
        "name": "4.2. Ejercicios consultas parte 2 está en fecha de entrega",
        "Fecha": "11\/17\/2024",
        "Materia": "Modelado de bases de datos NoSQL (MongoDB)"
       },
       {
        "id": 11844,
        "name": "4.2. Ejercicios consultas parte 2 debería estar completada",
        "Fecha": "11\/17\/2024",
        "Materia": "Modelado de bases de datos NoSQL (MongoDB)"
       },
       {
        "id": 12428,
        "name": "3.3. El diseño del diagrama de funcionalidades del sistema web y un primer acercamiento al diagrama de clases  está en fecha de entrega",
        "Fecha": "11\/21\/2024",
        "Materia": "Proyecto V"
       },
       {
        "id": 12430,
        "name": "3.3. El diseño del diagrama de funcionalidades del sistema web y un primer acercamiento al diagrama de clases  debería estar completada",
        "Fecha": "11\/21\/2024",
        "Materia": "Proyecto V"
       },
       {
        "id": 11849,
        "name": "Integradora 4. Quiz debería estar completada",
        "Fecha": "11\/22\/2024",
        "Materia": "Modelado de bases de datos NoSQL (MongoDB)"
       },
       {
        "id": 11852,
        "name": "Recapitulación U4 cierra",
        "Fecha": "11\/22\/2024",
        "Materia": "Modelado de bases de datos NoSQL (MongoDB)"
       },
       {
        "id": 12865,
        "name": "Recapitulación U4 debería estar completada",
        "Fecha": "11\/22\/2024",
        "Materia": "Modelado de bases de datos NoSQL (MongoDB)"
       },
       {
        "id": 12402,
        "name": "Formación integral está en fecha de entrega",
        "Fecha": "12\/01\/2024",
        "Materia": "Proyecto V"
       },
       {
        "id": 11378,
        "name": "PI. Aplicación web dinámica en un servicio de la nube debería estar completada",
        "Fecha": "12\/01\/2024",
        "Materia": "Conceptualización de servicios en la nube"
       },
       {
        "id": 11746,
        "name": "Producto integrador. Proyecto de portal basado en CMS WordPress.com debería estar completada",
        "Fecha": "12\/01\/2024",
        "Materia": "Implementación de sistemas de gestión de contenido"
       },
       {
        "id": 11845,
        "name": "Producto integrador. Testimonial Proyecto final está en fecha de entrega",
        "Fecha": "12\/01\/2024",
        "Materia": "Modelado de bases de datos NoSQL (MongoDB)"
       },
       {
        "id": 11847,
        "name": "Producto integrador. Testimonial Proyecto final debería estar completada",
        "Fecha": "12\/01\/2024",
        "Materia": "Modelado de bases de datos NoSQL (MongoDB)"
       },
       {
        "id": 11980,
        "name": "PI. Documento de Diseño de Juego (DDG) está en fecha de entrega",
        "Fecha": "12\/01\/2024",
        "Materia": "Optativa: Diseño de juegos I"
       },
       {
        "id": 11982,
        "name": "PI. Documento de Diseño de Juego (DDG) debería estar completada",
        "Fecha": "12\/01\/2024",
        "Materia": "Optativa: Diseño de juegos I"
       },
       {
        "id": 12431,
        "name": "PI. La definición de un sistema Web  está en fecha de entrega",
        "Fecha": "12\/01\/2024",
        "Materia": "Proyecto V"
       },
       {
        "id": 12433,
        "name": "PI. La definición de un sistema Web  debería estar completada",
        "Fecha": "12\/01\/2024",
        "Materia": "Proyecto V"
       },
       {
        "id": 11355,
        "name": "PI. Integración de Frontend Angular con Backend Laravel está en fecha de entrega",
        "Fecha": "12\/14\/2024",
        "Materia": "Conceptualización de entornos de desarrollo de aplicaciones y servicios"
       },
       {
        "id": 11357,
        "name": "PI. Integración de Frontend Angular con Backend Laravel debería estar completada",
        "Fecha": "12\/14\/2024",
        "Materia": "Conceptualización de entornos de desarrollo de aplicaciones y servicios"
       },
       {
        "id": 11357,
        "name": "PI. Integración de Frontend Angular con Backend Laravel debería estar completada",
        "Fecha": "12\/14\/2024",
        "Materia": "Conceptualización de entornos de desarrollo de aplicaciones y servicios"
       }
]

async function main() {
  console.log(`Start seeding ...`)
  for (const task of tasksData) {
    const createdTask = await prisma.task.create({
      data: {
        name: task.name,
        fecha: task.Fecha,
        materia: task.Materia,
      },
    })
    console.log(`Created task with id: ${createdTask.id}`)
  }
  console.log(`Seeding finished.`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })