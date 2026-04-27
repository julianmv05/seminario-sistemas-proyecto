let preguntaActualId = 1;
let ramaSeleccionada = "";
let respuestasUsuario = []; 

let scores = {
    gestion: 0,
    familiar: 0,
    comparacion: 0,
    concentracion: 0,
    regulacion: 0,
    dependencia: 0,
    frustracion: 0
};

function iniciarTest() {
    console.log("Mind Balance: Sistema de Diagnóstico Activo");
    if (typeof bancoPreguntas !== 'undefined') {
        fadeIn(() => renderizarPregunta(1));
    } else {
        mostrarError("Error: Base de datos de preguntas no detectada.");
    }
}

function renderizarPregunta(id) {
    const pregunta = bancoPreguntas[id];
    if (!pregunta) return finalizarTest();

    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');

    fadeOut(() => {
        questionText.innerText = pregunta.texto;
        optionsContainer.innerHTML = '';

        pregunta.opciones.forEach((opt, index) => {
            const btn = document.createElement('button');
            btn.innerHTML = `
                <span class="option-index">${String.fromCharCode(65 + index)}</span>
                <span class="option-text">${opt.desc}</span>
            `;
            btn.className = "option-btn";
            btn.onclick = () => seleccionarOpcion(btn, id, opt);
            optionsContainer.appendChild(btn);
        });

        actualizarProgreso(id);
        fadeIn();
    });
}

function seleccionarOpcion(btn, idActual, opcion) {
    document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    setTimeout(() => {
        procesarRespuesta(idActual, opcion);
    }, 250);
}

function procesarRespuesta(idActual, opcion) {
    respuestasUsuario.push({
        preguntaId: idActual,
        texto: opcion.desc,
        pts: opcion.pts,
        rama: ramaSeleccionada
    });

    if (idActual === 1) {
        const mapaRamas = {
            100: "gestion",
            200: "familiar",
            300: "comparacion",
            400: "concentracion",
            50: "regulacion"
        };

        ramaSeleccionada = mapaRamas[opcion.sig] || ramaSeleccionada;

        if (opcion.sig === 60) {
            ramaSeleccionada = opcion.desc.toLowerCase().includes("dependo") 
                ? "dependencia" : "frustracion";
        }
    }

    if (ramaSeleccionada && scores[ramaSeleccionada] !== undefined) {
        scores[ramaSeleccionada] += opcion.pts;
    }

    if (opcion.sig === 'checkFiltro') {
        finalizarTest();
    } else {
        preguntaActualId = opcion.sig;
        renderizarPregunta(preguntaActualId);
    }
}

function generarFeedbackPersonalizado() {
    let feedback = { insight: "", explicacion: "", tips: [] };

    const usaDistraccion = respuestasUsuario.some(r => 
        r.texto.toLowerCase().match(/redes|celular|música|videos|distra/));
    
    const evita = respuestasUsuario.some(r => 
        r.texto.toLowerCase().match(/pospongo|dejo|evito|abandono|mañana/));

    const frustracion = respuestasUsuario.some(r => 
        r.texto.toLowerCase().match(/frustro|errores|bloqueo|mal/));

    if (usaDistraccion) {
        feedback.insight += "Detectamos que cuando la carga académica aumenta, tu mente busca 'válvulas de escape' en distractores externos para aliviar la tensión inmediata. ";
    }
    if (evita) {
        feedback.insight += "Existe una tendencia a postergar tareas pesadas, lo cual es una respuesta natural de protección ante el estrés, pero que acumula presión a largo plazo. ";
    }
    if (frustracion) {
        feedback.insight += "Los errores o la falta de comprensión técnica suelen detener tu flujo de trabajo, generando un ciclo de frustración que afecta tu motivación.";
    }

    feedback.explicacion = "Esta conducta no es falta de capacidad, sino una gestión emocional del aprendizaje. Tu cerebro prioriza eliminar el malestar actual sobre el beneficio futuro de terminar la tarea. Al entender esto, podemos cambiar 'esfuerzo' por 'estrategia'.";

    if (usaDistraccion) feedback.tips.push("Prueba el modo 'No molestar' y bloques Pomodoro de solo 20 min.");
    if (evita) feedback.tips.push("Usa la técnica de 'los 5 minutos': comprométete a trabajar solo 5 min y luego decide si sigues.");
    if (frustracion) feedback.tips.push("Divide los problemas técnicos en sub-pasos ridículamente pequeños para evitar el bloqueo.");
    
    if (feedback.tips.length === 0) feedback.tips.push("Mantén un horario regular y prioriza el descanso nocturno.");

    return feedback;
}

