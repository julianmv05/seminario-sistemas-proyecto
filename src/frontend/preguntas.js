const bancoPreguntas = {
    // BLOQUE 1: ANSIEDAD FÍSICA
    1: { texto: "¿Te cuesta conciliar el sueño debido a preocupaciones académicas?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: 2 }, { desc: "Rara vez", pts: 1, sig: 2 }, { desc: "A veces", pts: 2, sig: 2 }, { desc: "Frecuentemente", pts: 3, sig: 2 }, { desc: "Siempre", pts: 4, sig: 2 }
    ]},
    2: { texto: "¿Te despiertas durante la noche pensando en tareas o exámenes?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: 3 }, { desc: "Rara vez", pts: 1, sig: 3 }, { desc: "A veces", pts: 2, sig: 3 }, { desc: "Frecuentemente", pts: 3, sig: 3 }, { desc: "Siempre", pts: 4, sig: 3 }
    ]},
    3: { texto: "¿Sientes tensión muscular cuando piensas en tus responsabilidades escolares?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: "checkFiltro" }, { desc: "Rara vez", pts: 1, sig: "checkFiltro" }, { desc: "A veces", pts: 2, sig: 4 }, { desc: "Frecuentemente", pts: 3, sig: 4 }, { desc: "Siempre", pts: 4, sig: 4 }
    ]},
    4: { texto: "¿Has experimentado dolores de cabeza relacionados con el estrés académico?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: 2 }, { desc: "Rara vez", pts: 1, sig: 2 }, { desc: "A veces", pts: 2, sig: 2 }, { desc: "Frecuentemente", pts: 3, sig: 2 }, { desc: "Siempre", pts: 4, sig: 2 }
    ]},
    5: { texto: "¿Sientes opresión en el pecho o dificultad para respirar en periodos de evaluación?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: 3 }, { desc: "Rara vez", pts: 1, sig: 3 }, { desc: "A veces", pts: 2, sig: 3 }, { desc: "Frecuentemente", pts: 3, sig: 3 }, { desc: "Siempre", pts: 4, sig: 3 }
    ]},
    6: { texto: "¿Te sientes físicamente agotado incluso después de descansar?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: "checkFiltro" }, { desc: "Rara vez", pts: 1, sig: "checkFiltro" }, { desc: "A veces", pts: 2, sig: 4 }, { desc: "Frecuentemente", pts: 3, sig: 4 }, { desc: "Siempre", pts: 4, sig: 4 }
    ]},
    7: { texto: "¿Has notado cambios en tu apetito durante periodos de alta carga académica?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: 2 }, { desc: "Rara vez", pts: 1, sig: 2 }, { desc: "A veces", pts: 2, sig: 2 }, { desc: "Frecuentemente", pts: 3, sig: 2 }, { desc: "Siempre", pts: 4, sig: 2 }
    ]},
    8: { texto: "¿Sufres de molestias estomacales antes de exámenes o entregas importantes?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: 3 }, { desc: "Rara vez", pts: 1, sig: 3 }, { desc: "A veces", pts: 2, sig: 3 }, { desc: "Frecuentemente", pts: 3, sig: 3 }, { desc: "Siempre", pts: 4, sig: 3 }
    ]},
    9: { texto: "Presentas sudoración excesiva o palpitaciones al pensar en tus estudios?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: "checkFiltro" }, { desc: "Rara vez", pts: 1, sig: "checkFiltro" }, { desc: "A veces", pts: 2, sig: 4 }, { desc: "Frecuentemente", pts: 3, sig: 4 }, { desc: "Siempre", pts: 4, sig: 4 }
    ]},
    10: { texto: "¿Te resulta difícil relajarte incluso en tus momentos de descanso?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: 2 }, { desc: "Rara vez", pts: 1, sig: 2 }, { desc: "A veces", pts: 2, sig: 2 }, { desc: "Frecuentemente", pts: 3, sig: 2 }, { desc: "Siempre", pts: 4, sig: 2 }
    ]},
    11: { texto: "¿Has tenido episodios de insomnio durante el semestre?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: 3 }, { desc: "Rara vez", pts: 1, sig: 3 }, { desc: "A veces", pts: 2, sig: 3 }, { desc: "Frecuentemente", pts: 3, sig: 3 }, { desc: "Siempre", pts: 4, sig: 3 }
    ]},
    12: { texto: "¿Sientes fatiga constante durante la jornada académica?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: "checkFiltro" }, { desc: "Rara vez", pts: 1, sig: "checkFiltro" }, { desc: "A veces", pts: 2, sig: 4 }, { desc: "Frecuentemente", pts: 3, sig: 4 }, { desc: "Siempre", pts: 4, sig: 4 }
    ]},
    13: { texto: "¿Has descuidado tu alimentación debido al estrés escolar?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: 2 }, { desc: "Rara vez", pts: 1, sig: 2 }, { desc: "A veces", pts: 2, sig: 2 }, { desc: "Frecuentemente", pts: 3, sig: 2 }, { desc: "Siempre", pts: 4, sig: 2 }
    ]},
    14: { texto: "¿Te enfermas con mayor frecuencia en periodos de evaluaciones?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: 3 }, { desc: "Rara vez", pts: 1, sig: 3 }, { desc: "A veces", pts: 2, sig: 3 }, { desc: "Frecuentemente", pts: 3, sig: 3 }, { desc: "Siempre", pts: 4, sig: 3 }
    ]},
    15: { texto: "¿Sientes que tu cuerpo permanece en estado de alerta la mayor parte del tiempo?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: "checkFiltro" }, { desc: "Rara vez", pts: 1, sig: "checkFiltro" }, { desc: "A veces", pts: 2, sig: 4 }, { desc: "Frecuentemente", pts: 3, sig: 4 }, { desc: "Siempre", pts: 4, sig: 4 }
    ]},
    16: { texto: "¿Sientes que debes cumplir con las expectativas académicas de tu familia?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: 2 }, { desc: "Rara vez", pts: 1, sig: 2 }, { desc: "A veces", pts: 2, sig: 2 }, { desc: "Frecuentemente", pts: 3, sig: 2 }, { desc: "Siempre", pts: 4, sig: 2 }
    ]},
    17: { texto: "¿Te comparas constantemente con el rendimiento de tus compañeros?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: 3 }, { desc: "Rara vez", pts: 1, sig: 3 }, { desc: "A veces", pts: 2, sig: 3 }, { desc: "Frecuentemente", pts: 3, sig: 3 }, { desc: "Siempre", pts: 4, sig: 3 }
    ]},
    18: { texto: "¿Temes decepcionar a las personas importantes en tu vida?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: "checkFiltro" }, { desc: "Rara vez", pts: 1, sig: "checkFiltro" }, { desc: "A veces", pts: 2, sig: 4 }, { desc: "Frecuentemente", pts: 3, sig: 4 }, { desc: "Siempre", pts: 4, sig: 4 }
    ]},
    19: { texto: "¿Sientes presión por mantener una imagen de éxito académico?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: 2 }, { desc: "Rara vez", pts: 1, sig: 2 }, { desc: "A veces", pts: 2, sig: 2 }, { desc: "Frecuentemente", pts: 3, sig: 2 }, { desc: "Siempre", pts: 4, sig: 2 }
    ]},
    20: { texto: "¿Te preocupa lo que otros piensen si obtienes bajas calificaciones?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: 3 }, { desc: "Rara vez", pts: 1, sig: 3 }, { desc: "A veces", pts: 2, sig: 3 }, { desc: "Frecuentemente", pts: 3, sig: 3 }, { desc: "Siempre", pts: 4, sig: 3 }
    ]},
    21: { texto: "¿Evitas hablar de tus dificultades académicas por miedo al juicio social?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: "checkFiltro" }, { desc: "Rara vez", pts: 1, sig: "checkFiltro" }, { desc: "A veces", pts: 2, sig: 4 }, { desc: "Frecuentemente", pts: 3, sig: 4 }, { desc: "Siempre", pts: 4, sig: 4 }
    ]},
    22: { texto: "¿Sientes que la competencia con tus compañeros incrementa tu ansiedad?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: 2 }, { desc: "Rara vez", pts: 1, sig: 2 }, { desc: "A veces", pts: 2, sig: 2 }, { desc: "Frecuentemente", pts: 3, sig: 2 }, { desc: "Siempre", pts: 4, sig: 2 }
    ]},
    23: { texto: "¿Te resulta difícil pedir ayuda por temor a parecer incapaz?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: 3 }, { desc: "Rara vez", pts: 1, sig: 3 }, { desc: "A veces", pts: 2, sig: 3 }, { desc: "Frecuentemente", pts: 3, sig: 3 }, { desc: "Siempre", pts: 4, sig: 3 }
    ]},
    24: { texto: "¿Has dejado de participar en actividades sociales por priorizar el estudio?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: "checkFiltro" }, { desc: "Rara vez", pts: 1, sig: "checkFiltro" }, { desc: "A veces", pts: 2, sig: 4 }, { desc: "Frecuentemente", pts: 3, sig: 4 }, { desc: "Siempre", pts: 4, sig: 4 }
    ]},
    25: { texto: "¿Sientes que debes ser perfecto para ser aceptado?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: 2 }, { desc: "Rara vez", pts: 1, sig: 2 }, { desc: "A veces", pts: 2, sig: 2 }, { desc: "Frecuentemente", pts: 3, sig: 2 }, { desc: "Siempre", pts: 4, sig: 2 }
    ]},
    26: { texto: "¿Te afecta emocionalmente ver los logros académicos de otros estudiantes?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: 3 }, { desc: "Rara vez", pts: 1, sig: 3 }, { desc: "A veces", pts: 2, sig: 3 }, { desc: "Frecuentemente", pts: 3, sig: 3 }, { desc: "Siempre", pts: 4, sig: 3 }
    ]},
    27: { texto: "¿Sientes tensión muscular cuando piensas en tus responsabilidades escolares?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: "checkFiltro" }, { desc: "Rara vez", pts: 1, sig: "checkFiltro" }, { desc: "A veces", pts: 2, sig: 4 }, { desc: "Frecuentemente", pts: 3, sig: 4 }, { desc: "Siempre", pts: 4, sig: 4 }
    ]},
    28: { texto: "¿Sientes que no puedes permitirte fallar frente a los demás?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: 2 }, { desc: "Rara vez", pts: 1, sig: 2 }, { desc: "A veces", pts: 2, sig: 2 }, { desc: "Frecuentemente", pts: 3, sig: 2 }, { desc: "Siempre", pts: 4, sig: 2 }
    ]},
    29: { texto: "¿Te preocupa no cumplir con el estándar académico de tu institución?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: 3 }, { desc: "Rara vez", pts: 1, sig: 3 }, { desc: "A veces", pts: 2, sig: 3 }, { desc: "Frecuentemente", pts: 3, sig: 3 }, { desc: "Siempre", pts: 4, sig: 3 }
    ]},
    30: { texto: "¿Has sentido que tu valor personal depende de la aprobación externa?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: "checkFiltro" }, { desc: "Rara vez", pts: 1, sig: "checkFiltro" }, { desc: "A veces", pts: 2, sig: 4 }, { desc: "Frecuentemente", pts: 3, sig: 4 }, { desc: "Siempre", pts: 4, sig: 4 }
    ]},
    31: { texto: "¿Sientes que tu valor como persona depende de tus logros académicos?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: 2 }, { desc: "Rara vez", pts: 1, sig: 2 }, { desc: "A veces", pts: 2, sig: 2 }, { desc: "Frecuentemente", pts: 3, sig: 2 }, { desc: "Siempre", pts: 4, sig: 2 }
    ]},
    32: { texto: "¿Te exiges más de lo que razonablemente puedes cumplir?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: 3 }, { desc: "Rara vez", pts: 1, sig: 3 }, { desc: "A veces", pts: 2, sig: 3 }, { desc: "Frecuentemente", pts: 3, sig: 3 }, { desc: "Siempre", pts: 4, sig: 3 }
    ]},
    33: { texto: "¿Te cuesta sentir satisfacción incluso cuando obtienes buenos resultados?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: "checkFiltro" }, { desc: "Rara vez", pts: 1, sig: "checkFiltro" }, { desc: "A veces", pts: 2, sig: 4 }, { desc: "Frecuentemente", pts: 3, sig: 4 }, { desc: "Siempre", pts: 4, sig: 4 }
    ]},
    34: { texto: "¿Piensas que un fracaso académico define tu futuro?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: 2 }, { desc: "Rara vez", pts: 1, sig: 2 }, { desc: "A veces", pts: 2, sig: 2 }, { desc: "Frecuentemente", pts: 3, sig: 2 }, { desc: "Siempre", pts: 4, sig: 2 }
    ]},
    35: { texto: "¿Tiendes a pensar que un error arruinará tu carrera profesional?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: 3 }, { desc: "Rara vez", pts: 1, sig: 3 }, { desc: "A veces", pts: 2, sig: 3 }, { desc: "Frecuentemente", pts: 3, sig: 3 }, { desc: "Siempre", pts: 4, sig: 3 }
    ]},
    36: { texto: "¿Sientes miedo constante a no alcanzar tus metas personales?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: "checkFiltro" }, { desc: "Rara vez", pts: 1, sig: "checkFiltro" }, { desc: "A veces", pts: 2, sig: 4 }, { desc: "Frecuentemente", pts: 3, sig: 4 }, { desc: "Siempre", pts: 4, sig: 4 }
    ]},
    37: { texto: "¿Te resulta difícil establecer metas académicas realistas?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: 2 }, { desc: "Rara vez", pts: 1, sig: 2 }, { desc: "A veces", pts: 2, sig: 2 }, { desc: "Frecuentemente", pts: 3, sig: 2 }, { desc: "Siempre", pts: 4, sig: 2 }
    ]},
    38: { texto: "¿Te sientes frustrado cuando no cumples tus propias expectativas?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: 3 }, { desc: "Rara vez", pts: 1, sig: 3 }, { desc: "A veces", pts: 2, sig: 3 }, { desc: "Frecuentemente", pts: 3, sig: 3 }, { desc: "Siempre", pts: 4, sig: 3 }
    ]},
    39: { texto: "¿Experimentas pensamientos negativos recurrentes sobre tu desempeño?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: "checkFiltro" }, { desc: "Rara vez", pts: 1, sig: "checkFiltro" }, { desc: "A veces", pts: 2, sig: 4 }, { desc: "Frecuentemente", pts: 3, sig: 4 }, { desc: "Siempre", pts: 4, sig: 4 }
    ]},
    40: { texto: "¿Sientes que nunca es suficiente el esfuerzo que realizas?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: 2 }, { desc: "Rara vez", pts: 1, sig: 2 }, { desc: "A veces", pts: 2, sig: 2 }, { desc: "Frecuentemente", pts: 3, sig: 2 }, { desc: "Siempre", pts: 4, sig: 2 }
    ]},
    41: { texto: "¿Te preocupa excesivamente tu futuro profesional?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: 3 }, { desc: "Rara vez", pts: 1, sig: 3 }, { desc: "A veces", pts: 2, sig: 3 }, { desc: "Frecuentemente", pts: 3, sig: 3 }, { desc: "Siempre", pts: 4, sig: 3 }
    ]},
    42: { texto: "¿Sientes que debes sacrificar tu bienestar para alcanzar tus metas?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: "checkFiltro" }, { desc: "Rara vez", pts: 1, sig: "checkFiltro" }, { desc: "A veces", pts: 2, sig: 4 }, { desc: "Frecuentemente", pts: 3, sig: 4 }, { desc: "Siempre", pts: 4, sig: 4 }
    ]},
    43: { texto: "¿Te cuesta disfrutar tus logros académicos?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: 2 }, { desc: "Rara vez", pts: 1, sig: 2 }, { desc: "A veces", pts: 2, sig: 2 }, { desc: "Frecuentemente", pts: 3, sig: 2 }, { desc: "Siempre", pts: 4, sig: 2 }
    ]},
    44: { texto: "¿Sientes que el fracaso no es una opción en tu vida?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: 3 }, { desc: "Rara vez", pts: 1, sig: 3 }, { desc: "A veces", pts: 2, sig: 3 }, { desc: "Frecuentemente", pts: 3, sig: 3 }, { desc: "Siempre", pts: 4, sig: 3 }
    ]},
    45: { texto: "¿Tiendes a anticipar resultados negativos incluso antes de intentarlo?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: "checkFiltro" }, { desc: "Rara vez", pts: 1, sig: "checkFiltro" }, { desc: "A veces", pts: 2, sig: 4 }, { desc: "Frecuentemente", pts: 3, sig: 4 }, { desc: "Siempre", pts: 4, sig: 4 }
    ]},
    46: { texto: "¿Pospones tareas importantes debido a la ansiedad que te generan?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: 2 }, { desc: "Rara vez", pts: 1, sig: 2 }, { desc: "A veces", pts: 2, sig: 2 }, { desc: "Frecuentemente", pts: 3, sig: 2 }, { desc: "Siempre", pts: 4, sig: 2 }
    ]},
    47: { texto: "¿Te cuesta concentrarte al estudiar por pensamientos intrusivos?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: 3 }, { desc: "Rara vez", pts: 1, sig: 3 }, { desc: "A veces", pts: 2, sig: 3 }, { desc: "Frecuentemente", pts: 3, sig: 3 }, { desc: "Siempre", pts: 4, sig: 3 }
    ]},
    48: { texto: "¿Has experimentado bloqueos mentales durante exámenes?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: "checkFiltro" }, { desc: "Rara vez", pts: 1, sig: "checkFiltro" }, { desc: "A veces", pts: 2, sig: 4 }, { desc: "Frecuentemente", pts: 3, sig: 4 }, { desc: "Siempre", pts: 4, sig: 4 }
    ]},
    49: { texto: "¿Evitas iniciar proyectos académicos por miedo al fracaso?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: 2 }, { desc: "Rara vez", pts: 1, sig: 2 }, { desc: "A veces", pts: 2, sig: 2 }, { desc: "Frecuentemente", pts: 3, sig: 2 }, { desc: "Siempre", pts: 4, sig: 2 }
    ]},
    50: { texto: "¿Te resulta difícil organizar tu tiempo de estudio?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: 3 }, { desc: "Rara vez", pts: 1, sig: 3 }, { desc: "A veces", pts: 2, sig: 3 }, { desc: "Frecuentemente", pts: 3, sig: 3 }, { desc: "Siempre", pts: 4, sig: 3 }
    ]},
    51: { texto: "¿Sientes tensión muscular cuando piensas en tus responsabilidades escolares?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: "checkFiltro" }, { desc: "Rara vez", pts: 1, sig: "checkFiltro" }, { desc: "A veces", pts: 2, sig: 4 }, { desc: "Frecuentemente", pts: 3, sig: 4 }, { desc: "Siempre", pts: 4, sig: 4 }
    ]},
    52: { texto: "¿Has considerado abandonar alguna materia debido al estrés?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: 2 }, { desc: "Rara vez", pts: 1, sig: 2 }, { desc: "A veces", pts: 2, sig: 2 }, { desc: "Frecuentemente", pts: 3, sig: 2 }, { desc: "Siempre", pts: 4, sig: 2 }
    ]},
    53: { texto: "¿Tu rendimiento académico ha disminuido por motivos emocionales?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: 3 }, { desc: "Rara vez", pts: 1, sig: 3 }, { desc: "A veces", pts: 2, sig: 3 }, { desc: "Frecuentemente", pts: 3, sig: 3 }, { desc: "Siempre", pts: 4, sig: 3 }
    ]},
    54: { texto: "¿Te sientes abrumado al enfrentar múltiples tareas simultáneamente?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: "checkFiltro" }, { desc: "Rara vez", pts: 1, sig: "checkFiltro" }, { desc: "A veces", pts: 2, sig: 4 }, { desc: "Frecuentemente", pts: 3, sig: 4 }, { desc: "Siempre", pts: 4, sig: 4 }
    ]},
    55: { texto: "¿Has dejado de realizar actividades que disfrutas por estudiar?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: 2 }, { desc: "Rara vez", pts: 1, sig: 2 }, { desc: "A veces", pts: 2, sig: 2 }, { desc: "Frecuentemente", pts: 3, sig: 2 }, { desc: "Siempre", pts: 4, sig: 2 }
    ]},
    56: { texto: "¿Sientes que no tienes control sobre tus responsabilidades académicas?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: 3 }, { desc: "Rara vez", pts: 1, sig: 3 }, { desc: "A veces", pts: 2, sig: 3 }, { desc: "Frecuentemente", pts: 3, sig: 3 }, { desc: "Siempre", pts: 4, sig: 3 }
    ]},
    57: { texto: "¿Te resulta difícil tomar decisiones académicas importantes?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: "checkFiltro" }, { desc: "Rara vez", pts: 1, sig: "checkFiltro" }, { desc: "A veces", pts: 2, sig: 4 }, { desc: "Frecuentemente", pts: 3, sig: 4 }, { desc: "Siempre", pts: 4, sig: 4 }
    ]},
    58: { texto: "¿Has descuidado tu bienestar personal por cumplir con tus estudios?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: 2 }, { desc: "Rara vez", pts: 1, sig: 2 }, { desc: "A veces", pts: 2, sig: 2 }, { desc: "Frecuentemente", pts: 3, sig: 2 }, { desc: "Siempre", pts: 4, sig: 2 }
    ]},
    59: { texto: "¿Sientes ansiedad intensa antes de presentar un examen?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: 3 }, { desc: "Rara vez", pts: 1, sig: 3 }, { desc: "A veces", pts: 2, sig: 3 }, { desc: "Frecuentemente", pts: 3, sig: 3 }, { desc: "Siempre", pts: 4, sig: 3 }
    ]},
    60: { texto: "¿Consideras que el estrés académico afecta significativamente tu vida diaria?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: "checkFiltro" }, { desc: "Rara vez", pts: 1, sig: "checkFiltro" }, { desc: "A veces", pts: 2, sig: 4 }, { desc: "Frecuentemente", pts: 3, sig: 4 }, { desc: "Siempre", pts: 4, sig: 4 }
    ]},
    
    
    
};
