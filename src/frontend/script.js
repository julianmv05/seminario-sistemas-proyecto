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
        feedback.insight += "Detectamos algo importante en tus respuestas: cuando las cosas se ponen pesadas, tu mente busca un pequeño refugio en las distracciones. No te culpes por eso; no es falta de voluntad, es simplemente tu cerebro intentando bajarle el volumen al estrés para que no te abrume tanto. ";
    }
    if (evita) {
        feedback.insight += "Noto que a veces prefieres dejar las cosas para después. Y te entiendo, no es flojera; es que esa tarea se siente como una montaña tan alta que dar el primer paso da un poco de vértigo. Tu mente está tratando de protegerte de esa sensación de incomodidad. ";
    }
    if (frustracion) {
        feedback.insight += "Se nota que te exiges mucho y que, cuando algo no sale a la primera, el golpe se siente fuerte. Esa frustración nace de tus ganas de hacer las cosas bien, pero a veces termina convirtiéndose en una piedra en el camino que te quita las ganas de seguir intentándolo.";
    }

    feedback.explicacion = "Lo primero que quiero decirte es que está bien no estar al cien por ciento todo el tiempo. Lo que estás sintiendo tiene una explicación lógica: tu cerebro está diseñado para buscar seguridad, y cuando percibe que algo es difícil o incierto, intenta alejarte de ahí. no necesitas 'echarle más ganas' ni ser más duro contigo mismo. Al contrario, necesitas ser un poco más amable con tu proceso. El problema no es tu capacidad —que la tienes y de sobra—, sino que estás intentando cargar todo el peso de un solo golpe. Vamos a bajar esa carga juntos.'.";

    if (usaDistraccion) feedback.tips.push("En lugar de pelear contra el celular, haz un trato contigo: 'Voy a avanzar solo 20 minutos y luego me regalo 5 minutos de descanso total'. Verás que es más fácil cuando sabes que el descanso sí va a llegar.");
    if (evita) feedback.tips.push("Aplica la regla de la 'puerta abierta': solo siéntate frente a la tarea 5 minutos. Si después de eso quieres parar, hazlo. Casi siempre, lo más difícil es simplemente empezar.");
    if (frustracion) feedback.tips.push("Cuando te atores con algo técnico, respira y divídelo. No intentes resolver el código completo; hoy solo resuelve una línea. Los pequeños pasos también te llevan a la meta y cansan mucho menos.");
    
    if (feedback.tips.length === 0) feedback.tips.push("No olvides que eres mucho más que tus pendientes o tus calificaciones. Tómate un momento hoy para hacer algo que te guste, solo porque sí. Te lo mereces.");

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
