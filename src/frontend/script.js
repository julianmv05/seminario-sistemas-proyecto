let scores = { fisico: 0, social: 0, metas: 0, academico: 0 };
let totalScore = 0;
let respuestasFiltroB1 = [];

function iniciarTest() {
    if (typeof bancoPreguntas !== 'undefined') {
        renderizarPregunta(1);
    } else {
        document.getElementById('question-text').innerText = "Error: Cargando base de datos...";
    }
}

function renderizarPregunta(id) {
    const pregunta = bancoPreguntas[id];
    if (!pregunta || id === null) {
        finalizarTest();
        return;
    }

    document.getElementById('question-text').innerText = pregunta.texto;
    const optionsDiv = document.getElementById('options-container');
    optionsDiv.innerHTML = '';

    pregunta.opciones.forEach(opt => {
        const btn = document.createElement('button');
        btn.innerText = opt.desc;
        btn.className = "boton-accion";
        btn.style.display = "block";
        btn.style.width = "100%";
        btn.style.marginBottom = "10px";
        btn.onclick = () => procesarRespuesta(id, opt);
        optionsDiv.appendChild(btn);
    });

    actualizarProgreso(id);
}

function procesarRespuesta(id, opcion) {
    // Clasificación por bloques
    if (id >= 1 && id <= 15) scores.fisico += opcion.pts;
    else if (id >= 16 && id <= 30) scores.social += opcion.pts;
    else if (id >= 31 && id <= 45) scores.metas += opcion.pts;
    else if (id >= 46 && id <= 60) scores.academico += opcion.pts;

    totalScore += opcion.pts;
    if (id <= 3) respuestasFiltroB1.push(opcion.pts);

    let siguiente = opcion.sig;
    if (id === 3 && siguiente === "checkFiltro") {
        const suma = respuestasFiltroB1.reduce((a, b) => a + b, 0);
        siguiente = (suma <= 3) ? 31 : 4;
    }
    renderizarPregunta(siguiente);
}

function actualizarProgreso(id) {
    const bar = document.getElementById('progress-bar');
    if (bar) bar.style.width = (id / 60 * 100) + "%";
}

function finalizarTest() {
    document.getElementById('quiz-wrapper').style.display = 'none';
    const resDiv = document.getElementById('resultado-test');
    resDiv.style.display = 'block';

    const p = {
        fisico: Math.round((scores.fisico / 60) * 100),
        social: Math.round((scores.social / 60) * 100),
        metas: Math.round((scores.metas / 60) * 100),
        academico: Math.round((scores.academico / 60) * 100)
    };

    const maxKey = Object.keys(p).reduce((a, b) => p[a] > p[b] ? a : b);
    
    const diagnosticos = {
        fisico: {
            titulo: "Ansiedad con Manifestación Física",
            stats: "el 65% de los universitarios",
            mensaje: "Tu cuerpo está procesando el estrés antes que tu mente. Es común sentir cansancio constante, pero no eres el único.",
            consejos: ["Prueba la relajación muscular progresiva.", "Establece una rutina de sueño sin pantallas.", "Realiza pausas activas cada 50 minutos."]
        },
        social: {
            titulo: "Presión por Entorno y Expectativas",
            stats: "8 de cada 10 estudiantes",
            mensaje: "Sientes que el peso de las expectativas ajenas es tuyo. Es normal compararse, pero tu valor no es una competencia.",
            consejos: ["Practica decir 'no' sin sentir culpa.", "Limita el tiempo en redes sociales de comparación.", "Habla con un mentor sobre tus miedos."]
        },
        metas: {
            titulo: "Autoexigencia y Perfeccionismo",
            stats: "más de la mitad de los alumnos de alto rendimiento",
            mensaje: "Tu mayor crítico eres tú mismo. El miedo al error te está frenando más que la dificultad de las materias.",
            consejos: ["Acepta que un error es aprendizaje, no fracaso.", "Define metas basadas en el esfuerzo, no solo en la nota.", "Permítete fallar en algo pequeño para perder el miedo."]
        },
        academico: {
            titulo: "Bloqueo en el Desempeño",
            stats: "el 75% de los jóvenes en periodos de exámenes",
            mensaje: "La carga te ha sobrepasado y tu cerebro ha activado un modo de 'parálisis'. Es una respuesta de defensa muy frecuente.",
            consejos: ["Usa la técnica de los 5 minutos (solo empieza la tarea 5 min).", "Limpia tu espacio de trabajo de distracciones.", "Divide proyectos grandes en micro-tareas."]
        }
    };

    const d = diagnosticos[maxKey];

    resDiv.innerHTML = `
        <h2 class="titulo-seccion">Resultados de tu Evaluación</h2>
        <div style="max-width: 500px; margin: auto;"><canvas id="graficoResultados"></canvas></div>
        <div class="diagnostico-final" style="text-align: left; padding: 25px; background: #fff; border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.05); margin-top: 20px;">
            <h3 style="color: #4e73df;">${d.titulo}</h3>
            <p><strong>Conclusión:</strong> Tu principal reto es esta área (${p[maxKey]}%). <strong>${d.stats}</strong> sufren esto mismo; <strong>no estás solo</strong>.</p>
            <p style="background: #fdf2f2; padding: 15px; border-radius: 10px; border-left: 4px solid #e74c3c;">${d.mensaje}</p>
            <h4>🚀 Plan de Acción:</h4>
            <ul>${d.consejos.map(c => `<li>${c}</li>`).join('')}</ul>
        </div>
        <button onclick="location.reload()" class="boton-accion" style="margin-top: 25px;">Reiniciar Test</button>
    `;

    const ctx = document.getElementById('graficoResultados').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Físico', 'Social', 'Metas', 'Desempeño'],
            datasets: [{
                label: '% de Intensidad',
                data: [p.fisico, p.social, p.metas, p.academico],
                backgroundColor: ['#4e73df', '#1cc88a', '#f6c23e', '#e74c3c'],
                borderRadius: 8
            }]
        },
        options: { responsive: true, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true, max: 100 } } }
    });
}

window.onload = iniciarTest;
