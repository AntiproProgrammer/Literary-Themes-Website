document.querySelectorAll(".click-buttons").forEach(button => {
    button.addEventListener("click", (e) => {
      document.getElementById(e.target.name).scrollIntoView();
    });
  });





const translations = {
  sv: {
    HeroHeader: `Artificiell Intelligens & Etik`,
    analysisTitle: "Analys",
    analysisText: "på svenska...",
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
