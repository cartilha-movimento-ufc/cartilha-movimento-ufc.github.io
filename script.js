// 1. BANCO DE DADOS DOS EXERCÍCIOS E SEMANAS (ORDEM EXATA)

const exerciseCatalog = {
  marcha: {
    name: "Marcha estacionária",
    file: "marcha-estacionaria.MP4",
    hasVariationVideo: false,
    howTo: "Em pé, segurando-se levemente no encosto de uma cadeira, alterne a elevação dos joelhos de forma suave, simulando uma caminhada no mesmo lugar.",
    variation: "Faça o movimento sentado(a) na cadeira, elevando os joelhos alternadamente de forma leve.",
    duration: "1 a 2 minutos"
  },
  alongamentos: {
    name: "Alongamentos gerais",
    file: "alongamentos-gerais.MP4",
    hasVariationVideo: true,
    howTo: "Em pé, flexione suavemente o tronco para frente, deslizando as mãos em direção aos joelhos ou canelas, e retorne devagar à posição ereta com as mãos na cintura, olhando para frente.",
    variation: "Sentado(a) na cadeira com os pés firmes no chão, incline suavemente o tronco para frente, espreguiçando os braços em direção aos pés ou joelhos, e retorne devagar.",
    duration: "3 repetições de 20 segundos"
  },
  mob_pelvica: {
    name: "Mob. pélvica",
    file: "mobilidade-pelvica.MP4",
    hasVariationVideo: false,
    howTo: "Sentado(a) em uma cadeira firme, com os pés apoiados no chão, balance suavemente o quadril para frente e para trás, arqueando e arredondando levemente a coluna lombar.",
    variation: "Realize o movimento de forma mais lenta e com menor amplitude caso sinta rigidez na lombar.",
    duration: "2 a 3 minutos"
  },
  respiracao: {
    name: "Controle da respiração/respiração diafragmática",
    file: "respiracao-diafragmatica.MP4",
    hasVariationVideo: false,
    howTo: "Inspire profundamente pelo nariz enchendo o abdômen e solte o ar devagar pela boca com os lábios semicerrados, relaxando os ombros.",
    variation: "Sentado (a) confortavelmente com as costas apoiadas, feche os olhos levemente se preferir. Apoie uma mão no peito e a outra no abdômen. Inspire pelo nariz sentindo a mão da barriga subir e expire devagar pela boca.",
    duration: "1 a 2 minutos"
  },
  sentar_levantar: {
    name: "Sentar/levantar",
    file: "sentar-levantar.MP4",
    hasVariationVideo: true,
    howTo: "Em pé, com os pés afastados na largura do quadril, flexione levemente os joelhos e o quadril para sentar-se de forma controlada na cadeira e, em seguida, levante-se novamente para a posição inicial.",
    variation: "Sentado(a) na cadeira com os pés firmes no chão, utilize um apoio firme à sua frente (pode ser um bastão, um cabo de vassoura, o encosto de outra cadeira ou um móvel firme). Segure com as duas mãos, incline levemente o tronco para frente e levante-se com segurança, retornando devagar para a cadeira.",
  },
  ponte: {
    name: "Ponte",
    file: "ponte.MP4",
    hasVariationVideo: false,
    howTo: "Deitado(a) de barriga para cima com os joelhos dobrados e pés no chão, eleve suavemente o quadril contraindo os glúteos e retorne devagar.",
    variation: "Deitado(a) confortavelmente de barriga para cima na cama, com os joelhos dobrados e pés firmes, apoie os braços ao lado do corpo. Eleve o quadril apenas alguns centímetros, respeitando o seu limite de conforto, e retorne devagar.",
    duration: "8 a 10 repetições"
  },
  flexao_plantar: {
    name: "Flexão plantar",
    file: "flexao-plantar.MP4",
    hasVariationVideo: false,
    howTo: "Em pé, apoiado(a) na parede ou cadeira, eleve os calcanhares ficando na ponta dos pés e abaixe-os lentamente.",
    variation: "Realize o exercício sentado(a) com os pés apoiados no chão, elevando apenas os calcanhares.",
    duration: "10 a 12 repetições"
  },
  abducao: {
    name: "Abdução/abertura lateral da perna",
    file: "abertura-lateral-perna.MP4",
    hasVariationVideo: true,
    howTo: "Em pé, com o corpo ereto, afaste uma das pernas para o lado de forma controlada e retorne à posição inicial, alternando os lados.",
    variation: "Apoie-se firmemente na parede ou no encosto de uma cadeira para manter o equilíbrio durante o movimento.",
    duration: "8 repetições para cada perna"
  },
  degrau: {
    name: "Subir/descer degrau",
    file: "subir-descer-degrau.MP4",
    hasVariationVideo: false,
    howTo: "Com apoio firme, suba com um pé em um degrau baixo ou plataforma segura e desça em seguida, alternando as pernas.",
    variation: "Com o apoio firme das mãos em um corrimão ou parede, escolha um único degrau baixo ou um pequeno desnível dentro de casa. Suba com um pé e depois com o outro no mesmo degrau, e em seguida desça com calma, repetindo o movimento de subir e descer no mesmo lugar.",
    duration: "6 a 8 repetições por perna"
  }
};

