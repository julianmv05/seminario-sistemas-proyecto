const bancoPreguntas = {
    1: {
        texto: "Cuando piensas en tus estudios últimamente, ¿qué situación se parece más a lo que estás viviendo?",
        bloque: 1,
        opciones: [
            { desc: "Siento que tengo demasiadas tareas y no sé por dónde empezar", pts: 4, sig: 100 },
            { desc: "Siento presión constante por parte de mi familia respecto a mi desempeño", pts: 4, sig: 200 },
            { desc: "Me comparo con otros y siento que voy atrasado", pts: 4, sig: 300 },
            { desc: "Me cuesta mucho mantenerme concentrado cuando estudio", pts: 4, sig: 400 },
            { desc: "Me siento saturado y no sé cómo manejar el descanso", pts: 4, sig: 50 },
            { desc: "Me frustro con materias técnicas (mate/física) o con los profesores", pts: 4, sig: 60 }
        ]
    },

    50: {
        texto: "Cuando te sientes saturado por la escuela, ¿qué sueles hacer para manejarlo?",
        bloque: 1,
        opciones: [
            { desc: "Escucho música o hago algo mientras trabajo", pts: 2, sig: 51 },
            { desc: "Prefiero dormir o desconectarme completamente", pts: 3, sig: 51 },
            { desc: "Busco hablar con alguien o compartirlo", pts: 1, sig: 51 },
            { desc: "Me distraigo con redes sociales o videos", pts: 4, sig: 51 }
        ]
    },
    51: {
        texto: "Después de hacer eso, ¿qué pasa con tus pendientes?",
        bloque: 1,
        opciones: [
            { desc: "Regreso con más claridad y continúo", pts: 1, sig: 'checkFiltro' },
            { desc: "Me cuesta retomar lo que estaba haciendo", pts: 3, sig: 'checkFiltro' },
            { desc: "Pospongo lo que tenía que hacer", pts: 4, sig: 'checkFiltro' },
            { desc: "Retomo pero con menor ritmo", pts: 2, sig: 'checkFiltro' }
        ]
    },

    60: {
        texto: "Cuando trabajas en materias como matemáticas o física, ¿qué es lo que más te pasa?",
        bloque: 1,
        opciones: [
            { desc: "Dependo mucho de herramientas externas (IA, videos) para avanzar", pts: 3, sig: 61 },
            { desc: "Me distraigo fácilmente mientras intento resolver ejercicios", pts: 4, sig: 61 },
            { desc: "Me frustro cuando cometo errores y dejo de intentarlo", pts: 4, sig: 61 },
            { desc: "Siento que el profesor influye mucho en si entiendo o no", pts: 3, sig: 61 }
        ]
    },
    61: {
        texto: "Cuando no entiendes un tema, ¿qué haces normalmente?",
        bloque: 1,
        opciones: [
            { desc: "Busco otra explicación por mi cuenta", pts: 1, sig: 'checkFiltro' },
            { desc: "Intento pero abandono rápido", pts: 4, sig: 'checkFiltro' },
            { desc: "Espero a que alguien me lo explique", pts: 3, sig: 'checkFiltro' },
            { desc: "Repito el mismo método aunque no funcione", pts: 3, sig: 'checkFiltro' }
        ]
    },

    100: {
        texto: "Cuando tienes muchas tareas, ¿qué es lo primero que haces?",
        bloque: 1,
        opciones: [
            { desc: "Empiezo por la más fácil", pts: 2, sig: 101 },
            { desc: "Hago la que me genera más presión", pts: 3, sig: 101 },
            { desc: "No sé por dónde empezar", pts: 4, sig: 101 },
            { desc: "Intento organizarlas pero me confundo", pts: 3, sig: 101 }
        ]
    },
    101: {
        texto: "¿Cómo decides qué tarea es más importante?",
        bloque: 1,
        opciones: [
            { desc: "Por fecha de entrega", pts: 2, sig: 102 },
            { desc: "Por dificultad", pts: 3, sig: 102 },
            { desc: "Por lo que recuerdo primero", pts: 4, sig: 102 },
            { desc: "No tengo un criterio claro", pts: 4, sig: 102 }
        ]
    },
    102: {
        texto: "Cuando organizas tu tiempo, ¿qué suele pasar?",
        bloque: 1,
        opciones: [
            { desc: "No hago planificación", pts: 4, sig: 103 },
            { desc: "Planifico pero no lo sigo", pts: 3, sig: 103 },
            { desc: "Planifico pero subestimo el tiempo", pts: 2, sig: 103 },
            { desc: "Improviso sobre la marcha", pts: 4, sig: 103 }
        ]
    },
    103: {
        texto: "Cuando una tarea te toma más tiempo del esperado, ¿cómo reaccionas?",
        bloque: 1,
        opciones: [
            { desc: "La dejo y cambio a otra", pts: 4, sig: 104 },
            { desc: "Me frustro pero sigo", pts: 3, sig: 104 },
            { desc: "Intento terminarla aunque me retrase", pts: 2, sig: 104 },
            { desc: "La pospongo para después", pts: 4, sig: 104 }
        ]
    },
    104: {
        texto: "Al final del día, ¿cómo quedan tus tareas?",
        bloque: 1,
        opciones: [
            { desc: "Muchas quedan incompletas", pts: 4, sig: 'checkFiltro' },
            { desc: "Hago algunas pero no las importantes", pts: 3, sig: 'checkFiltro' },
            { desc: "Cumplo parcialmente lo planeado", pts: 2, sig: 'checkFiltro' },
            { desc: "Termino lo urgente pero no todo", pts: 2, sig: 'checkFiltro' }
        ]
    },

    200: {
        texto: "Cuando tu familia habla de tus estudios, ¿qué ocurre normalmente?",
        bloque: 1,
        opciones: [
            { desc: "Me recuerdan lo que debo hacer", pts: 3, sig: 201 },
            { desc: "Me comparan con otros", pts: 4, sig: 201 },
            { desc: "Siento que esperan mucho de mí", pts: 4, sig: 201 },
            { desc: "Evito hablar del tema", pts: 3, sig: 201 }
        ]
    },
    201: {
        texto: "¿Cómo reaccionas ante eso?",
        bloque: 1,
        opciones: [
            { desc: "Intento cumplir todo", pts: 4, sig: 202 },
            { desc: "Me frustro pero sigo", pts: 3, sig: 202 },
            { desc: "Discuto o me alejo", pts: 3, sig: 202 },
            { desc: "Lo ignoro", pts: 3, sig: 202 }
        ]
    },
    202: {
        texto: "¿Cómo afecta esto tu forma de estudiar?",
        bloque: 1,
        opciones: [
            { desc: "Estudio con presión constante", pts: 4, sig: 203 },
            { desc: "Evito estudiar", pts: 4, sig: 203 },
            { desc: "Estudio pero sin motivación", pts: 3, sig: 203 },
            { desc: "Solo cumplo lo mínimo", pts: 3, sig: 203 }
        ]
    },
    203: {
        texto: "Cuando no cumples expectativas, ¿qué haces?",
        bloque: 1,
        opciones: [
            { desc: "Trabajo más para compensar", pts: 4, sig: 204 },
            { desc: "Me siento mal y me bloqueo", pts: 4, sig: 204 },
            { desc: "Lo dejo pasar", pts: 3, sig: 204 },
            { desc: "Evito el tema", pts: 3, sig: 204 }
        ]
    },
    204: {
        texto: "¿Qué tanto influye tu familia en tus decisiones académicas?",
        bloque: 1,
        opciones: [
            { desc: "Totalmente", pts: 4, sig: 'checkFiltro' },
            { desc: "Bastante", pts: 3, sig: 'checkFiltro' },
            { desc: "Moderadamente", pts: 2, sig: 'checkFiltro' },
            { desc: "Poco", pts: 1, sig: 'checkFiltro' }
        ]
    },

    400: {
        texto: "Cuando estudias, ¿qué interrumpe más tu enfoque?",
        bloque: 1,
        opciones: [
            { desc: "Celular/redes", pts: 4, sig: 401 },
            { desc: "Pensamientos", pts: 4, sig: 401 },
            { desc: "Ruido", pts: 3, sig: 401 },
            { desc: "Pierdo el enfoque rápido", pts: 4, sig: 401 }
        ]
    },
    401: {
        texto: "Cuando te distraes, ¿qué haces?",
        bloque: 1,
        opciones: [
            { desc: "Sigo la distracción", pts: 4, sig: 402 },
            { desc: "Intento volver pero me cuesta", pts: 3, sig: 402 },
            { desc: "Cambio de actividad", pts: 3, sig: 402 },
            { desc: "Regreso rápido", pts: 1, sig: 402 }
        ]
    },
    402: {
        texto: "¿Cómo es tu ambiente de estudio?",
        bloque: 1,
        opciones: [
            { desc: "Lleno de distracciones", pts: 4, sig: 403 },
            { desc: "Moderadamente controlado", pts: 3, sig: 403 },
            { desc: "Adecuado", pts: 2, sig: 403 },
            { desc: "Optimizado para estudiar", pts: 1, sig: 403 }
        ]
    },
    403: {
        texto: "¿Cuánto tiempo puedes concentrarte seguido?",
        bloque: 1,
        opciones: [
            { desc: "Menos de 15 min", pts: 4, sig: 404 },
            { desc: "15-30 min", pts: 3, sig: 404 },
            { desc: "30-60 min", pts: 2, sig: 404 },
            { desc: "Más de 1 hora", pts: 1, sig: 404 }
        ]
    },
    404: {
        texto: "¿Qué pasa al intentar retomar el estudio?",
        bloque: 1,
        opciones: [
            { desc: "Me cuesta mucho", pts: 4, sig: 'checkFiltro' },
            { desc: "Pierdo tiempo", pts: 3, sig: 'checkFiltro' },
            { desc: "Retomo lento", pts: 2, sig: 'checkFiltro' },
            { desc: "Retomo rápido", pts: 1, sig: 'checkFiltro' }
        ]
    },

    300: {
        texto: "Cuando ves a otros avanzar, ¿qué piensas?",
        bloque: 1,
        opciones: [
            { desc: "Voy atrasado", pts: 4, sig: 301 },
            { desc: "Ellos son mejores", pts: 4, sig: 301 },
            { desc: "Debería esforzarme más", pts: 3, sig: 301 },
            { desc: "No entiendo cómo lo hacen", pts: 3, sig: 301 }
        ]
    },
    301: {
        texto: "¿Qué haces después de pensar eso?",
        bloque: 1,
        opciones: [
            { desc: "Dejo de avanzar", pts: 4, sig: 302 },
            { desc: "Intento más pero me frustro", pts: 3, sig: 302 },
            { desc: "Cambio mi forma de estudiar", pts: 3, sig: 302 },
            { desc: "Sigo igual", pts: 2, sig: 302 }
        ]
    },
    302: {
        texto: "¿Cómo mides tu progreso?",
        bloque: 1,
        opciones: [
            { desc: "Comparándome con otros", pts: 4, sig: 303 },
            { desc: "Por calificaciones", pts: 3, sig: 303 },
            { desc: "Por comprensión", pts: 1, sig: 303 },
            { desc: "No lo mido", pts: 3, sig: 303 }
        ]
    },
    303: {
        texto: "Cuando no avanzas como esperas, ¿qué haces?",
        bloque: 1,
        opciones: [
            { desc: "Me rindo", pts: 4, sig: 304 },
            { desc: "Intento pero me frustro", pts: 3, sig: 304 },
            { desc: "Busco ayuda", pts: 1, sig: 304 },
            { desc: "Lo ignoro", pts: 3, sig: 304 }
        ]
    },
    304: {
        texto: "¿Qué tanto influye el progreso de otros en ti?",
        bloque: 1,
        opciones: [
            { desc: "Mucho", pts: 4, sig: 'checkFiltro' },
            { desc: "Bastante", pts: 3, sig: 'checkFiltro' },
            { desc: "Poco", pts: 2, sig: 'checkFiltro' },
            { desc: "Nada", pts: 1, sig: 'checkFiltro' }
        ]
    }
};

