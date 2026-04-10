/**
 * Mind Balance - Motor Lógico de Evaluación
 * Versión: 2.5 (Diagnóstico Dinámico & Radar Chart)
 */

let scores = { fisico: 0, social: 0, metas: 0, academico: 0 };
let totalScore = 0;

// 1. INICIO DEL SISTEMA
function iniciarTest() {
    console.log("Mind Balance: Inicializando motor...");
    // Verificamos que el banco de preguntas esté disponible
    if (typeof bancoPreguntas !== 'undefined') {
        renderizarPregunta(1);
    } else {
        console.error("Error: bancoPreguntas no detectado.");
        const txt = document.getElementById('question-text');
        if(txt) txt.innerText = "Error crítico: No se encontró la base de datos de preguntas.";
    }
}

// 2. RENDERIZADO DINÁMICO
function renderizarPregunta(id) {
    const pregunta = bancoPreguntas[id];
    
    // Si la pregunta no existe o el ID es nulo, finalizamos
    if (!pregunta || id === null) {
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
            btn.className = "boton-accion"; // Asegúrate que esta clase esté en tu CSS
            btn.style.display = "block";
            btn.style.width = "100%";
            btn.style.marginBottom = "10px";
            btn.onclick = () => procesarRespuesta(id, opt);
            optionsContainer.appendChild(btn);
        });

        actualizarProgreso(id);
    }
}

// 3. PROCESAMIENTO DE RESPUESTAS
function procesarRespuesta(id, opcion) {
    // Clasificación por dimensiones (Bloques de 15 preguntas)
    if (id >= 1 && id <= 15) scores.fisico += opcion.pts;
    else if (id >= 16 && id <= 30) scores.social += opcion.pts;
    else if (id >= 31 && id <= 45) scores.metas += opcion.pts;
    else if (id >= 46 && id <= 60) scores.academico += opcion.pts;

    totalScore += opcion.pts;

    // Lógica de avance: Si es la última pregunta o sig es null, terminar.
    if (id >= 60 || opcion.sig === null || opcion.sig === undefined) {
        finalizarTest();
    } else {
        renderizarPregunta(opcion.sig);
    }
}

function actualizarProgreso(id) {
    const bar = document.getElementById('progress-bar');
    if (bar) {
        const porcentaje = Math.round((id / 60) * 100);
        bar.style.width = porcentaje + "%";
    }
}