const weeksData = [
  {
    week: 1,
    title: "Semana 01",
    painTopic: "O que é a dor? Dor crônica x Dor aguda",
    painDesc: "A dor aguda é um alerta rápido do corpo (como um corte). Já a dor crônica persiste por mais tempo porque o sistema de alarme ficou sensível — mas movimentar-se com segurança ajuda a acalmar esse alerta!",
    exercises: ["marcha", "alongamentos", "mob_pelvica", "respiracao"]
  },
  {
    week: 2,
    title: "Semana 02",
    painTopic: "A Importância de movimentar-se",
    painDesc: "Ficar muito tempo parado enrijece as articulações e enfraquece a musculatura que protege a lombar. O movimento suave lubrifica a coluna e traz alívio.",
    exercises: ["marcha", "alongamentos", "sentar_levantar", "mob_pelvica", "respiracao"]
  },
  {
    week: 3,
    title: "Semana 03",
    painTopic: "Exposição gradual",
    painDesc: "Não precisamos fazer tudo de uma vez. Aumentar os exercícios aos poucos ensina ao seu corpo que o movimento é seguro e fortalece sua confiança.",
    exercises: ["marcha", "alongamentos", "sentar_levantar", "ponte", "mob_pelvica", "respiracao"]
  },
  {
    week: 4,
    title: "Semana 04",
    painTopic: "Planejamento das atividades de vida diária",
    painDesc: "Dividir tarefas domésticas ao longo do dia e fazer pequenas pausas evita sobrecarga na lombar e permite que você faça tudo o que gosta sem exaustão.",
    exercises: ["marcha", "alongamentos", "sentar_levantar", "ponte", "flexao_plantar", "mob_pelvica", "respiracao"]
  },
  {
    week: 5,
    title: "Semana 05",
    painTopic: "A importância do exercício físico",
    painDesc: "O exercício regular libera substâncias naturais de bem-estar no cérebro, melhora o sono, o equilíbrio e dá mais autonomia no dia a dia.",
    exercises: ["alongamentos", "marcha", "mob_pelvica", "respiracao", "ponte", "sentar_levantar", "flexao_plantar", "abducao"]
  },
  {
    week: 6,
    title: "Semana 06",
    painTopic: "Resumo dos assuntos anteriores",
    painDesc: "Você já aprendeu que dor não significa dano grave, que o movimento é seu aliado e que progredir aos poucos traz força e liberdade!",
    exercises: ["alongamentos", "marcha", "mob_pelvica", "respiracao", "ponte", "sentar_levantar", "abducao", "degrau", "flexao_plantar"]
  },
  {
    week: 7,
    title: "Semana 07 (Consolidação)",
    painTopic: "Mantendo os hábitos saudáveis",
    painDesc: "Continue praticando sua sequência favorita e observando como seu corpo responde com mais disposição.",
    exercises: ["alongamentos", "marcha", "mob_pelvica", "respiracao", "ponte", "sentar_levantar", "abducao", "degrau", "flexao_plantar"]
  },
  {
    week: 8,
    title: "Semana 08 (Autonomia)",
    painTopic: "Celebração da sua jornada!",
    painDesc: "Parabéns por chegar até aqui! Você agora conhece os exercícios e variações para cuidar da sua lombar por toda a vida.",
    exercises: ["alongamentos", "marcha", "mob_pelvica", "respiracao", "ponte", "sentar_levantar", "abducao", "degrau", "flexao_plantar"]
  }
];

