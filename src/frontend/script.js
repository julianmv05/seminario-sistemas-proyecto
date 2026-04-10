function finalizarTest() {
    // 1. Limpieza de interfaz
    const quizWrapper = document.getElementById('quiz-wrapper');
    if (quizWrapper) quizWrapper.style.display = 'none';
    
    const resDiv = document.getElementById('resultado-test');
    if (!resDiv) {
        console.error("No se encontró el contenedor de resultados");
        return;
    }
    resDiv.style.display = 'block'; 

    // 2. Cálculo de porcentajes
    const p = {
        fisico: Math.round((scores.fisico / 60) * 100),
        social: Math.round((scores.social / 60) * 100),
        metas: Math.round((scores.metas / 60) * 100),
        academico: Math.round((scores.academico / 60) * 100)
    };

    // 3. Encontrar la dimensión crítica para personalizar el mensaje final
    const maxDimension = Object.keys(p).reduce((a, b) => p[a] > p[b] ? a : b);

    const analizarRango = (valor, dimension) => {
        if (valor === 0) return { nivel: "Saludable", desc: "No presentas indicadores de riesgo en esta área.", accion: "Sigue manteniendo este equilibrio." };
        
        const niveles = {
            fisico: [
                { min: 1, max: 35, nivel: "Leve", desc: "Tu cuerpo muestra señales iniciales de tensión. Son avisos preventivos que aún puedes gestionar con descanso.", accion: "Practica pausas activas de 5 minutos." },
                { min: 36, max: 70, nivel: "Moderado", desc: "Hay una activación somática evidente. Tu sistema nervioso está en alerta constante, afectando tu sueño y energía.", accion: "Implementa técnicas de respiración profunda y regula tus horarios de comida." },
                { min: 71, max: 100, nivel: "Crítico", desc: "Tu cuerpo está en un estado de agotamiento severo. La somatización del estrés es alta y requiere atención inmediata.", accion: "Prioriza el descanso absoluto y considera una revisión médica general." }
            ],
            social: [
                { min: 1, max: 35, nivel: "Bajo", desc: "Manejas bien las expectativas externas, aunque ocasionalmente te comparas con otros.", accion: "Sigue validando tus propios logros." },
                { min: 36, max: 70, nivel: "Elevado", desc: "La presión de tu entorno empieza a dictar tu estado de ánimo. Sientes que debes 'cumplir' para ser aceptado.", accion: "Establece límites: no tienes que decir 'sí' a todo lo social." },
                { min: 71, max: 100, nivel: "Severo", desc: "Vives para las expectativas ajenas. El miedo al juicio social está asfixiando tu identidad.", accion: "Busca hablar con un mentor o psicólogo sobre la presión externa." }
            ],
            metas: [
                { min: 1, max: 40, nivel: "Funcional", desc: "Tienes ambición, pero entiendes que un error no te define.", accion: "Mantén esa mentalidad de crecimiento." },
                { min: 41, max: 75, nivel: "Riesgoso", desc: "Tu perfeccionismo está empezando a ser paralizante. La frustración aparece rápido si no eres 'el mejor'.", accion: "Reencuadra tus metas: enfócate en el proceso, no solo en la nota." },
                { min: 76, max: 100, nivel: "Tóxico", desc: "Tu autoexigencia es destructiva. Te castigas mentalmente por cada fallo, lo que drena tu energía.", accion: "Acepta que la perfección es una ilusión. Intenta fallar en algo pequeño a propósito." }
            ],
            academico: [
                { min: 1, max: 35, nivel: "Normal", desc: "Presentas los bloqueos típicos de cualquier estudiante en época de exámenes.", accion: "Usa una agenda básica para organizarte." },
                { min: 36, max: 70, nivel: "Obstructivo", desc: "El estrés ya interfiere con tu memoria y enfoque. Te toma el doble de tiempo aprender algo nuevo.", accion: "Aplica el método Pomodoro estrictamente (25min trabajo / 5min descanso)." },
                { min: 71, max: 100, nivel: "Incapacitante", desc: "Sufres de parálisis por análisis. Tu mente simplemente se desconecta ante el volumen de tareas.", accion: "Divide tu proyecto más grande en tareas que duren máximo 10 minutos." }
            ]
        };

        const resultado = niveles[dimension].find(n => valor >= n.min && valor <= n.max);
        return resultado || niveles[dimension][niveles[dimension].length - 1]; // Seguro contra errores
    };

    // 4. Construcción del HTML
    let reporteHTML = `
        <h2 class="titulo-seccion">Reporte Personalizado de Bienestar</h2>
        <div style="max-width: 500px; margin: auto; padding: 20px; background: #fff; border-radius: 20px; box-shadow: 0 5px 15px rgba(0,0,0,0.08);">
            <canvas id="graficoResultados"></canvas>
        </div>
        <div style="margin-top: 30px; text-align: left;">
    `;

    Object.keys(p).forEach(key => {
        const analisis = analizarRango(p[key], key);
        const color = p[key] > 70 ? '#d9534f' : (p[key] > 35 ? '#f0ad4e' : '#5cb85c');
        
        reporteHTML += `
            <div style="margin-bottom: 20px; padding: 20px; background: white; border-radius: 15px; border-top: 8px solid ${color}; box-shadow: 0 2px 10px rgba(0,0,0,0.05);">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <h3 style="margin: 0; color: #333; font-size: 1.1em;">${key.toUpperCase()}</h3>
                    <span style="background: ${color}; color: white; padding: 4px 10px; border-radius: 20px; font-size: 0.75em; font-weight: bold;">${analisis.nivel}</span>
                </div>
                <p style="margin-top: 12px; font-size: 0.95em; line-height: 1.4; color: #444;">${analisis.desc}</p>
                <div style="margin-top: 12px; padding: 10px; background: #f9f9f9; border-radius: 8px; border-left: 3px solid ${color};">
                    <p style="margin: 0; font-weight: bold; color: ${color}; font-size: 0.9em;">Recomendación Directa:</p>
                    <p style="margin: 3px 0 0 0; color: #555; font-size: 0.9em;">${analisis.accion}</p>
                </div>
            </div>
        `;
    });

    // Mensaje de cierre empático y profesional
    reporteHTML += `
        <div style="background: #4A90E2; color: white; padding: 25px; border-radius: 20px; text-align: center; margin-top: 20px;">
            <h3 style="margin-top:0;">No estás solo en esto</h3>
            <p style="font-size: 0.95em;">Tu perfil indica que la mayor carga actual es <strong>${maxDimension.toUpperCase()}</strong>. Es importante que sepas que el 70% de los universitarios atraviesan etapas similares. Este diagnóstico es el primer paso para retomar el control.</p>
        </div>
        <button onclick="location.reload()" class="boton-accion" style="margin-top: 25px; width: 100%;">Realizar nueva evaluación</button>
    </div>`;

    resDiv.innerHTML = reporteHTML;

    // 5. Generar Gráfico
    const ctx = document.getElementById('graficoResultados').getContext('2d');
    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Físico', 'Social', 'Metas', 'Académico'],
            datasets: [{
                label: 'Tu Perfil',
                data: [p.fisico, p.social, p.metas, p.academico],
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