// 4. GENERACIÓN DE REPORTE PROFESIONAL
function finalizarTest() {
    const quizWrapper = document.getElementById('quiz-wrapper');
    const resDiv = document.getElementById('resultado-test');
    
    if (quizWrapper) quizWrapper.style.display = 'none';
    if (resDiv) {
        resDiv.style.display = 'block';
        resDiv.classList.remove('resultado-oculto');
    }

    // Cálculo de porcentajes (base 60 puntos por bloque)
    const p = {
        fisico: Math.round((scores.fisico / 60) * 100),
        social: Math.round((scores.social / 60) * 100),
        metas: Math.round((scores.metas / 60) * 100),
        academico: Math.round((scores.academico / 60) * 100)
    };

    const maxDim = Object.keys(p).reduce((a, b) => p[a] > p[b] ? a : b);

    const analizarRango = (valor, dimension) => {
        if (valor <= 5) return { nivel: "Óptimo", desc: "No presentas indicadores de riesgo. Mantienes un equilibrio saludable.", accion: "Continúa con tus hábitos actuales." };
        
        const niveles = {
            fisico: [
                { min: 6, max: 35, nivel: "Leve", desc: "Tu cuerpo muestra señales iniciales de tensión.", accion: "Practica pausas activas." },
                { min: 36, max: 70, nivel: "Moderado", desc: "Activación somática evidente. Tu sistema nervioso está alerta.", accion: "Regula tus horarios de sueño y comida." },
                { min: 71, max: 100, nivel: "Crítico", desc: "Estado de agotamiento severo. Tu cuerpo pide una pausa urgente.", accion: "Prioriza el descanso y consulta médica de rutina." }
            ],
            social: [
                { min: 6, max: 35, nivel: "Bajo", desc: "Manejas bien las expectativas externas.", accion: "Sigue confiando en tu propio ritmo." },
                { min: 36, max: 70, nivel: "Elevado", desc: "La presión del entorno influye en tu ánimo.", accion: "Establece límites claros en tus compromisos." },
                { min: 71, max: 100, nivel: "Severo", desc: "El miedo al juicio ajeno está drenando tu paz.", accion: "Habla con alguien de confianza sobre esta presión." }
            ],
            metas: [
                { min: 6, max: 40, nivel: "Funcional", desc: "Ambición saludable sin miedo paralizante al error.", accion: "Mantén tu enfoque en el aprendizaje." },
                { min: 41, max: 75, nivel: "Riesgoso", desc: "Perfeccionismo que genera ansiedad de rendimiento.", accion: "Recuerda que tu valor no es una calificación." },
                { min: 76, max: 100, nivel: "Tóxico", desc: "Autoexigencia destructiva. Te castigas por cada fallo.", accion: "Permítete cometer errores; son parte del proceso." }
            ],
            academico: [
                { min: 6, max: 35, nivel: "Normal", desc: "Bloqueos típicos de temporada de exámenes.", accion: "Mejora tu organización semanal." },
                { min: 36, max: 70, nivel: "Obstructivo", desc: "El estrés interfiere con tu memoria y enfoque.", accion: "Usa el método Pomodoro para estudiar." },
                { min: 71, max: 100, nivel: "Incapacitante", desc: "Parálisis por análisis. El volumen de tareas te abruma.", accion: "Divide todo en pasos de máximo 10 minutos." }
            ]
        };
        return niveles[dimension].find(n => valor >= n.min && valor <= n.max) || niveles[dimension][0];
    };

    let html = `
        <h2 class="titulo-seccion">Reporte de Bienestar Académico</h2>
        <div style="max-width: 450px; margin: auto; padding: 20px; background: #fff; border-radius: 20px; box-shadow: 0 5px 15px rgba(0,0,0,0.05);">
            <canvas id="graficoResultados"></canvas>
        </div>
        <div style="margin-top: 30px; text-align: left;">
    `;

    Object.keys(p).forEach(key => {
        const data = analizarRango(p[key], key);
        const color = p[key] > 70 ? '#e74c3c' : (p[key] > 35 ? '#f39c12' : '#27ae60');
        html += `
            <div style="margin-bottom: 20px; padding: 20px; background: white; border-radius: 12px; border-left: 6px solid ${color}; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                <div style="display: flex; justify-content: space-between;">
                    <strong style="color: #333;">${key.toUpperCase()}</strong>
                    <span style="color: ${color}; font-weight: bold;">${data.nivel} (${p[key]}%)</span>
                </div>
                <p style="font-size: 0.95em; color: #555; margin: 10px 0;">${data.desc}</p>
                <p style="font-size: 0.9em; color: ${color}; margin: 0;"><strong>Tip:</strong> ${data.accion}</p>
            </div>
        `;
    });

    html += `
        <div style="background: #4A90E2; color: white; padding: 25px; border-radius: 15px; text-align: center; margin-top: 20px;">
            <p>Tu foco principal de atención hoy es: <strong>${maxDim.toUpperCase()}</strong>.</p>
            <p style="font-size: 0.9em; opacity: 0.9;">Recuerda que este es un ejercicio de reflexión. Si te sientes sobrepasado, busca apoyo en tu institución.</p>
        </div>
        <button onclick="location.reload()" class="boton-accion" style="margin-top: 20px; width: 100%;">Reiniciar</button>
    </div>`;

    resDiv.innerHTML = html;

    // Renderizar Gráfico
    const ctx = document.getElementById('graficoResultados').getContext('2d');
    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Físico', 'Social', 'Metas', 'Académico'],
            datasets: [{
                label: 'Nivel de Estrés',
                data: [p.fisico, p.social, p.metas, p.academico],
                backgroundColor: 'rgba(74, 144, 226, 0.2)',
                borderColor: '#4A90E2',
                borderWidth: 2
            }]
        },
        options: {
            scales: { r: { beginAtZero: true, max: 100, ticks: { display: false } } },
            plugins: { legend: { display: false } }
        }
    });
}

// ARRANQUE DEL SISTEMA
window.onload = iniciarTest;
