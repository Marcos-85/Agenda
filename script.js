// Função para criar o calendário mensal
function createCalendar(year, month) {
    const calendarElement = document.getElementById("calendar");
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayIndex = new Date(year, month, 1).getDay();

    calendarElement.innerHTML = ""; // Limpa o conteúdo anterior

    // Cria o cabeçalho do calendário
    const header = document.getElementById("header");
    header.textContent = `${new Date(year, month).toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' })}`;

    // Cria os dias da semana
    const weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
    weekDays.forEach(day => {
        const dayElement = document.createElement("div");
        dayElement.textContent = day;
        dayElement.style.fontWeight = "bold";
        dayElement.style.textAlign = "center";
        calendarElement.appendChild(dayElement);
    });

    // Preenche os espaços vazios no início do mês
    for (let i = 0; i < firstDayIndex; i++) {
        const emptyDay = document.createElement("div");
        calendarElement.appendChild(emptyDay);
    }

    // Cria os dias do mês
    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement("div");
        dayElement.className = "day";
        dayElement.innerHTML = `<span class="date">${day}</span><ul class="notes"></ul>`;
        calendarElement.appendChild(dayElement);

        // Exemplo de adicionar uma nota a um dia específico (substitua pelos dados reais)
        if (day === 5) {
            addNoteToDay(day, "Reunião com a equipe");
        }
        if (day === 15) {
            addNoteToDay(day, "Aniversário da Maria");
        }
    }
}

// Função para adicionar uma nota a um dia específico
function addNoteToDay(day, noteText) {
    const dayElement = document.querySelector(`.calendar > div:nth-child(${day + 1})`);
    const notesList = dayElement.querySelector(".notes");
    const noteElement = document.createElement("li");
    noteElement.textContent = noteText;
    notesList.appendChild(noteElement);
}

// Chama a função createCalendar para exibir o calendário atual
const currentDate = new Date();
createCalendar(currentDate.getFullYear(), currentDate.getMonth());