// Escala de Borg oficial com cores
const borgScaleData = [
  { num: 0, label: "Repouso", color: "#4CAF50" },
  { num: 1, label: "Demasiado Leve", color: "#66BB6A" },
  { num: 2, label: "Muito muito Leve", color: "#81C784" },
  { num: 3, label: "Muito Leve", color: "#AED581" },
  { num: 4, label: "Leve", color: "#DCE775" },
  { num: 5, label: "Leve - Moderado", color: "#FFD54F" },
  { num: 6, label: "Moderado", color: "#FFB74D" },
  { num: 7, label: "Moderado - Intenso", color: "#FF8A65" },
  { num: 8, label: "Intenso", color: "#E57373" },
  { num: 9, label: "Muito Intenso", color: "#EF5350" },
  { num: 10, label: "Exaustivo", color: "#D32F2F" }
];


// 2. ESTADO DO APLICATIVO (SALVO NO NAVEGADOR DO IDOSO)

let currentWeekNum = 1;
let formState = { mood: "", sleep: "", borg: null };
let savedRecords = JSON.parse(localStorage.getItem("movimento_ufc_records") || "{}");


// 3. NAVEGAÇÃO E RENDERIZAÇÃO

function goTo(screenId) {
  window.speechSynthesis.cancel();
  document.getElementById("btnGlobalAudio").classList.remove("speaking");

  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(screenId).classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });

  if (screenId === "screen-weeks") renderWeeks();
  if (screenId === "screen-records") renderRecords();
}

function renderWeeks() {
  const container = document.getElementById("weeksListContainer");
  container.innerHTML = "";
  let completedCount = 0;

  weeksData.forEach(w => {
    const isDone = Boolean(savedRecords[w.week]);
    if (isDone) completedCount++;

    // Atualiza o fruto correspondente na Árvore do Movimento
    const fruitEl = document.getElementById(`fruit-${w.week}`);
    if (fruitEl) {
      fruitEl.setAttribute("fill", isDone ? "#FF9800" : "#E2E8F0");
      fruitEl.setAttribute("r", isDone ? "11" : "9");
    }

    const btn = document.createElement("button");
    btn.className = `week-item ${isDone ? "completed" : ""}`;
    btn.onclick = () => openWeekDetail(w.week);
    btn.innerHTML = `
      <div class="week-left">
        <div class="week-badge">${isDone ? "✔" : w.week}</div>
        <div>
          <strong style="font-size: 19px; color: var(--azul-escuro);">${w.title}</strong><br>
          <span class="week-status">${isDone ? "Concluída • Fruto colhido!" : "Toque para iniciar"}</span>
        </div>
      </div>
      <span style="font-size: 24px; color: var(--azul-medio);">›</span>
    `;
    container.appendChild(btn);
  });

  document.getElementById("treeStatusText").innerText = `${completedCount} de 8 frutos colhidos na sua árvore`;
}

function openWeekDetail(weekNum) {
  currentWeekNum = weekNum;
  const data = weeksData.find(w => w.week === weekNum);
  
  document.getElementById("detailWeekTitle").innerText = data.title;
  document.getElementById("detailPainTopic").innerText = `Tema: ${data.painTopic}`;
  document.getElementById("detailPainDesc").innerText = data.painDesc;

  const exContainer = document.getElementById("exercisesContainer");
  exContainer.innerHTML = "";

  data.exercises.forEach((exKey, index) => {
    const ex = exerciseCatalog[exKey];
    const card = document.createElement("div");
    card.className = "exercise-card";
    card.innerHTML = `
      <div class="exercise-header">
        <span class="ex-num">${index + 1}</span>
        <span class="ex-title">${ex.name}</span>
      </div>
      <div class="media-container">
    <video src="/assets/${ex.file}" autoplay loop muted playsinline style="width: 100%; border-radius: 12px;" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"></video>
    <div class="media-placeholder" style="display: none; flex-direction: column; align-items: center; justify-content: center; padding: 20px; background: #f5f5f5; border-radius: 12px; border: 2px dashed #ccc;">
        <span style="font-size: 32px;">📁</span>
        <strong>Vídeo do Exercício</strong>
        <small>Coloque '${ex.file}' na pasta assets</small>
    </div>
</div>

      <div>
        <h3 style="font-size: 18px;">Como fazer?</h3>
        <p style="margin-top: 4px;">${ex.howTo}</p>
        <p style="margin-top: 6px; font-weight: 700; color: var(--petroleo-escuro);">⏱ Tempo/Repetições: ${ex.duration}</p>
      </div>

      <div class="ex-actions">
        <button class="btn-audio-ex" onclick="speakText('${ex.name}. ${ex.howTo} ${ex.audioDesc || ''}')">
          🔊 Ouvir Exercício
        </button>
        <button class="btn-variation" onclick="openVariation('${exKey}')">
          Não conseguiu? Ver variações ›
        </button>
      </div>
    `;
    exContainer.appendChild(card);
  });

  goTo("screen-week-detail");
}

