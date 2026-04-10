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

    // Función interna para generar narrativa basada en rangos
    const analizarRango = (valor, dimension) => {
        if (valor === 0) return { nivel: "Nulo", desc: "No presentas indicadores de estrés en esta área. Tu equilibrio aquí es óptimo.", accion: "Mantén tus hábitos actuales." };
        
        const niveles = {
            fisico: [
                { min: 1, max: 35, nivel: "Leve", desc: "Tu cuerpo muestra señales iniciales de tensión. Son avisos preventivos que aún puedes gestionar con descanso.", accion: "Practica pausas activas de 5 minutos." },
                { min: 36, max: 70, nivel: "Moderado", desc: "Hay una activación somática evidente. Tu sistema nervioso está en alerta constante, afectando tu sueño y energía.", accion: "Implementa técnicas de respiración profunda y regula tus horarios de comida." },
                { min: 71, max: 100, nivel: "Crítico", desc: "Tu cuerpo está en un estado de agotamiento severo. La somatización del estrés es alta y requiere atención inmediata para evitar problemas crónicos.", accion: "Prioriza el descanso absoluto este fin de semana y considera una revisión médica general." }
            ],
            social: [
                { min: 1, max: 35, nivel: "Bajo", desc: "Manejas bien las expectativas externas, aunque ocasionalmente te comparas con otros.", accion: "Sigue validando tus propios logros." },
                { min: 36, max: 70, nivel: "Elevado", desc: "La presión de tu entorno empieza a dictar tu estado de ánimo. Sientes que debes 'cumplir' para ser aceptado.", accion: "Establece límites: no tienes que decir 'sí' a todo lo social." },
                { min: 71, max: 100, nivel: "Severo", desc: "Vives para las expectativas ajenas. El miedo al juicio social está asfixiando tu identidad y tu paz mental.", accion: "Busca hablar con un mentor o psicólogo sobre la presión familiar/social." }
            ],
            metas: [
                { min: 1, max: 40, nivel: "Funcional", desc: "Tienes ambición, pero entiendes que un error no te define.", accion: "Mantén esa mentalidad de crecimiento." },
                { min: 41, max: 75, nivel: "Riesgoso", desc: "Tu perfeccionismo está empezando a ser paralizante. La frustración aparece rápido si no eres 'el mejor'.", accion: "Reencuadra tus metas: enfócate en el proceso, no solo en la nota." },
                { min: 76, max: 100, nivel: "Tóxico", desc: "Tu autoexigencia es destructiva. Te castigas mentalmente por cada fallo, lo que drena tu capacidad de disfrutar el aprendizaje.", accion: "Acepta que la perfección es una ilusión. Intenta fallar en algo pequeño a propósito." }
            ],
            academico: [
                { min: 1, max: 35, nivel: "Normal", desc: "Presentas los bloqueos típicos de cualquier estudiante en época de exámenes.", accion: "Usa una agenda básica para organizarte." },
                { min: 36, max: 70, nivel: "Obstructivo", desc: "El estrés ya interfiere con tu memoria y enfoque. Te toma el doble de tiempo aprender algo nuevo.", accion: "Aplica el método Pomodoro estrictamente (25min trabajo / 5min descanso)." },
                { min: 71, max: 100, nivel: "Incapacitante", desc: "Sufres de parálisis por análisis. El volumen de tareas parece imposible de abordar y tu mente simplemente se desconecta.", accion: "Divide tu proyecto más grande en tareas que duren máximo 10 minutos cada una." }
            ]
        };

        return niveles[dimension].find(n => valor >= n.min && valor <= n.max);
    };

    // Construcción del Reporte
    let reporteHTML = `
        <h2 class="titulo-seccion">Reporte Personalizado de Bienestar</h2>
        <div style="max-width: 550px; margin: auto; padding: 20px; background: #fff; border-radius: 20px; box-shadow: 0 5px 15px rgba(0,0,0,0.08);">
            <canvas id="graficoResultados"></canvas>
        </div>
        <div style="margin-top: 30px; text-align: left;">
    `;

    Object.keys(p).forEach(key => {
        const analisis = analizarRango(p[key], key);
        const color = p[key] > 70 ? '#d9534f' : (p[key] > 35 ? '#f0ad4e' : '#5cb85c');
        
        reporteHTML += `
            <div style="margin-bottom: 20px; padding: 25px; background: white; border-radius: 15px; border-top: 8px solid ${color}; shadow: 0 2px 10px rgba(0,0,0,0.05);">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <h3 style="margin: 0; color: #333;">${key.toUpperCase()}</h3>
                    <span style="background: ${color}; color: white; padding: 5px 12px; border-radius: 20px; font-size: 0.8em; font-weight: bold;">${analisis.nivel}</span>
                </div>
                <p style="margin-top: 15px; font-size: 1.05em; line-height: 1.5; color: #444;">${analisis.desc}</p>
                <div style="margin-top: 15px; padding: 12px; background: #f9f9f9; border-radius: 8px;">
                    <p style="margin: 0; font-weight: bold; color: ${color};">Recomendación Directa:</p>
                    <p style="margin: 5px 0 0 0; color: #555;">${analisis.accion}</p>
                </div>
            </div>
        `;
    });

    reporteHTML += `
        <div style="background: #4A90E2; color: white; padding: 30px; border-radius: 20px; text-align: center; margin-top: 20px;">
            <h3>Mensaje de Mind Balance</h3>
            <p>Este diagnóstico fue generado analizando tus patrones específicos de respuesta. No eres solo un número, eres un estudiante enfrentando retos reales. Recuerda que reconocer estos porcentajes es el 50% de la solución. Estamos contigo.</p>
        </div>
        <button onclick="location.reload()" class="boton-accion" style="margin-top: 25px;">Reiniciar Evaluación</button>
    </div>`;

    resDiv.innerHTML = reporteHTML;

    // Gráfico de Radar para el Perfil
    const ctx = document.getElementById('graficoResultados').getContext('2d');
    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Físico', 'Social', 'Metas', 'Académico'],
            datasets: [{
                label: 'Tu Huella de Estrés',
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
