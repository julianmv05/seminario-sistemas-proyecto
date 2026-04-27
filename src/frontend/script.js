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
    console.log("Mind Balance: Inicializando motor de grafos con multiescore...");
    if (typeof bancoPreguntas !== 'undefined') {
        renderizarPregunta(1);
    } else {
        console.error("Error: bancoPreguntas no detectado.");
        const txt = document.getElementById('question-text');
        if(txt) txt.innerText = "Error crítico: No se encontró la base de datos de preguntas.";
    }
}

function renderizarPregunta(id) {
    const pregunta = bancoPreguntas[id];
    
    if (!pregunta) {
        finalizarTest();
        return;
    }

    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');

    if (questionText && optionsContainer) {
        questionText.innerText = pregunta.texto;
        optionsContainer.innerHTML = '';

        pregunta.opciones.forEach(opt => {
            const btn = document.createElement('button');
            btn.innerText = opt.desc;
            btn.className = "boton-accion"; 
            btn.style.display = "block";
            btn.style.width = "100%";
            btn.style.marginBottom = "10px";
            
            btn.onclick = () => procesarRespuesta(id, opt);
            optionsContainer.appendChild(btn);
        });

        actualizarProgreso(id);
    }
}

function procesarRespuesta(idActual, opcion) {
    if (idActual === 1) {
        if (opcion.sig === 100) ramaSeleccionada = "gestion";
        if (opcion.sig === 200) ramaSeleccionada = "familiar";
        if (opcion.sig === 300) ramaSeleccionada = "comparacion";
        if (opcion.sig === 400) ramaSeleccionada = "concentracion";
        if (opcion.sig === 50) ramaSeleccionada = "regulacion";
        
        if (opcion.sig === 60) {
            ramaSeleccionada = (opcion.desc.toLowerCase().includes("dependo")) ? "dependencia" : "frustracion";
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
    if (bar) {
        let porcentaje = 0;
        if (id === 1) porcentaje = 10;
        else if (id >= 50 && id < 100) porcentaje = 50;
        else if (id >= 100) porcentaje = 75;
        
        bar.style.width = porcentaje + "%";
    }
}


function finalizarTest() {
    const quizWrapper = document.getElementById('quiz-wrapper');
    const resDiv = document.getElementById('resultado-test');
    
    if (quizWrapper) quizWrapper.style.display = 'none';
    if (resDiv) {
        resDiv.style.display = 'block';
        resDiv.classList.remove('resultado-oculto');
    }

    const diag = diagnosticosFinales[ramaSeleccionada];
    const puntosFinales = scores[ramaSeleccionada];

    let html = `
        <h2 class="titulo-seccion">Reporte de Estado: ${diag.titulo}</h2>
        <div style="max-width: 450px; margin: auto; padding: 20px; background: #fff; border-radius: 20px; box-shadow: 0 5px 15px rgba(0,0,0,0.05);">
            <canvas id="graficoResultados"></canvas>
        </div>
        
        <div style="margin-top: 30px; text-align: left;">
            <div style="margin-bottom: 20px; padding: 20px; background: white; border-radius: 12px; border-left: 6px solid #4A90E2; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                <p style="font-size: 1.1em; color: #333; margin-bottom: 15px;">${diag.descripcion}</p>
                <strong style="color: #4A90E2;">Plan de Acción Recomendado:</strong>
                <ul style="margin-top: 10px; color: #555;">
                    ${diag.tips.map(tip => `<li style="margin-bottom: 8px;">${tip}</li>`).join('')}
                </ul>
            </div>
        </div>

        <div style="background: #4A90E2; color: white; padding: 20px; border-radius: 15px; text-align: center;">
            <p>Intensidad detectada en <strong>${ramaSeleccionada.toUpperCase()}</strong>: ${puntosFinales} puntos</p>
        </div>
        <button onclick="location.reload()" class="boton-accion" style="margin-top: 20px; width: 100%;">Realizar otro diagnóstico</button>
    `;

    resDiv.innerHTML = html;

    const ctx = document.getElementById('graficoResultados').getContext('2d');
    
    const radarData = [
        scores.gestion * 6.25,      
        scores.familiar * 6.25, 
        scores.comparacion * 6.25, 
        scores.concentracion * 6.25,
        scores.regulacion * 12.5    
    ];

    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Gestión', 'Familiar', 'Social', 'Enfoque', 'Hábitos'],
            datasets: [{
                label: 'Perfil de Ansiedad',
                data: radarData,
                backgroundColor: 'rgba(74, 144, 226, 0.2)',
                borderColor: '#4A90E2',
                borderWidth: 2,
                pointBackgroundColor: '#4A90E2'
            }]
        },
        options: {
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100,
                    ticks: { display: false },
                    grid: { color: '#e0e0e0' }
                }
            },
            plugins: { legend: { display: false } }
        }
    });
}

window.onload = iniciarTest;
