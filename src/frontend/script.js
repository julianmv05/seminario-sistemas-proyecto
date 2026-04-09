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
    resDiv.className = "seccion-blanca"; // Para que mantenga el estilo
    resDiv.style.display = 'block';

    let diagnostico = "";
    if (score <= 60) {
        diagnostico = "🌱 Nivel Bajo: Tu equilibrio emocional es sólido. ¡Sigue así!";
    } else if (score <= 150) {
        diagnostico = "⚠️ Nivel Moderado: Experimentas estrés académico. Considera técnicas de relajación.";
    } else {
        diagnostico = "🚨 Nivel Alto: Tu bienestar está muy afectado. Te recomendamos buscar apoyo profesional.";
    }

    resDiv.innerHTML = `
        <h2 class='titulo-seccion'>Resultado Final</h2>
        <div style='background: #f0f4f8; padding: 20px; border-radius: 10px; text-align: center;'>
            <h3 style='color: var(--color-principal);'>${diagnostico}</h3>
            <p>Obtuviste un puntaje de: <strong>${score} / 240</strong></p>
        </div>
        <br>
        <button onclick="location.reload()" class="boton-accion">Reiniciar Test</button>
        <a href="index.html" class="boton-accion" style="background: gray; text-decoration: none; display: inline-block; margin-top: 10px;">Volver al Inicio</a>
    `;
}

// Arrancamos el sistema al cargar la página
window.onload = iniciarTest;
