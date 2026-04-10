let score = 0;
let respuestasFiltroB1 = [];

function iniciarTest() {
    // Verificamos que las preguntas cargaron desde preguntas.js
    if (typeof bancoPreguntas !== 'undefined') {
        renderizarPregunta(1);
    } else {
        document.getElementById('question-text').innerText = "Error: No se encontró el banco de preguntas.";
    }
}

function renderizarPregunta(id) {
    const pregunta = bancoPreguntas[id];
    
    // Si no hay más preguntas o el ID es nulo, terminamos
    if (!pregunta || id === null) {
        finalizarTest();
        return;
    }

    const optionsDiv = document.getElementById('options-container');
    document.getElementById('question-text').innerText = pregunta.texto;
    optionsDiv.innerHTML = '';

    // Crear botones para cada opción (Nunca, Rara vez, etc.)
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
    score += opcion.pts;

    // Guardamos puntos de las primeras 3 para el filtro inteligente
    if (id <= 3) {
        respuestasFiltroB1.push(opcion.pts);
    }

    let siguiente = opcion.sig;

    // Lógica de Salto Inteligente (Pregunta filtro)
    if (id === 3 && siguiente === "checkFiltro") {
        const sumaFiltro = respuestasFiltroB1.reduce((a, b) => a + b, 0);
        // Si el usuario está muy bien físicamente (0-3 pts), saltamos al Bloque 3
        if (sumaFiltro <= 3) {
            siguiente = 31; 
        } else {
            siguiente = 4; // Continúa normal
        }
    }

    renderizarPregunta(siguiente);
}

function actualizarProgreso(id) {
    const totalPreguntas = 60;
    const porcentaje = (id / totalPreguntas) * 100;
    const bar = document.getElementById('progress-bar');
    if (bar) bar.style.width = porcentaje + "%";
}

function finalizarTest() {
    document.getElementById('quiz-wrapper').style.display = 'none';
    const resDiv = document.getElementById('resultado-test');
    resDiv.style.display = 'block';

    // 1. Cálculo de porcentajes
    const p = {
        fisico: Math.round((scores.fisico / 60) * 100),
        social: Math.round((scores.social / 60) * 100),
        metas: Math.round((scores.metas / 60) * 100),
        academico: Math.round((scores.academico / 60) * 100)
    };

    // 2. Encontrar el bloque predominante
    const maxKey = Object.keys(p).reduce((a, b) => p[a] > p[b] ? a : b);
    
    // 3. Base de Datos de Diagnósticos Inteligentes
    const diagnosticos = {
        fisico: {
            titulo: "Ansiedad con Manifestación Física",
            stats: "el 65% de los universitarios",
            mensaje: "Tu cuerpo está procesando el estrés antes que tu mente. Es común sentir que el cansancio no se va, pero no eres el único.",
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
            consejos: ["Acepta que un 80 o 90 también es éxito.", "Define metas basadas en el esfuerzo, no solo en la nota.", "Permítete fallar en algo pequeño para perderle el miedo."]
        },
        academico: {
            titulo: "Bloqueo en el Desempeño",
            stats: "el 75% de los jóvenes en periodos de exámenes",
            mensaje: "La carga te ha sobrepasado y tu cerebro ha activado un modo de 'parálisis'. Es una respuesta de defensa muy frecuente.",
            consejos: ["Usa la técnica de los 5 minutos (solo empieza la tarea 5 min).", "Limpia tu espacio de trabajo de distracciones.", "Divide el proyecto grande en micro-tareas."]
        }
    };

    const d = diagnosticos[maxKey];

    // 4. Renderizado Final
    resDiv.innerHTML = `
        <h2 class="titulo-seccion">Resultados de tu Evaluación</h2>
        
        <div style="max-width: 500px; margin: auto;">
            <canvas id="graficoResultados"></canvas>
        </div>

        <div class="diagnostico-final" style="text-align: left; padding: 25px; background: #fff; border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.05); margin-top: 20px;">
            <h3 style="color: var(--color-principal);">${d.titulo}</h3>
            <p style="font-size: 1.1em; line-height: 1.6;">
                <strong>Concluimos que:</strong> Tu principal reto actual se concentra en esta área (intensidad del ${p[maxKey]}%). 
                Debes saber que <strong>${d.stats}</strong> sufren esto mismo durante su carrera; <strong>no estás solo en este proceso</strong>.
            </p>
            
            <p style="background: #fdf2f2; padding: 15px; border-radius: 10px; border-left: 4px solid #e74c3c;">
                ${d.mensaje}
            </p>

            <h4 style="margin-top: 20px;">🚀 Plan de Acción Recomendado:</h4>
            <ul>
                ${d.consejos.map(c => `<li style="margin-bottom: 8px;">${c}</li>`).join('')}
            </ul>

            <div style="margin-top: 20px; font-size: 0.9em; color: #7f8c8d; border-top: 1px solid #eee; padding-top: 10px;">
                Tip: Pequeños cambios diarios generan grandes resultados a largo plazo.
            </div>
        </div>

        <button onclick="location.reload()" class="boton-accion" style="margin-top: 25px;">Reiniciar Evaluación</button>
    `;

    // 5. Inyectar Gráfico
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
        options: { 
            responsive: true,
            plugins: { legend: { display: false } },
            scales: { y: { beginAtZero: true, max: 100 } } 
        }
    });
}

// Arrancamos el sistema al cargar la página
window.onload = iniciarTest;
