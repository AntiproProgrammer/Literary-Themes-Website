function go(id) {
  document.getElementById(id).scrollIntoView();
}

const translations = {
  sv: {
    HeroHeader: `Artificiell Intelligens & Etik`,
    analysisTitle: "Analys",
    analysisText: "Ppå svenska...",
  },
  en: {
    HeroHeader: `Artificial Intelligence & Ethics`,
    analysisTitle: "Analysis",
    analysisText:
      "Victor creates life but rejects his creation. This shows the danger of science without ethics.",
  },
};

function setLang(lang) {
  document.getElementById("title").innerText = translations[lang].HeroHeader;
  document.getElementById("analysisTitle").innerText =
    translations[lang].analysisTitle;
  document.getElementById("analysisText").innerText =
    translations[lang].analysisText;
}
