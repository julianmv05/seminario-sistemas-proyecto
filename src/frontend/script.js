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

    // 1. Calcular porcentajes por bloque (Máximo 60 puntos por bloque)
    const porcFisico = Math.round((scores.fisico / 60) * 100);
    const porcSocial = Math.round((scores.social / 60) * 100);
    const porcMetas = Math.round((scores.metas / 60) * 100);
    const porcAcademico = Math.round((scores.academico / 60) * 100);

    // 2. Identificar el problema principal
    const dimensiones = [
        { nombre: 'Ansiedad Física', valor: porcFisico, causa: "reacciones fisiológicas al estrés" },
        { nombre: 'Presión Social', valor: porcSocial, causa: "expectativas externas y comparación" },
        { nombre: 'Metas Personales', valor: porcMetas, causa: "autoexigencia y perfeccionismo" },
        { nombre: 'Bloqueo Académico', valor: porcAcademico, causa: "dificultad en el desempeño directo" }
    ];
    const principal = dimensiones.reduce((prev, current) => (prev.valor > current.valor) ? prev : current);

    // 3. Renderizar la estructura
    resDiv.innerHTML = `
        <h2 class="titulo-seccion">Análisis Profesional de Resultados</h2>
        <p style="text-align: center; color: #666;">Basado en tus respuestas, este es tu perfil de bienestar actual:</p>
        
        <div style="width: 100%; max-width: 500px; margin: auto;">
            <canvas id="graficoResultados"></canvas>
        </div>

        <div class="contenedor-diagnostico" style="margin-top: 30px; padding: 20px; background: white; border-radius: 15px; border-left: 5px solid var(--color-principal); shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <h3>Conclusión del Análisis:</h3>
            <p>Tu principal foco de atención es <strong>${principal.nombre}</strong> con un <strong>${principal.valor}%</strong> de intensidad.</p>
            
            <p><strong>No estás solo:</strong> Sabías que aproximadamente el 70% de los estudiantes universitarios experimentan síntomas similares de ${principal.causa} en algún punto de su carrera? Lo que sientes es una respuesta natural del cuerpo ante la presión académica.</p>
            
            <div style="background: #f0f7ff; padding: 15px; border-radius: 10px; margin: 15px 0;">
                <h4>🎯 Recomendaciones para ti:</h4>
                <ul id="lista-consejos">
                    ${obtenerConsejos(principal.nombre)}
                </ul>
            </div>
            
            <p>Recuerda que este diagnóstico es una guía. Trabajar en esto hoy evitará que el agotamiento (burnout) afecte tu futuro profesional. ¡Tú tienes el control!</p>
        </div>
        
        <button onclick="location.reload()" class="boton-accion" style="margin-top: 20px;">Realizar evaluación de nuevo</button>
    `;

    // 4. Crear el gráfico con Chart.js
    const ctx = document.getElementById('graficoResultados').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Físico', 'Social', 'Metas', 'Académico'],
            datasets: [{
                label: '% de Intensidad',
                data: [porcFisico, porcSocial, porcMetas, porcAcademico],
                backgroundColor: ['#4A90E2', '#50E3C2', '#F5A623', '#D0021B'],
                borderRadius: 5
            }]
        },
        options: { scales: { y: { beginAtZero: true, max: 100 } } }
    });
}

function obtenerConsejos(tipo) {
    const consejos = {
        'Ansiedad Física': "<li>Practica la respiración 4-7-8 antes de dormir.</li><li>Reduce la cafeína después de las 4 PM.</li><li>Realiza estiramientos ligeros cada 2 horas de estudio.</li>",
        'Presión Social': "<li>Aprende a decir 'no' a compromisos que saturen tu agenda.</li><li>Evita revisar redes sociales donde te compares con otros.</li><li>Habla de tus retos con amigos de confianza; verás que ellos sienten lo mismo.</li>",
        'Metas Personales': "<li>Divide tus grandes metas en pequeñas tareas diarias.</li><li>Acepta que un error es una oportunidad de aprendizaje, no un fracaso total.</li><li>Celebra tus pequeños logros, no solo la calificación final.</li>",
        'Bloqueo Académico': "<li>Usa la técnica Pomodoro (25 min estudio / 5 min descanso).</li><li>Organiza tu espacio de trabajo para evitar distracciones.</li><li>Si te bloqueas, levántate y camina 10 minutos para resetear tu cerebro.</li>"
    };
    return consejos[tipo];
}

// Arrancamos el sistema al cargar la página
window.onload = iniciarTest;