function finalizarTest() {
    const quizWrapper = document.getElementById('quiz-wrapper');
    const resDiv = document.getElementById('resultado-test');

    quizWrapper.style.display = 'none';
    resDiv.style.display = 'block';

    const diag = diagnosticosFinales[ramaSeleccionada];
    const puntosFinales = scores[ramaSeleccionada];
    const feedback = generarFeedbackPersonalizado();

    resDiv.innerHTML = `
        <div class="card">
            <h2>${diag.titulo}</h2>
            <p class="desc">${diag.descripcion}</p>

            <div class="insight-box">
                <h3>Análisis de tu patrón:</h3>
                <p>${feedback.insight || "Tu perfil muestra una respuesta estable, pero con áreas de oportunidad en la organización."}</p>
            </div>

            <div class="grafico-box">
                <canvas id="graficoResultados"></canvas>
            </div>

            <div class="explicacion-box">
                <h3>¿Por qué sucede?</h3>
                <p>${feedback.explicacion}</p>
            </div>

            <div class="tips-box">
                <h3>Plan de Acción:</h3>
                <ul>${feedback.tips.map(t => `<li>${t}</li>`).join('')}</ul>
            </div>

            <div class="score-box">
                Intensidad Detectada: <b>${puntosFinales} puntos</b> en la escala de ${ramaSeleccionada}
            </div>

            <button onclick="location.reload()" class="btn-restart">Realizar otro diagnóstico</button>
        </div>
    `;

    generarGrafico();
}

function generarGrafico() {
    const ctx = document.getElementById('graficoResultados').getContext('2d');
    const normalizar = (val, factor) => (val * factor) < 10 ? 15 : (val * factor);

    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Gestión', 'Familiar', 'Social', 'Enfoque', 'Hábitos'],
            datasets: [{
                data: [
                    normalizar(scores.gestion, 6.25),
                    normalizar(scores.familiar, 6.25),
                    normalizar(scores.comparacion, 6.25),
                    normalizar(scores.concentracion, 6.25),
                    normalizar(scores.regulacion, 12.5)
                ],
                backgroundColor: 'rgba(74, 144, 226, 0.2)',
                borderColor: '#4A90E2',
                pointBackgroundColor: '#4A90E2',
                borderWidth: 3
            }]
        },
        options: {
            scales: { r: { beginAtZero: true, max: 100, ticks: { display: false } } },
            plugins: { legend: { display: false } }
        }
    });
}

function actualizarProgreso(id) {
    const bar = document.getElementById('progress-bar');
    if (!bar) return;
    let porcentaje = id === 1 ? 10 : (id > 1 && id < 50 ? 40 : (id >= 50 && id < 100 ? 70 : 100));
    bar.style.width = porcentaje + "%";
}

function fadeOut(callback) {
    const el = document.getElementById('quiz-wrapper');
    el.style.opacity = 0;
    setTimeout(callback, 300);
}

function fadeIn(callback) {
    const el = document.getElementById('quiz-wrapper');
    el.style.opacity = 1;
    if (callback) callback();
}

function mostrarError(msg) {
    document.getElementById('question-text').innerText = msg;
}

window.onload = iniciarTest;