function openVariation(exerciseKey) {
  const ex = exerciseCatalog[exerciseKey];
  if (!ex) return;

  document.getElementById('varExerciseName').innerText = ex.name;
  document.getElementById('varHowTo').innerText = ex.variation || "Siga as orientações de adaptação com segurança.";

  const mediaBox = document.querySelector('#screen-variations .exercise-card');
  if (mediaBox) {
    let videoEl = mediaBox.querySelector('video');
    let logoBox = mediaBox.querySelector('.variation-logo-box');
    let placeholderEl = mediaBox.querySelector('.media-placeholder');

    if (videoEl) videoEl.remove();
    if (logoBox) logoBox.remove();
    if (placeholderEl) placeholderEl.remove();

    if (ex.hasVariationVideo && ex.file) {
      videoEl = document.createElement('video');
      videoEl.controls = true;
      videoEl.style.width = '100%';
      videoEl.style.borderRadius = '8px';
      videoEl.style.marginTop = '10px';
      videoEl.src = `assets/var-${ex.file}`;
      videoEl.load();
      
      mediaBox.querySelector('.exercise-header').insertAdjacentElement('afterend', videoEl);
      
      const fileNameSpan = document.getElementById('varMediaFile');
      if (fileNameSpan) fileNameSpan.innerText = `Arquivo: var-${ex.file}`;
    } else {
      const customLogoDiv = document.createElement('div');
      customLogoDiv.className = 'variation-logo-box';
      customLogoDiv.style.cssText = 'text-align: center; padding: 20px; background: #F8FAFC; border-radius: 8px; margin-top: 10px; border: 1px dashed #CBD5E1;';
      
      customLogoDiv.innerHTML = `
        <img src="assets/logo-icone.png" alt="Logo Movimento UFC" style="width: 80px; height: auto; margin: 0 auto 10px; display: block;">
        <strong style="color: var(--petroleo-escuro); display: block; font-size: 15px;">Adaptação guiada por descrição</strong>
        <small style="color: var(--texto-suave);">Siga o passo a passo descrito abaixo com segurança.</small>
      `;
      
      mediaBox.querySelector('.exercise-header').insertAdjacentElement('afterend', customLogoDiv);
      
      const fileNameSpan = document.getElementById('varMediaFile');
      if (fileNameSpan) fileNameSpan.innerText = "Modo de adaptação ilustrado por texto";
    }
  }

  goTo('screen-variations');
}


// 4. ACOMPANHAMENTO & ESCALA DE BORG

function buildBorgScale() {
  const borgList = document.getElementById("borgList");
  borgList.innerHTML = "";
  borgScaleData.forEach(item => {
    const div = document.createElement("div");
    div.className = "borg-item";
    div.style.backgroundColor = item.color;
    div.onclick = () => {
      document.querySelectorAll(".borg-item").forEach(el => el.classList.remove("selected"));
      div.classList.add("selected");
      formState.borg = `${item.num} - ${item.label}`;
    };
    div.innerHTML = `<span class="borg-num">${item.num}</span> <span>${item.label}</span>`;
    borgList.appendChild(div);
  });
}

function selectOption(group, value, btnEl) {
  formState[group] = value;
  btnEl.parentElement.querySelectorAll(".emoji-btn").forEach(b => b.classList.remove("selected"));
  btnEl.classList.add("selected");
}

function openTracking() {
  formState = { mood: "", sleep: "", borg: null };
  document.querySelectorAll(".emoji-btn, .borg-item").forEach(el => el.classList.remove("selected"));
  document.querySelectorAll("input[type='radio']").forEach(r => r.checked = false);
  document.getElementById("userNotes").value = "";

  document.getElementById("trackingProgressLabel").innerText = `Semana ${currentWeekNum} de 8`;
  
  const pct = Math.round((currentWeekNum / 8) * 100);
  document.getElementById("progressPercentText").innerText = `${pct}%`;
  document.getElementById("progressBarFill").style.width = `${pct}%`;

  goTo("screen-tracking");
}

