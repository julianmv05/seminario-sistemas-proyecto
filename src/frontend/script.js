const questions = {
    1: {
        text: "¿Sientes que tu valor personal depende totalmente de tus notas?",
        options: [
            { text: "Nunca", value: 0, next: 2 },
            { text: "A veces", value: 2, next: 3 }, // Salta a una rama de profundización
            { text: "Siempre", value: 4, next: 3 }
        ]
    },
    2: {
        text: "¿Logras desconectarte de los estudios en tu tiempo libre?",
        options: [
            { text: "Sí, fácilmente", value: 0, next: 4 },
            { text: "Me cuesta un poco", value: 1, next: 5 },
            { text: "Imposible", value: 3, next: 3 }
        ]
    },
    3: { // Rama de profundización en presión académica
        text: "¿Sientes que tus padres o maestros esperan demasiado de ti?",
        options: [
            { text: "No", value: 0, next: 6 },
            { text: "Sí, es una carga constante", value: 4, next: 7 }
        ]
    }
    // Aquí seguiremos extendiendo hasta las 60...
};

let currentQuestionId = 1;
let totalScore = 0;

function renderQuestion(id) {
    const q = questions[id];
    if (!q) {
        showFinalResult();
        return;
    }

    document.getElementById('question-text').innerText = q.text;
    const optionsDiv = document.getElementById('options-container');
    optionsDiv.innerHTML = '';

    q.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.innerText = opt.text;
        btn.className = "boton-accion"; 
        btn.style.width = "100%";
        btn.style.marginBottom = "10px";
        btn.onclick = () => {
            totalScore += opt.value;
            renderQuestion(opt.next);
            updateProgress();
        };
        optionsDiv.appendChild(btn);
    });
}

function updateProgress() {
    // Estimación de progreso basada en profundidad
    const progress = (currentQuestionId / 60) * 100;
    document.getElementById('progress-bar').style.width = `${progress}%`;
}

function showFinalResult() {
    document.getElementById('quiz-wrapper').style.display = 'none';
    const resDiv = document.getElementById('resultado-test');
    resDiv.style.display = 'block';
    resDiv.innerHTML = `<h3>Evaluación Finalizada</h3><p>Tu puntaje lógico es: ${totalScore}</p>`;
}

// Iniciar el test
renderQuestion(1);
