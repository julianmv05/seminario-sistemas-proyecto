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
        { desc: "Nunca", pts: 0, sig: 5 }, { desc: "Rara vez", pts: 1, sig: 5 }, { desc: "A veces", pts: 2, sig: 5 }, { desc: "Frecuentemente", pts: 3, sig: 5 }, { desc: "Siempre", pts: 4, sig: 5 }
    ]},
    5: { texto: "¿Sientes opresión en el pecho o dificultad para respirar en periodos de evaluación?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: 6 }, { desc: "Rara vez", pts: 1, sig: 6 }, { desc: "A veces", pts: 2, sig: 3 }, { desc: "Frecuentemente", pts: 3, sig: 6 }, { desc: "Siempre", pts: 4, sig: 6 }
    ]},
    6: { texto: "¿Te sientes físicamente agotado incluso después de descansar?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: 7 }, { desc: "Rara vez", pts: 1, sig: 7 }, { desc: "A veces", pts: 2, sig: 7 }, { desc: "Frecuentemente", pts: 3, sig: 7 }, { desc: "Siempre", pts: 4, sig: 7 }
    ]},
    7: { texto: "¿Has notado cambios en tu apetito durante periodos de alta carga académica?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: 8 }, { desc: "Rara vez", pts: 1, sig: 8 }, { desc: "A veces", pts: 2, sig: 8 }, { desc: "Frecuentemente", pts: 3, sig: 8 }, { desc: "Siempre", pts: 4, sig: 8 }
    ]},
    8: { texto: "¿Sufres de molestias estomacales antes de exámenes o entregas importantes?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: 9 }, { desc: "Rara vez", pts: 1, sig: 9 }, { desc: "A veces", pts: 2, sig: 9 }, { desc: "Frecuentemente", pts: 3, sig: 9 }, { desc: "Siempre", pts: 4, sig: 9 }
    ]},
    9: { texto: "Presentas sudoración excesiva o palpitaciones al pensar en tus estudios?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: 10 }, { desc: "Rara vez", pts: 1, sig: 10 }, { desc: "A veces", pts: 2, sig: 10 }, { desc: "Frecuentemente", pts: 3, sig: 10 }, { desc: "Siempre", pts: 4, sig: 10 }
    ]},
    10: { texto: "¿Te resulta difícil relajarte incluso en tus momentos de descanso?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: 11 }, { desc: "Rara vez", pts: 1, sig: 11 }, { desc: "A veces", pts: 2, sig: 11 }, { desc: "Frecuentemente", pts: 3, sig: 11 }, { desc: "Siempre", pts: 4, sig: 11 }
    ]},
    11: { texto: "¿Has tenido episodios de insomnio durante el semestre?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: 12 }, { desc: "Rara vez", pts: 1, sig: 12 }, { desc: "A veces", pts: 2, sig: 12 }, { desc: "Frecuentemente", pts: 3, sig: 12 }, { desc: "Siempre", pts: 4, sig: 12 }
    ]},
    12: { texto: "¿Sientes fatiga constante durante la jornada académica?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: 13 }, { desc: "Rara vez", pts: 1, sig: 13 }, { desc: "A veces", pts: 2, sig: 13 }, { desc: "Frecuentemente", pts: 3, sig: 13 }, { desc: "Siempre", pts: 4, sig: 13 }
    ]},
    13: { texto: "¿Has descuidado tu alimentación debido al estrés escolar?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: 14 }, { desc: "Rara vez", pts: 1, sig: 14 }, { desc: "A veces", pts: 2, sig: 14 }, { desc: "Frecuentemente", pts: 3, sig: 14 }, { desc: "Siempre", pts: 4, sig: 14 }
    ]},
    14: { texto: "¿Te enfermas con mayor frecuencia en periodos de evaluaciones?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: 15 }, { desc: "Rara vez", pts: 1, sig: 15 }, { desc: "A veces", pts: 2, sig: 15 }, { desc: "Frecuentemente", pts: 3, sig: 15 }, { desc: "Siempre", pts: 4, sig: 15 }
    ]},
    15: { texto: "¿Sientes que tu cuerpo permanece en estado de alerta la mayor parte del tiempo?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: 16 }, { desc: "Rara vez", pts: 1, sig: 16 }, { desc: "A veces", pts: 2, sig: 16 }, { desc: "Frecuentemente", pts: 3, sig: 16 }, { desc: "Siempre", pts: 4, sig: 16 }
    ]},
    16: { texto: "¿Sientes que debes cumplir con las expectativas académicas de tu familia?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: 17 }, { desc: "Rara vez", pts: 1, sig: 17 }, { desc: "A veces", pts: 2, sig: 17 }, { desc: "Frecuentemente", pts: 3, sig: 17 }, { desc: "Siempre", pts: 4, sig: 17 }
    ]},
    17: { texto: "¿Te comparas constantemente con el rendimiento de tus compañeros?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: 18 }, { desc: "Rara vez", pts: 1, sig: 18 }, { desc: "A veces", pts: 2, sig: 18 }, { desc: "Frecuentemente", pts: 3, sig: 18 }, { desc: "Siempre", pts: 4, sig: 18 }
    ]},
    18: { texto: "¿Temes decepcionar a las personas importantes en tu vida?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: 19 }, { desc: "Rara vez", pts: 1, sig: 19 }, { desc: "A veces", pts: 2, sig: 19 }, { desc: "Frecuentemente", pts: 3, sig: 19 }, { desc: "Siempre", pts: 4, sig: 19 }
    ]},
    19: { texto: "¿Sientes presión por mantener una imagen de éxito académico?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: 20 }, { desc: "Rara vez", pts: 1, sig: 20 }, { desc: "A veces", pts: 2, sig: 20 }, { desc: "Frecuentemente", pts: 3, sig: 20 }, { desc: "Siempre", pts: 4, sig: 20 }
    ]},
    20: { texto: "¿Te preocupa lo que otros piensen si obtienes bajas calificaciones?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: 21 }, { desc: "Rara vez", pts: 1, sig: 21 }, { desc: "A veces", pts: 2, sig: 21 }, { desc: "Frecuentemente", pts: 3, sig: 21 }, { desc: "Siempre", pts: 4, sig: 21 }
    ]},
    21: { texto: "¿Evitas hablar de tus dificultades académicas por miedo al juicio social?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: 22 }, { desc: "Rara vez", pts: 1, sig: 22 }, { desc: "A veces", pts: 2, sig: 22 }, { desc: "Frecuentemente", pts: 3, sig: 22 }, { desc: "Siempre", pts: 4, sig: 22 }
    ]},
    22: { texto: "¿Sientes que la competencia con tus compañeros incrementa tu ansiedad?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: 23 }, { desc: "Rara vez", pts: 1, sig: 23 }, { desc: "A veces", pts: 2, sig: 23 }, { desc: "Frecuentemente", pts: 3, sig: 23 }, { desc: "Siempre", pts: 4, sig: 23 }
    ]},
    23: { texto: "¿Te resulta difícil pedir ayuda por temor a parecer incapaz?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: 24 }, { desc: "Rara vez", pts: 1, sig: 24 }, { desc: "A veces", pts: 2, sig: 24 }, { desc: "Frecuentemente", pts: 3, sig: 24 }, { desc: "Siempre", pts: 4, sig: 24 }
    ]},
    24: { texto: "¿Has dejado de participar en actividades sociales por priorizar el estudio?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: 25 }, { desc: "Rara vez", pts: 1, sig: 25 }, { desc: "A veces", pts: 2, sig: 25 }, { desc: "Frecuentemente", pts: 3, sig: 25 }, { desc: "Siempre", pts: 4, sig: 25 }
    ]},
    25: { texto: "¿Sientes que debes ser perfecto para ser aceptado?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: 26 }, { desc: "Rara vez", pts: 1, sig: 26 }, { desc: "A veces", pts: 2, sig: 26 }, { desc: "Frecuentemente", pts: 3, sig: 26 }, { desc: "Siempre", pts: 4, sig: 26 }
    ]},
    26: { texto: "¿Te afecta emocionalmente ver los logros académicos de otros estudiantes?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: 27 }, { desc: "Rara vez", pts: 1, sig: 27 }, { desc: "A veces", pts: 2, sig: 27 }, { desc: "Frecuentemente", pts: 3, sig: 27 }, { desc: "Siempre", pts: 4, sig: 27 }
    ]},
    27: { texto: "¿Sientes tensión muscular cuando piensas en tus responsabilidades escolares?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: 28 }, { desc: "Rara vez", pts: 1, sig: 28 }, { desc: "A veces", pts: 2, sig: 28 }, { desc: "Frecuentemente", pts: 3, sig: 28 }, { desc: "Siempre", pts: 4, sig: 28 }
    ]},
    28: { texto: "¿Sientes que no puedes permitirte fallar frente a los demás?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: 29 }, { desc: "Rara vez", pts: 1, sig: 29 }, { desc: "A veces", pts: 2, sig: 29 }, { desc: "Frecuentemente", pts: 3, sig: 29 }, { desc: "Siempre", pts: 4, sig: 29 }
    ]},
    29: { texto: "¿Te preocupa no cumplir con el estándar académico de tu institución?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: 30 }, { desc: "Rara vez", pts: 1, sig: 30 }, { desc: "A veces", pts: 2, sig: 30 }, { desc: "Frecuentemente", pts: 3, sig: 30 }, { desc: "Siempre", pts: 4, sig: 30 }
    ]},
    30: { texto: "¿Has sentido que tu valor personal depende de la aprobación externa?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: 31 }, { desc: "Rara vez", pts: 1, sig: 31 }, { desc: "A veces", pts: 2, sig: 31 }, { desc: "Frecuentemente", pts: 3, sig: 31 }, { desc: "Siempre", pts: 4, sig: 31 }
    ]},
    31: { texto: "¿Sientes que tu valor como persona depende de tus logros académicos?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: 32 }, { desc: "Rara vez", pts: 1, sig: 32 }, { desc: "A veces", pts: 2, sig: 32 }, { desc: "Frecuentemente", pts: 3, sig: 32 }, { desc: "Siempre", pts: 4, sig: 32 }
    ]},
    32: { texto: "¿Te exiges más de lo que razonablemente puedes cumplir?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: 33 }, { desc: "Rara vez", pts: 1, sig: 33 }, { desc: "A veces", pts: 2, sig: 33 }, { desc: "Frecuentemente", pts: 3, sig: 33 }, { desc: "Siempre", pts: 4, sig: 33 }
    ]},
    33: { texto: "¿Te cuesta sentir satisfacción incluso cuando obtienes buenos resultados?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: 34 }, { desc: "Rara vez", pts: 1, sig: 34 }, { desc: "A veces", pts: 2, sig: 34 }, { desc: "Frecuentemente", pts: 3, sig: 34 }, { desc: "Siempre", pts: 4, sig: 34 }
    ]},
    34: { texto: "¿Piensas que un fracaso académico define tu futuro?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: 35 }, { desc: "Rara vez", pts: 1, sig: 35 }, { desc: "A veces", pts: 2, sig: 35 }, { desc: "Frecuentemente", pts: 3, sig: 35 }, { desc: "Siempre", pts: 4, sig: 35 }
    ]},
    35: { texto: "¿Tiendes a pensar que un error arruinará tu carrera profesional?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: 36 }, { desc: "Rara vez", pts: 1, sig: 36 }, { desc: "A veces", pts: 2, sig: 36 }, { desc: "Frecuentemente", pts: 3, sig: 36 }, { desc: "Siempre", pts: 4, sig: 36 }
    ]},
    36: { texto: "¿Sientes miedo constante a no alcanzar tus metas personales?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: 37 }, { desc: "Rara vez", pts: 1, sig: 37 }, { desc: "A veces", pts: 2, sig: 37 }, { desc: "Frecuentemente", pts: 3, sig: 37 }, { desc: "Siempre", pts: 4, sig: 37 }
    ]},
    37: { texto: "¿Te resulta difícil establecer metas académicas realistas?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: 38 }, { desc: "Rara vez", pts: 1, sig: 38 }, { desc: "A veces", pts: 2, sig: 38 }, { desc: "Frecuentemente", pts: 3, sig: 38 }, { desc: "Siempre", pts: 4, sig: 38 }
    ]},
    38: { texto: "¿Te sientes frustrado cuando no cumples tus propias expectativas?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: 39 }, { desc: "Rara vez", pts: 1, sig: 39 }, { desc: "A veces", pts: 2, sig: 39 }, { desc: "Frecuentemente", pts: 3, sig: 39 }, { desc: "Siempre", pts: 4, sig: 39 }
    ]},
    39: { texto: "¿Experimentas pensamientos negativos recurrentes sobre tu desempeño?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: 40 }, { desc: "Rara vez", pts: 1, sig: 40 }, { desc: "A veces", pts: 2, sig: 40 }, { desc: "Frecuentemente", pts: 3, sig: 40 }, { desc: "Siempre", pts: 4, sig: 40 }
    ]},
    40: { texto: "¿Sientes que nunca es suficiente el esfuerzo que realizas?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: 41 }, { desc: "Rara vez", pts: 1, sig: 41 }, { desc: "A veces", pts: 2, sig: 41 }, { desc: "Frecuentemente", pts: 3, sig: 41 }, { desc: "Siempre", pts: 4, sig: 41 }
    ]},
    41: { texto: "¿Te preocupa excesivamente tu futuro profesional?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: 42 }, { desc: "Rara vez", pts: 1, sig: 42 }, { desc: "A veces", pts: 2, sig: 42 }, { desc: "Frecuentemente", pts: 3, sig: 42 }, { desc: "Siempre", pts: 4, sig: 42 }
    ]},
    42: { texto: "¿Sientes que debes sacrificar tu bienestar para alcanzar tus metas?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: 43 }, { desc: "Rara vez", pts: 1, sig: 43 }, { desc: "A veces", pts: 2, sig: 43 }, { desc: "Frecuentemente", pts: 3, sig: 43 }, { desc: "Siempre", pts: 4, sig: 43 }
    ]},
    43: { texto: "¿Te cuesta disfrutar tus logros académicos?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: 44 }, { desc: "Rara vez", pts: 1, sig: 44 }, { desc: "A veces", pts: 2, sig: 44 }, { desc: "Frecuentemente", pts: 3, sig: 44 }, { desc: "Siempre", pts: 4, sig: 44 }
    ]},
    44: { texto: "¿Sientes que el fracaso no es una opción en tu vida?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: 45 }, { desc: "Rara vez", pts: 1, sig: 45 }, { desc: "A veces", pts: 2, sig: 45 }, { desc: "Frecuentemente", pts: 3, sig: 45 }, { desc: "Siempre", pts: 4, sig: 45 }
    ]},
    45: { texto: "¿Tiendes a anticipar resultados negativos incluso antes de intentarlo?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: 46 }, { desc: "Rara vez", pts: 1, sig: 46 }, { desc: "A veces", pts: 2, sig: 46 }, { desc: "Frecuentemente", pts: 3, sig: 46 }, { desc: "Siempre", pts: 4, sig: 46 }
    ]},
    46: { texto: "¿Pospones tareas importantes debido a la ansiedad que te generan?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: 47 }, { desc: "Rara vez", pts: 1, sig: 47 }, { desc: "A veces", pts: 2, sig: 47 }, { desc: "Frecuentemente", pts: 3, sig: 47 }, { desc: "Siempre", pts: 4, sig: 47 }
    ]},
    47: { texto: "¿Te cuesta concentrarte al estudiar por pensamientos intrusivos?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: 48 }, { desc: "Rara vez", pts: 1, sig: 48 }, { desc: "A veces", pts: 2, sig: 48 }, { desc: "Frecuentemente", pts: 3, sig: 48 }, { desc: "Siempre", pts: 4, sig: 48 }
    ]},
    48: { texto: "¿Has experimentado bloqueos mentales durante exámenes?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: 49 }, { desc: "Rara vez", pts: 1, sig: 49 }, { desc: "A veces", pts: 2, sig: 49 }, { desc: "Frecuentemente", pts: 3, sig: 49 }, { desc: "Siempre", pts: 4, sig: 49 }
    ]},
    49: { texto: "¿Evitas iniciar proyectos académicos por miedo al fracaso?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: 50 }, { desc: "Rara vez", pts: 1, sig: 50 }, { desc: "A veces", pts: 2, sig: 50 }, { desc: "Frecuentemente", pts: 3, sig: 50 }, { desc: "Siempre", pts: 4, sig: 50 }
    ]},
    50: { texto: "¿Te resulta difícil organizar tu tiempo de estudio?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: 51 }, { desc: "Rara vez", pts: 1, sig: 51 }, { desc: "A veces", pts: 2, sig: 51 }, { desc: "Frecuentemente", pts: 3, sig: 51 }, { desc: "Siempre", pts: 4, sig: 51 }
    ]},
    51: { texto: "¿Sientes tensión muscular cuando piensas en tus responsabilidades escolares?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: 52 }, { desc: "Rara vez", pts: 1, sig: 52 }, { desc: "A veces", pts: 2, sig: 52 }, { desc: "Frecuentemente", pts: 3, sig: 52 }, { desc: "Siempre", pts: 4, sig: 52 }
    ]},
    52: { texto: "¿Has considerado abandonar alguna materia debido al estrés?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: 53 }, { desc: "Rara vez", pts: 1, sig: 53 }, { desc: "A veces", pts: 2, sig: 53 }, { desc: "Frecuentemente", pts: 3, sig: 53 }, { desc: "Siempre", pts: 4, sig: 53 }
    ]},
    53: { texto: "¿Tu rendimiento académico ha disminuido por motivos emocionales?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: 54 }, { desc: "Rara vez", pts: 1, sig: 54 }, { desc: "A veces", pts: 2, sig: 54 }, { desc: "Frecuentemente", pts: 3, sig: 54 }, { desc: "Siempre", pts: 4, sig: 54 }
    ]},
    54: { texto: "¿Te sientes abrumado al enfrentar múltiples tareas simultáneamente?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: 55 }, { desc: "Rara vez", pts: 1, sig: 55 }, { desc: "A veces", pts: 2, sig: 55 }, { desc: "Frecuentemente", pts: 3, sig: 55 }, { desc: "Siempre", pts: 4, sig: 55 }
    ]},
    55: { texto: "¿Has dejado de realizar actividades que disfrutas por estudiar?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: 56 }, { desc: "Rara vez", pts: 1, sig: 56 }, { desc: "A veces", pts: 2, sig: 56 }, { desc: "Frecuentemente", pts: 3, sig: 56 }, { desc: "Siempre", pts: 4, sig: 56 }
    ]},
    56: { texto: "¿Sientes que no tienes control sobre tus responsabilidades académicas?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: 57 }, { desc: "Rara vez", pts: 1, sig: 57 }, { desc: "A veces", pts: 2, sig: 57 }, { desc: "Frecuentemente", pts: 3, sig: 57 }, { desc: "Siempre", pts: 4, sig: 57 }
    ]},
    57: { texto: "¿Te resulta difícil tomar decisiones académicas importantes?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: 58 }, { desc: "Rara vez", pts: 1, sig: 58 }, { desc: "A veces", pts: 2, sig: 58 }, { desc: "Frecuentemente", pts: 3, sig: 58 }, { desc: "Siempre", pts: 4, sig: 58 }
    ]},
    58: { texto: "¿Has descuidado tu bienestar personal por cumplir con tus estudios?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: 59 }, { desc: "Rara vez", pts: 1, sig: 59 }, { desc: "A veces", pts: 2, sig: 59 }, { desc: "Frecuentemente", pts: 3, sig: 59 }, { desc: "Siempre", pts: 4, sig: 59 }
    ]},
    59: { texto: "¿Sientes ansiedad intensa antes de presentar un examen?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: 60 }, { desc: "Rara vez", pts: 1, sig: 60 }, { desc: "A veces", pts: 2, sig: 60 }, { desc: "Frecuentemente", pts: 3, sig: 60 }, { desc: "Siempre", pts: 4, sig: 60 }
    ]},
    60: { texto: "¿Consideras que el estrés académico afecta significativamente tu vida diaria?", bloque: 1, filtro: true, opciones: [
        { desc: "Nunca", pts: 0, sig: null }, { desc: "Rara vez", pts: 1, sig: null }, { desc: "A veces", pts: 2, sig: null }, { desc: "Frecuentemente", pts: 3, sig: null }, { desc: "Siempre", pts: 4, sig: null }
        ]
    } 
};