const diagnosticosFinales = {
    gestion: {
        titulo: "Ansiedad por falta de estructura operativa",
        descripcion: "Presentas dificultades para organizar y priorizar tareas de manera eficiente.",
        tips: ["Aplica la Matriz de Eisenhower", "Planifica 3 tareas clave por día"]
    },
    familiar: {
        titulo: "Ansiedad por presión del entorno familiar",
        descripcion: "El entorno familiar actúa como fuente constante de exigencia externa.",
        tips: ["Practica comunicación asertiva", "Define límites sobre expectativas"]
    },
    comparacion: {
        titulo: "Ansiedad por comparación social",
        descripcion: "Basas tu percepción de progreso en el desempeño de otros, afectando tu autoestima.",
        tips: ["Evalúa tu progreso respecto a tu versión pasada", "Define objetivos personales"]
    },
    concentracion: {
        titulo: "Ansiedad por déficit de enfoque",
        descripcion: "Dificultad para mantener la atención sostenida debido a distractores.",
        tips: ["Usa técnica Pomodoro", "Elimina distractores físicos"]
    },
    regulacion: {
        titulo: "Gestión ineficiente del descanso",
        descripcion: "Utilizas estrategias de alivio que afectan la continuidad del trabajo académico.",
        tips: ["Usa descansos programados (50/10)", "Evita recompensas que rompan el enfoque"]
    },
    dependencia: {
        titulo: "Dependencia de apoyo externo",
        descripcion: "Dificultad para procesar información sin apoyo constante, limitando tu autonomía.",
        tips: ["Intenta resolver solo antes de pedir ayuda", "IA como guía, no sustituto"]
    },
    frustracion: {
        titulo: "Bloqueo por intolerancia al error",
        descripcion: "Percibes el error como un fracaso personal en lugar de aprendizaje.",
        tips: ["Reformula el error como proceso", "Evita abandonar tras el primer fallo"]
    }
};
