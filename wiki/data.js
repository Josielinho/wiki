window.wikiData = {
  categories: [
    { id: "levels", name: "Niveles de Prueba" },
    { id: "types", name: "Tipos de Prueba" },
    { id: "functional", name: "Pruebas Funcionales" },
    { id: "nonfunctional", name: "Pruebas No Funcionales" },
    { id: "change", name: "Pruebas de Cambio" },
  ],
  articles: [
    {
      id: "unit-testing",
      title: "Pruebas Unitarias",
      category: "levels",
      description: "Pruebas que verifican el funcionamiento correcto de unidades individuales de código.",
      author: "Roger",
      sections: [
        {
          title: "¿Qué son?",
          content:
            "Las pruebas unitarias son pruebas de software que se encargan de verificar que cada componente o módulo individual del sistema funciona correctamente de forma aislada.",
        },
        {
          title: "Objetivo",
          content:
            "Asegurar que cada unidad de código (función, método, clase) funciona como se espera, identificando errores en las primeras etapas del desarrollo.",
        },
      ],
      keyPoints: [
        "Se realizan en las primeras fases del desarrollo",
        "Prueban componentes de forma aislada",
        "Facilitan la detección temprana de errores",
        "Mejoran la calidad del código",
      ],
    },
    {
      id: "integration-testing",
      title: "Pruebas de Integración",
      category: "levels",
      description: "Verifican cómo los diferentes módulos o componentes interactúan entre sí.",
      author: "Gabriela",
      sections: [
        {
          title: "¿Qué son?",
          content:
            "Las pruebas de integración son un tipo de prueba de software que se encarga de verificar cómo los diferentes módulos o componentes de un sistema interactúan entre sí. A diferencia de las pruebas unitarias, su objetivo no es solo asegurar que cada módulo funcione individualmente, sino que trabajen de forma coherente y correcta cuando se combinan.",
        },
        {
          title: "Objetivo",
          content:
            "Identificar errores en las interfaces y en la comunicación entre componentes para garantizar que el sistema cumpla con sus requisitos.",
        },
      ],
      keyPoints: [
        "Prueban la interacción entre módulos",
        "Identifican errores de comunicación",
        "Se realizan después de pruebas unitarias",
        "Garantizan coherencia del sistema",
      ],
    },
    {
      id: "system-testing",
      title: "Pruebas de Sistemas",
      category: "levels",
      description:
        "Evalúan el sistema completo ya integrado para comprobar que cumple con los requisitos especificados.",
      author: "Abdel",
      sections: [
        {
          title: "¿Qué son?",
          content:
            "Las pruebas de sistemas son una fase del aseguramiento de la calidad del software en la que se evalúa el sistema completo ya integrado, para comprobar que cumple con los requisitos especificados. Su objetivo es analizar el comportamiento general del sistema y cómo interactúa con otros sistemas.",
        },
        {
          title: "Implementación",
          content:
            "Diseñar casos de prueba basados en los requisitos del sistema. Ejecutarlos en un entorno que simule las condiciones de producción. Validar los resultados obtenidos. Durante estas pruebas se evalúan funcionalidades, rendimiento, seguridad, usabilidad y otros aspectos críticos del sistema.",
        },
      ],
      keyPoints: [
        "Se realizan después de pruebas unitarias y de integración",
        "Evalúan el sistema completo integrado",
        "Detectan defectos no identificados en fases anteriores",
        "Reducen riesgo de fallos en producción",
      ],
    },
    {
      id: "acceptance-testing",
      title: "Pruebas de Aceptación",
      category: "levels",
      description:
        "Fase final donde se verifica que el sistema cumple con los requisitos del negocio y expectativas del usuario.",
      author: "Klhetvin",
      sections: [
        {
          title: "¿Qué son?",
          content:
            "Las pruebas de aceptación son la fase final del proceso de pruebas, donde se verifica que el sistema cumple con los requisitos del negocio y las expectativas del usuario. Por lo general, estas pruebas las realizan los usuarios finales o clientes.",
        },
        {
          title: "Proceso",
          content:
            "Se desarrollan criterios de aceptación basados en los requisitos funcionales y de negocio. Los usuarios finales ejecutan casos de prueba para validar la funcionalidad y la usabilidad del sistema. Estas pruebas se realizan en un entorno controlado que simula las condiciones de producción y pueden incluir pruebas alfa, beta y pruebas de usuario (UAT).",
        },
      ],
      keyPoints: [
        "Garantizan que el sistema está listo para despliegue",
        "Involucran a usuarios finales en validación",
        "Permiten identificar defectos antes de entrega",
        "Reducen riesgo de rechazo post-lanzamiento",
      ],
    },
    {
      id: "functional-testing",
      title: "Pruebas Funcionales",
      category: "functional",
      description:
        "Determinan si el software funciona como se espera, verificando que ofrece los resultados correctos.",
      author: "Jair",
      sections: [
        {
          title: "¿Qué son?",
          content:
            "Las pruebas funcionales en las pruebas de software son una forma de determinar si el software o una aplicación funcionan como se espera. Las pruebas funcionales no se ocupan de cómo se produce el procesamiento, sino de si éste ofrece los resultados correctos o tiene algún fallo.",
        },
        {
          title: "Importancia",
          content:
            "Su importancia radica en que al hacerlo correctamente la primera vez puede eliminar reparaciones costosas que más tarde consumen mucho tiempo y ayudar a mantener a los clientes contentos.",
        },
        {
          title: "Ejemplo: Inicio de Sesión",
          content:
            "Objetivo: Verificar que el sistema permita iniciar sesión correctamente con credenciales válidas. Entrada: Usuario: jair@gmail.com, Contraseña: 123456. Acción: El usuario ingresa sus credenciales y presiona el botón Iniciar sesión. Resultado esperado: El sistema redirige al usuario al panel principal y muestra su nombre en la esquina superior derecha.",
        },
      ],
      keyPoints: [
        "Verifica que el software funciona como se espera",
        "Se enfoca en resultados, no en el procesamiento",
        "Elimina reparaciones costosas",
        "Mantiene satisfacción del cliente",
      ],
    },
    {
      id: "nonfunctional-testing",
      title: "Pruebas No Funcionales",
      category: "nonfunctional",
      description: "Evalúan cómo se comporta un sistema más allá de sus funciones básicas.",
      author: "Bacilio",
      sections: [
        {
          title: "¿Qué son?",
          content:
            "Las pruebas no funcionales son un tipo de pruebas de software que evalúan cómo se comporta un sistema más allá de sus funciones básicas. A diferencia de las pruebas funcionales que verifican qué hace el sistema, estas se enfocan en atributos de calidad como el rendimiento, la seguridad, la escalabilidad, la usabilidad, la compatibilidad y la confiabilidad.",
        },
        {
          title: "Implementación",
          content:
            "Su implementación consiste en definir requisitos no funcionales claros, diseñar escenarios de prueba adecuados, utilizar herramientas especializadas para medirlos, ejecutar las pruebas en entornos controlados y analizar los resultados frente a criterios previamente establecidos.",
        },
      ],
      keyPoints: [
        "Evalúan rendimiento, seguridad y escalabilidad",
        "Garantizan calidad global del software",
        "Incrementan satisfacción del usuario",
        "Previenen fallos críticos en producción",
      ],
    },
    {
      id: "white-box-testing",
      title: "Pruebas de Caja Blanca",
      category: "types",
      description: "Analizan directamente el código fuente y la lógica interna del programa.",
      author: "Angel M.",
      sections: [
        {
          title: "¿Qué son?",
          content:
            "Las pruebas de estructura o de caja blanca son un tipo de verificación del software en la que se analiza directamente el código fuente, su lógica interna y la forma en que están construidas las estructuras de control. A diferencia de las pruebas de caja negra, aquí se busca comprobar el cómo funciona el programa por dentro.",
        },
        {
          title: "Técnicas",
          content:
            "Se apoya en técnicas como la cobertura de sentencias, decisiones, condiciones múltiples o el análisis del flujo de datos, normalmente asistidas por herramientas automatizadas de testing que facilitan medir el alcance de la prueba.",
        },
      ],
      keyPoints: [
        "Analiza código fuente directamente",
        "Detecta errores internos difíciles de identificar",
        "Previene fallos ocultos",
        "Aumenta confiabilidad del software",
      ],
    },
    {
      id: "black-box-testing",
      title: "Pruebas de Caja Negra",
      category: "types",
      description: "Prueban un sistema sin conocimiento previo de su funcionamiento interno.",
      author: "Esteban",
      sections: [
        {
          title: "¿Qué son?",
          content:
            "La prueba de caja negra implica probar un sistema sin conocimiento previo de su funcionamiento interno. Un evaluador proporciona una entrada y observa la salida generada por el sistema bajo prueba. Esto permite identificar cómo responde el sistema a las acciones esperadas e inesperadas del usuario.",
        },
        {
          title: "Ventajas",
          content:
            "Es una técnica de prueba eficaz porque evalúa un sistema de principio a fin. Al igual que a los usuarios finales no les importa cómo está codificado o diseñado un sistema y esperan recibir una respuesta adecuada a sus solicitudes, un tester puede simular la actividad del usuario y comprobar si el sistema cumple sus promesas.",
        },
      ],
      keyPoints: [
        "Simula actividad del usuario final",
        "Evalúa sistema de principio a fin",
        "No requiere conocimiento del código",
        "Identifica problemas de usabilidad",
      ],
    },
    {
      id: "regression-testing",
      title: "Pruebas de Regresión",
      category: "change",
      description: "Verifican que los cambios no hayan generado defectos en las partes que ya funcionaban.",
      author: "Elvis Herrera",
      sections: [
        {
          title: "¿Qué son?",
          content:
            "La prueba de regresión es un tipo de prueba de software que se realiza cada vez que se introduce un cambio en el sistema. Su objetivo principal es verificar que el cambio no haya generado defectos en las partes que ya funcionaban correctamente.",
        },
        {
          title: "Cómo Funciona",
          content:
            "Se reejecutan casos de prueba previamente diseñados sobre las áreas del software que podrían verse afectadas por el cambio. Se detecta si alguna funcionalidad que antes estaba bien ahora falla. Generalmente se apoya en herramientas de automatización, dado que puede implicar muchas repeticiones.",
        },
      ],
      keyPoints: [
        "Garantiza estabilidad después de cambios",
        "Previene reaparición de errores corregidos",
        "Mantiene confianza en calidad del producto",
        "Permite entrega continua y ágil",
      ],
    },
    {
      id: "confirmation-testing",
      title: "Pruebas de Confirmación",
      category: "change",
      description: "Verifican si un defecto previamente identificado y corregido ha sido realmente solucionado.",
      author: "Joseph",
      sections: [
        {
          title: "¿Qué son?",
          content:
            "Las pruebas de confirmación en software son un tipo de prueba de regresión enfocada en verificar si un defecto previamente identificado y corregido ha sido realmente solucionado. Después de una corrección, se vuelven a ejecutar todos los casos de prueba que fallaron debido a ese defecto original para asegurarse de que ahora pasan.",
        },
        {
          title: "Proceso",
          content:
            "Primero se detecta un defecto durante pruebas previas, luego el equipo de desarrollo corrige el código relacionado con ese defecto. Se ejecuta la prueba de confirmación únicamente sobre el módulo o funcionalidad donde estaba el error. Si pasa, el bug fue corregido, pero si falla, la corrección no funcionó o introdujo nuevos problemas.",
        },
      ],
      keyPoints: [
        "Verifica correcciones de errores",
        "Previene regresiones inmediatas",
        "Genera confianza en calidad",
        "Complementa pruebas de regresión",
      ],
    },
    {
      id: "performance-testing",
      title: "Pruebas de Rendimiento",
      category: "nonfunctional",
      description: "Evalúan la funcionalidad bajo determinadas condiciones de carga y volumen de datos.",
      author: "Sahid",
      sections: [
        {
          title: "¿Qué son?",
          content:
            "Son métodos de prueba de software que se utiliza para evaluar la funcionalidad de un producto bajo determinadas condiciones de uso como: cargas de trabajo, condición de red y volumen de datos esperados, esto con el objetivo de buscar resultados de rapidez, estabilidad, escalabilidad y capacidad de respuesta.",
        },
        {
          title: "Métricas Evaluadas",
          content:
            "Tiempo de respuesta, Throughput (rendimiento): cuantas transacciones procesa en un tiempo, Uso de recursos, Estabilidad.",
        },
      ],
      keyPoints: [
        "Simula cargas de trabajo reales",
        "Identifica cuellos de botella",
        "Garantiza experiencia fluida",
        "Mejora escalabilidad futura",
      ],
    },
    {
      id: "usability-testing",
      title: "Pruebas de Usabilidad",
      category: "nonfunctional",
      description: "Se centran en la experiencia del usuario y qué tan fácil es utilizar la aplicación.",
      author: "Angel",
      sections: [
        {
          title: "¿Qué son?",
          content:
            "La prueba de usabilidad es un tipo de prueba de software que se centra en la experiencia del usuario. Evalúa qué tan fácil, intuitivo y eficiente resulta para una persona real utilizar una aplicación o sistema.",
        },
        {
          title: "Proceso",
          content:
            "Definir objetivos de usabilidad a evaluar. Seleccionar usuarios representativos del público objetivo. Diseñar tareas comunes para que realicen. Observar a los usuarios mientras realizan las tareas. Recopilar retroalimentación mediante entrevistas o encuestas. Generar recomendaciones de diseño basadas en resultados.",
        },
      ],
      keyPoints: [
        "Detecta problemas de diseño tempranamente",
        "Mejora satisfacción del usuario",
        "Reduce errores y necesidad de capacitación",
        "Incrementa eficiencia de tareas",
      ],
    },
    {
      id: "security-testing",
      title: "Pruebas de Seguridad",
      category: "nonfunctional",
      description: "Verifican si un sistema es seguro frente a amenazas internas y externas.",
      author: "Elias",
      sections: [
        {
          title: "¿Qué son?",
          content:
            "La prueba de seguridad es un proceso de evaluación diseñado para verificar si un sistema, aplicación o red es seguro frente a amenazas internas y externas. Busca garantizar que los datos y servicios estén protegidos contra accesos no autorizados, alteraciones o pérdidas.",
        },
        {
          title: "Fases",
          content:
            "Análisis y planificación: Se definen objetivos de seguridad y alcance. Identificación de vulnerabilidades: Se aplican herramientas de scanning. Pruebas de penetración: Se simulan ataques controlados. Evaluación de resultados: Se documentan vulnerabilidades encontradas. Corrección e implementación de mejoras.",
        },
      ],
      keyPoints: [
        "Previene ciberataques",
        "Protege información sensible",
        "Cumple normativas regulatorias",
        "Ahorra costos de respuesta a ataques",
      ],
    },
    {
      id: "recovery-testing",
      title: "Pruebas de Recuperación",
      category: "nonfunctional",
      description: "Evalúan la capacidad del sistema para recuperarse de fallos e interrupciones.",
      author: "Sebastián",
      sections: [
        {
          title: "¿Qué son?",
          content:
            "La Prueba de Recuperación es un tipo de prueba de software no funcional que evalúa la capacidad de un sistema para recuperarse de fallos, interrupciones o desastres y volver a funcionar normalmente. Su objetivo principal es verificar que el sistema puede restaurar sus operaciones, datos y funcionalidades después de experimentar una falla inesperada.",
        },
        {
          title: "Escenarios Comunes",
          content:
            "Caída del servidor principal, Fallos en la base de datos, Interrupciones de conectividad de red, Cortes de energía eléctrica, Fallos de almacenamiento, Sobrecarga del sistema.",
        },
      ],
      keyPoints: [
        "Garantiza continuidad del negocio",
        "Protege integridad de datos",
        "Mantiene confianza del usuario",
        "Cumple requisitos normativos",
      ],
    },
    {
      id: "load-testing",
      title: "Pruebas de Carga",
      category: "nonfunctional",
      description: "Evalúan el comportamiento bajo una cantidad específica de usuarios o transacciones simultáneas.",
      author: "Benjamin",
      sections: [
        {
          title: "¿Qué son?",
          content:
            "Es un tipo de prueba no funcional que consiste en evaluar el comportamiento de un sistema, aplicación o servicio bajo una cantidad específica de usuarios, transacciones o peticiones simultáneas. Su propósito es comprobar si el sistema puede manejar la carga esperada de trabajo en condiciones normales y sostenidas de uso.",
        },
        {
          title: "Fases",
          content:
            "Definir objetivos y métricas. Diseñar escenarios de prueba realistas. Ejecutar la prueba con herramientas especializadas. Monitorear rendimiento de servidores y bases de datos. Analizar resultados e identificar cuellos de botella. Optimizar y repetir.",
        },
      ],
      keyPoints: [
        "Verifica estabilidad bajo carga esperada",
        "Evita fallos en producción",
        "Facilita planificación de capacidad",
        "Mejora experiencia del usuario",
      ],
    },
    {
      id: "stress-testing",
      title: "Pruebas de Estrés",
      category: "nonfunctional",
      description: "Evalúan el comportamiento bajo condiciones extremas de carga más allá de lo normal.",
      author: "Jafeth",
      sections: [
        {
          title: "¿Qué son?",
          content:
            "La prueba de estrés es un tipo de prueba no funcional que se realiza para evaluar el comportamiento de un sistema, aplicación o componente cuando se expone a condiciones extremas de carga, más allá de los niveles normales de operación. Su objetivo principal es identificar los límites de capacidad, posibles fallos, cuellos de botella y cómo se recupera el sistema después de que la carga vuelva a niveles normales.",
        },
        {
          title: "Proceso",
          content:
            "Definir los objetivos. Preparar el entorno con herramientas de pruebas de carga. Simular usuarios concurrentes o procesos masivos incrementando la carga progresivamente. Monitorear métricas clave. Analizar resultados y documentar límites de tolerancia.",
        },
      ],
      keyPoints: [
        "Garantiza robustez del sistema",
        "Previene fallos en eventos de pico",
        "Evalúa recuperación post-sobrecarga",
        "Ayuda en planificación de recursos",
      ],
    },
    {
      id: "scalability-testing",
      title: "Pruebas de Escalabilidad",
      category: "nonfunctional",
      description: "Evalúan la capacidad del sistema para mantener estabilidad cuando aumenta la carga.",
      author: "Andrés",
      sections: [
        {
          title: "¿Qué son?",
          content:
            "Las pruebas de escalabilidad son un tipo de prueba de rendimiento dentro de la ingeniería de software que evalúa la capacidad de un sistema para mantener su estabilidad y eficiencia cuando aumenta la carga de trabajo. Permiten conocer hasta qué punto una aplicación o infraestructura puede crecer en número de usuarios, transacciones o volumen de datos sin perder calidad en el servicio.",
        },
        {
          title: "Proceso",
          content:
            "Establecer objetivos y métricas. Ejecutar pruebas incrementando gradualmente la carga. Monitorear recursos y desempeño. Identificar cuellos de botella. Realizar ajustes (escalado vertical u horizontal). Repetir hasta comprobar que soporta la carga esperada.",
        },
      ],
      keyPoints: [
        "Garantiza calidad en alta demanda",
        "Facilita planificación de capacidad",
        "Mejora experiencia en picos de uso",
        "Reduce costos operativos",
      ],
    },
    {
      id: "concurrency-testing",
      title: "Pruebas de Concurrencia",
      category: "nonfunctional",
      description: "Verifican el comportamiento cuando múltiples usuarios acceden simultáneamente.",
      author: "Anyel Coronado",
      sections: [
        {
          title: "¿Qué son?",
          content:
            "La prueba de concurrencia es un tipo de prueba de software que se utiliza para verificar el comportamiento de una aplicación cuando múltiples usuarios o procesos acceden y ejecutan operaciones al mismo tiempo. Su objetivo es identificar fallos como condiciones de carrera, bloqueos (deadlocks), corrupción de datos o pérdida de rendimiento que ocurren en escenarios simultáneos.",
        },
        {
          title: "Implementación",
          content:
            "Diseño de casos de prueba para acciones concurrentes. Uso de herramientas especializadas. Ejecución de múltiples usuarios o hilos simultáneamente. Monitoreo de tiempo de respuesta, bloqueos e inconsistencias. Análisis de resultados.",
        },
      ],
      keyPoints: [
        "Detecta deadlocks y condiciones de carrera",
        "Asegura confiabilidad multiusuario",
        "Optimiza rendimiento y escalabilidad",
        "Garantiza integridad de datos",
      ],
    },
    {
      id: "ux-testing",
      title: "Pruebas de Experiencia de Usuario",
      category: "nonfunctional",
      description: "Evalúan cómo interactúan los usuarios con el software y su satisfacción.",
      author: "Jorge Vanegas",
      sections: [
        {
          title: "¿Qué son?",
          content:
            "La prueba de la experiencia del usuario es el proceso de evaluar diferentes aspectos de la usabilidad del software para determinar la mejor manera de que un sitio web o aplicativo y sus elementos interactúen con su audiencia.",
        },
        {
          title: "Proceso",
          content:
            "Definir el objetivo de evaluación. Reclutar participantes representativos. Establecer tareas concretas y realistas. Observar la interacción de usuarios. Recopilar retroalimentación mediante entrevistas o encuestas.",
        },
      ],
      keyPoints: [
        "Mejora usabilidad del producto",
        "Aumenta satisfacción del cliente",
        "Identifica problemas tempranamente",
        "Reduce riesgos de lanzamiento",
      ],
    },
    {
      id: "accessibility-testing",
      title: "Pruebas de Accesibilidad",
      category: "nonfunctional",
      description: "Verifican que cualquier persona pueda usar el software, incluso con discapacidades.",
      author: "Jojhan Acosta",
      sections: [
        {
          title: "¿Qué son?",
          content:
            "Es una revisión o evaluación que se hace a un software, aplicación o página web para comprobar que cualquier persona pueda usarlo, incluso quienes tienen alguna discapacidad (por ejemplo, alguien que no puede ver bien, no escucha, o no puede usar un mouse).",
        },
        {
          title: "Métodos",
          content:
            "Revisión automática con programas que detectan problemas comunes. Revisión manual con personas probando como si tuvieran discapacidades. Comparación con normas y buenas prácticas internacionales.",
        },
      ],
      keyPoints: [
        "Garantiza inclusión social",
        "Mejora experiencia general",
        "Cumple normativas legales",
        "Fortalece reputación organizacional",
      ],
    },
  ],
}
