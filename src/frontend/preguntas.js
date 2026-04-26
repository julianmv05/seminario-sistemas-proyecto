const bancoPreguntas = {
    1: {
        texto: "Cuando piensas en tus estudios últimamente, ¿qué situación se parece más a lo que estás viviendo?",
        bloque: 1,
        opciones: [
            { desc: "Siento que tengo demasiadas tareas y no sé por dónde empezar", pts: 4, sig: 10 },
            { desc: "Siento presión constante por parte de mi familia respecto a mi desempeño", pts: 4, sig: 20 },
            { desc: "Me comparo con otros y siento que voy atrasado", pts: 4, sig: 30 },
            { desc: "Me cuesta mucho mantenerme concentrado cuando estudio", pts: 4, sig: 40 }
        ]
    },

    
    10: {
        texto: "Cuando tienes varias tareas, ¿cómo decides cuál hacer primero?",
        bloque: 1,
        opciones: [
            { desc: "Empiezo por la más fácil para avanzar rápido", pts: 2, sig: 11 },
            { desc: "Hago la que me genera más presión en el momento", pts: 3, sig: 11 },
            { desc: "No sigo ningún criterio, solo empiezo algo", pts: 4, sig: 11 },
            { desc: "Intento organizarlas pero no sé bien cómo priorizar", pts: 3, sig: 11 }
        ]
    },
    11: {
        texto: "¿Cómo sueles organizar tu tiempo de estudio?",
        bloque: 1,
        opciones: [
            { desc: "No organizo mi tiempo, estudio cuando puedo", pts: 4, sig: 'checkFiltro' },
            { desc: "Uso horarios pero no los cumplo", pts: 3, sig: 'checkFiltro' },
            { desc: "Tengo un sistema pero no siempre funciona", pts: 2, sig: 'checkFiltro' },
            { desc: "Divido tareas pero me toma más tiempo de lo esperado", pts: 2, sig: 'checkFiltro' }
        ]
    },

    
    20: {
        texto: "Cuando tu familia habla de tus estudios, ¿qué ocurre normalmente?",
        bloque: 1,
        opciones: [
            { desc: "Me recuerdan constantemente lo que debería hacer", pts: 4, sig: 21 },
            { desc: "Comparan mi desempeño con otras personas", pts: 4, sig: 21 },
            { desc: "Me apoyan pero siento que esperan demasiado", pts: 3, sig: 21 },
            { desc: "Evito hablar con ellos sobre la escuela", pts: 3, sig: 21 }
        ]
    },
    21: {
        texto: "¿Cómo reaccionas ante esa situación?",
        bloque: 1,
        opciones: [
            { desc: "Intento cumplir con todo aunque me sobrecargue", pts: 4, sig: 'checkFiltro' },
            { desc: "Me frustro pero no digo nada", pts: 3, sig: 'checkFiltro' },
            { desc: "Discuto o me alejo de la situación", pts: 3, sig: 'checkFiltro' },
            { desc: "Lo ignoro pero me afecta internamente", pts: 4, sig: 'checkFiltro' }
        ]
    },

   
    30: {
        texto: "Cuando ves el progreso de otros estudiantes, ¿qué piensas?",
        bloque: 1,
        opciones: [
            { desc: "Siento que voy más lento que ellos", pts: 4, sig: 31 },
            { desc: "Creo que ellos tienen más capacidad que yo", pts: 4, sig: 31 },
            { desc: "Pienso que debería esforzarme más", pts: 3, sig: 31 },
            { desc: "No entiendo cómo logran avanzar tan rápido", pts: 3, sig: 31 }
        ]
    },
    31: {
        texto: "¿Qué haces después de tener esos pensamientos?",
        bloque: 1,
        opciones: [
            { desc: "Me desmotivo y dejo de avanzar", pts: 4, sig: 'checkFiltro' },
            { desc: "Intento trabajar más pero me frustro", pts: 3, sig: 'checkFiltro' },
            { desc: "Cambio constantemente mi forma de estudiar", pts: 3, sig: 'checkFiltro' },
            { desc: "Evito pensar en eso y sigo igual", pts: 2, sig: 'checkFiltro' }
        ]
    },

    // RAMA 4: CONCENTRACIÓN
    40: {
        texto: "¿Qué es lo que más interrumpe tu estudio?",
        bloque: 1,
        opciones: [
            { desc: "Uso constante del celular o redes sociales", pts: 4, sig: 41 },
            { desc: "Pensamientos sobre otras cosas", pts: 4, sig: 41 },
            { desc: "Ruido o interrupciones del entorno", pts: 3, sig: 41 },
            { desc: "Empiezo pero pierdo el enfoque rápidamente", pts: 4, sig: 41 }
        ]
    },
    41: {
        texto: "Cuando intentas volver a concentrarte, ¿qué sucede?",
        bloque: 1,
        opciones: [
            { desc: "Me cuesta retomar y pierdo mucho tiempo", pts: 4, sig: 'checkFiltro' },
            { desc: "Cambio de actividad en lugar de continuar", pts: 3, sig: 'checkFiltro' },
            { desc: "Intento continuar pero con baja productividad", pts: 3, sig: 'checkFiltro' },
            { desc: "Necesito empezar de nuevo desde cero", pts: 4, sig: 'checkFiltro' }
        ]
    }
};

const diagnosticosFinales = {
    gestion: {
        titulo: "Ansiedad por falta de estructura operativa",
        descripcion: "Presentas dificultades para organizar y priorizar tareas, lo que genera saturación.",
        tips: ["Aplica la Matriz de Eisenhower", "Divide tareas en bloques pequeños", "Planifica 3 tareas clave por día"]
    },
    familiar: {
        titulo: "Ansiedad por presión del entorno familiar",
        descripcion: "El entorno familiar actúa como fuente de exigencia, afectando tu autorregulación.",
        tips: ["Practica comunicación asertiva", "Define límites sobre expectativas", "Diferencia tu valor de tus notas"]
    },
    comparacion: {
        titulo: "Ansiedad por comparación social",
        descripcion: "Basas tu progreso en el desempeño ajeno, afectando tu autoestima.",
        tips: ["Evalúa tu progreso contra tu versión pasada", "Reduce la exposición a comparaciones", "Define objetivos personales"]
    },
    concentracion: {
        titulo: "Ansiedad por déficit de enfoque",
        descripcion: "Existen distractores que afectan tu atención sostenida y rendimiento.",
        tips: ["Usa técnica Pomodoro", "Elimina distractores físicos", "Establece un espacio fijo de estudio"]
    }
};
