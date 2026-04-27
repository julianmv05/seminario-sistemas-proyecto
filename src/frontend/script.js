let preguntaActualId = 1;
let ramaSeleccionada = "";

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
    console.log("Mind Balance: Sistema iniciado");
    if (typeof bancoPreguntas !== 'undefined') {
        fadeIn(() => renderizarPregunta(1));
    } else {
        mostrarError("No se encontró la base de preguntas.");
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
    if (idActual === 1) {
        const map = {
            100: "gestion",
            200: "familiar",
            300: "comparacion",
            400: "concentracion",
            50: "regulacion"
        };

        ramaSeleccionada = map[opcion.sig] || ramaSeleccionada;

        if (opcion.sig === 60) {
            ramaSeleccionada = opcion.desc.toLowerCase().includes("dependo")
                ? "dependencia"
                : "frustracion";
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


function actualizarProgreso(id) {
    const bar = document.getElementById('progress-bar');
    if (!bar) return;

    let porcentaje = Math.min((id / 400) * 100, 100);
    bar.style.width = porcentaje + "%";
}


function finalizarTest() {
    const quizWrapper = document.getElementById('quiz-wrapper');
    const resDiv = document.getElementById('resultado-test');

    quizWrapper.style.display = 'none';
    resDiv.style.display = 'block';

    const diag = diagnosticosFinales[ramaSeleccionada];
    const puntosFinales = scores[ramaSeleccionada];

    resDiv.innerHTML = `
        <div class="card">
            <h2>${diag.titulo}</h2>
            <p class="desc">${diag.descripcion}</p>

            <div class="grafico-box">
                <canvas id="graficoResultados"></canvas>
            </div>

            <div class="tips">
                <h3>Plan de acción</h3>
                <ul>
                    ${diag.tips.map(t => `<li>${t}</li>`).join('')}
                </ul>
            </div>

            <div class="score-box">
                Intensidad en <b>${ramaSeleccionada.toUpperCase()}</b>: ${puntosFinales}
            </div>

            <button onclick="location.reload()" class="btn-restart">
                Repetir diagnóstico
            </button>
        </div>
    `;

    generarGrafico();
}


function generarGrafico() {
    const ctx = document.getElementById('graficoResultados').getContext('2d');

    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Gestión', 'Familiar', 'Social', 'Enfoque', 'Hábitos'],
            datasets: [{
                data: [
                    scores.gestion * 6.25,
                    scores.familiar * 6.25,
                    scores.comparacion * 6.25,
                    scores.concentracion * 6.25,
                    scores.regulacion * 12.5
                ],
                backgroundColor: 'rgba(74,144,226,0.15)',
                borderColor: '#4A90E2',
                pointBackgroundColor: '#4A90E2'
            }]
        },
        options: {
            plugins: { legend: { display: false } },
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100,
                    ticks: { display: false }
                }
            }
        }
    });
}


function fadeOut(callback) {
    const el = document.getElementById('quiz-wrapper');
    el.style.opacity = 0;
    setTimeout(callback, 200);
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