function saveTracking() {
  const completedRadio = document.querySelector("input[name='completedEx']:checked");
  const helpRadio = document.querySelector("input[name='helpNeeded']:checked");
  const notes = document.getElementById("userNotes").value.trim();

  savedRecords[currentWeekNum] = {
    week: currentWeekNum,
    date: new Date().toLocaleDateString("pt-BR"),
    mood: formState.mood || "Não informado",
    sleep: formState.sleep || "Não informado",
    completed: completedRadio ? completedRadio.value : "Não informado",
    help: helpRadio ? helpRadio.value : "Não informado",
    borg: formState.borg || "Não informado",
    notes: notes || "Sem observações."
  };

  localStorage.setItem("movimento_ufc_records", JSON.stringify(savedRecords));
  speakText(`Parabéns! Semana ${currentWeekNum} salva com sucesso. Um novo fruto cresceu na sua Árvore do Movimento!`);
  alert(`🎉 Parabéns! Semana ${currentWeekNum} concluída! Um novo fruto cresceu na sua Árvore do Movimento.`);
  goTo("screen-weeks");
}

function renderRecords() {
  const container = document.getElementById("recordsContainer");
  const keys = Object.keys(savedRecords);

  if (keys.length === 0) {
    container.innerHTML = `<div class="exercise-card"><p>Você ainda não possui registros salvos. Conclua uma semana para vê-la aqui!</p></div>`;
    return;
  }

  container.innerHTML = "";
  keys.forEach(k => {
    const r = savedRecords[k];
    const card = document.createElement("div");
    card.className = "exercise-card";
    card.innerHTML = `
      <div class="exercise-header">
        <span class="ex-num">${r.week}</span>
        <span class="ex-title">Semana 0${r.week} • ${r.date}</span>
      </div>
      <p><strong>Como se sentiu:</strong> ${r.mood} | <strong>Sono:</strong> ${r.sleep}</p>
      <p><strong>Realização:</strong> ${r.completed}</p>
      <p><strong>Apoio:</strong> ${r.help}</p>
      <p><strong>Esforço (Escala de Borg):</strong> ${r.borg}</p>
      <p><strong>Relato:</strong> "${r.notes}"</p>
    `;
    container.appendChild(card);
  });
}


// 5. AUDIODESCRIÇÃO NATIVA SEGURA (SEM TRAVAMENTOS)

function toggleAudioPlayback() {
  if (!("speechSynthesis" in window)) {
    alert("Seu navegador não suporta leitura em voz alta.");
    return;
  }

  const btn = document.getElementById("btnGlobalAudio");

  if (window.speechSynthesis.speaking || window.speechSynthesis.paused) {
    window.speechSynthesis.cancel();
    if (btn) {
      btn.classList.remove("speaking");
      btn.innerHTML = "🔊 Ouvir Tela";
    }
    return;
  }

  const activeScreen = document.querySelector(".screen.active");
  if (!activeScreen) return;
  const textToRead = activeScreen.innerText.replace(/🔊.*?\n/g, "");

  const utterance = new SpeechSynthesisUtterance(textToRead);
  utterance.lang = "pt-BR";
  utterance.rate = 0.92;

  if (btn) {
    btn.classList.add("speaking");
    btn.innerHTML = "⏹ Parar Som";
  }

  utterance.onend = () => {
    if (btn) {
      btn.classList.remove("speaking");
      btn.innerHTML = "🔊 Ouvir Tela";
    }
  };

  utterance.onerror = () => {
    if (btn) {
      btn.classList.remove("speaking");
      btn.innerHTML = "🔊 Ouvir Tela";
    }
  };

  window.speechSynthesis.speak(utterance);
}

function speakText(text) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "pt-BR";
  utterance.rate = 0.92;

  const btn = document.getElementById("btnGlobalAudio");
  if (btn) {
    btn.classList.add("speaking");
    btn.innerHTML = "⏹ Parar Som";
  }

  utterance.onend = () => {
    if (btn) {
      btn.classList.remove("speaking");
      btn.innerHTML = "🔊 Ouvir Tela";
    }
  };

  utterance.onerror = () => {
    if (btn) {
      btn.classList.remove("speaking");
      btn.innerHTML = "🔊 Ouvir Tela";
    }
  };

  window.speechSynthesis.speak(utterance);
}

function readCurrentScreen() {
  toggleAudioPlayback();
}

function readPainEducation() {
  const topic = document.getElementById("detailPainTopic").innerText;
  const desc = document.getElementById("detailPainDesc").innerText;
  speakText(`${topic}. ${desc}`);
}

// Inicializa Escala de Borg ao carregar
buildBorgScale();
