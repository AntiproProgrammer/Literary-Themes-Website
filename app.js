document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".click-buttons").forEach((button) => {
    button.addEventListener("click", (e) => {
      document.getElementById(e.currentTarget.name).scrollIntoView({ behavior: "smooth" });
    });
  });
});

const translations = {
  "en": {
    herotitle: "Artificial Intelligence & Ethics",
    intro: "A study of Frankenstein and modern AI relationships.",
    author: "The Author",
    context: "Context",
    analysis: "Analysis",
    modern: "AI Today",
    conclusion: "Conclusion",

    authorTitle:"About the Author",
    authorText:"",
    contextTitle:"Historical Context",
    contextText:"Great Britain is often described as the birthplace of the Industrial Revolution, a period from about the late 1700s when production moved from small workshops and farms to large factories with machines. New inventions in textiles, steam power and iron made it possible to produce goods much faster and more cheaply than before. Many people moved from the countryside to crowded industrial cities and taking a factory job became a common practice, creating new social problems. The working conditions in said factories were famously horrible. The workers, including children, had often worked 12-14 hours a day in dangerous conditions with only a day off only to receive a low wage. ",
    contextTitle2:"Literary Context",
    contextText2:"Mary Shelley wrote Frankenstein during the Romantic period, an artistic and intellectual movement that began in Europe towards the end of the 18th century. Throughout this time, due to the Industrial revolution and the harsh realities discussed during the Age of Enlightenment people began to believe that individualism,emotions and nature should be held at the highest priority, especially in the arts. Four key ideas stood out: Emotion over reason, glorification of nature,emphasis on individualism and the sublime.",
    contextTitle3:"Emotion over Reason",
    contextText3:"People believed that deep feelings–such as passion, joy, terror, or sorrow–revealed truths that logic alone could not. They rejected the Enlightenment idea that humans should suppress emotions in favour of rational analysis. Writers like William Wordsworth urged people to trust their intuition and inner experiences, often exploring psychological depth and the power of imagination to create new realities.",
    contextTitle4:"Glorification of Nature",
    contextText4:"Nature was not just scenery for Romantics; it was a living, spiritual force that inspired awe and offered moral guidance. They contrasted its wild beauty with the pollution and factories of industrial cities. Poets described mountains, storms, and forests as sources of healing or divine presence, capable of overwhelming the sense and stirring profound emotions.",
    contextTitle5:"Emphasis on Individualism",
    contextText5:"Romantics celebrated the unique people who stood apart from society. this “Romantic hero” was often a rebel or a tortured genius defying conventions to pursue personal truth. They valued self-expression and authenticity over social norms, highlighting the conflict between the individual and conformist world.",
    contextTitle6:"The Sublime",
    contextText6:"The sublime referred to experiences of overwhelming emotions that made people feel both insignificant and exalted, like standing before a raging ocean or endless starry sky. People sought the overwhelming beauty of nature in art.",

    analysis:"Analysis",
    analysisText:"",

    modernTitle:"AI and Society Today",
    modernText:"",

    conclusionTitle:"Conclusion",
    conclusionText:"",
  },
  "sv": {
    herotitle: "Artificiell Intelligens & Etik",
    intro: "En studie av Frankenstein och moderna AI-relationer.",
    author: "Författare",
    context: "Kontext",
    analysis: "Analys",
    modern: "AI Idag",
    conclusion: "Slutsats",

    authorTitle:"Om Författaren",
    authorText:"",
    contextTitle:"Historisk kontext",
    contextText:"Storbritannien beskrivs ofta som födelseplatsen för den industriella revolutionen, en period från slutet av 1700-talet då produktionen flyttade från små verkstäder och gårdar till stora fabriker med maskiner. Nya uppfinningar inom textilier, ångkraft och järn gör det möjligt att producera varor mycket snabbare och billigare än tidigare. Många människor flyttade från landsbygden till trånga industristäder och att ta ett fabriksjobb blev en vanlig praxis, vilket skapade nya sociala problem. Arbetsförhållandena i dessa fabriker var ökända för att vara fruktansvärda. Arbetarna, inklusive barnen, hade ofta arbetat 12–14 timmar om dagen under farliga förhållanden med bara en ledig dag för att sedan få låg lön.",
    contextTitle2:"Litterär kontext",
    contextText2:"Mary Shelley skrev Frankenstein under den romantiska perioden, en konstnärlig och intellektuell rörelse som började i Europa mot slutet av 1700-talet. Under denna tid, på grund av den industriella revolutionen och de hårda realiteter som diskuterades under upplysningstiden, började människor tro att individualism, känslor och natur borde ha högsta prioritet, särskilt inom konsten. Fyra nyckelidéer stack ut: Känsla över förnuft, förhärligande av naturen, betoning på individualism och det sublima.",
    contextTitle3:"Känsla över förnuft",
    contextText3:"Folk trodde att djupa känslor – som passion, glädje, skräck eller sorg – avslöjade sanningar som logiken ensam inte kunde. De avvisade upplysningens idé att människor borde uttrycka känslor till förmån för rationell analys. Författare som William Wordsworth uppmanade människor att lita på sin intuition och sina inre erfarenheter, ofta genom att utforska psykologiskt djup och fantasins kraft att skapa nya verkligheter.",
    contextTitle4:"Glorifiering av naturen",
    contextText4:"Naturen var inte bara landskap för romantiker; Det var en levande, andlig kraft som ingav vördnad och erbjöd moralisk vägledning. De kontrasterar dess vilda skönhet med föroreningarna och fabrikerna i industristäder. Poeter beskrev berg, stormar och skogar som källor till helande eller gudomlig närvaro, kapabla att överväldiga sinnet och väcka djupa känslor.",
    contextTitle5:"Betoning på individualism",
    contextText5:"Romantiker hyllade de unika människor som stod utanför samhället. Denna \"romantiska hjälte\" var ofta en rebell eller ett plågat geni som trotsade konventioner för att söka personlig sanning. De värderade självuttryck och äkthet högre än sociala normer, vilket belyser konflikten mellan individen och den konformistiska världen.",
    contextTitle6:"Det sublima",
    contextText6:"Det sublima syftade på upplevelser av överväldigande känslor som fick människor att känna sig både obetydliga och upphöjda, som att stå framför ett rasande hav eller en oändlig stjärnhimmel. Folk sökte naturens överväldigande skönhet i konsten.",

    analysis:"Analys",
    analysisText:"",

    modernTitle:"AI & Samhället Idag",
    modernText:"",

    conclusionTitle:"Slutsats",
    conclusionText:"",
  }
}

function setLang(lang) {
  const t = translations[lang];
  document.getElementById("hero-title").textContent = t.herotitle;
  document.getElementById("intro").textContent = t.intro;
  document.getElementsByName("author")[0].textContent = t.author;
  document.getElementsByName("context")[0].textContent = t.context;
  document.getElementsByName("analysis")[0].textContent = t.analysis;
  document.getElementsByName("modern")[0].textContent = t.modern;
  document.getElementsByName("conclusion")[0].textContent = t.conclusion;

  document.getElementById("authorTitle").textContent = t.authorTitle;
  document.getElementById("authorText").textContent = t.authorText;

  document.getElementById("contextTitle").textContent = t.contextTitle
  document.getElementById("contextText").textContent = t.contextText
  document.getElementById("contextTitle2").textContent = t.contextTitle2
  document.getElementById("contextText2").textContent = t.contextText2
  document.getElementById("contextTitle3").textContent = t.contextTitle3
  document.getElementById("contextText3").textContent = t.contextText3
  document.getElementById("contextTitle4").textContent = t.contextTitle4
  document.getElementById("contextText4").textContent = t.contextText4
  document.getElementById("contextTitle5").textContent = t.contextTitle5
  document.getElementById("contextText5").textContent = t.contextText5
  document.getElementById("contextTitle6").textContent = t.contextTitle6
  document.getElementById("contextText6").textContent = t.contextText6

  document.getElementById("analysisTitle").textContent = t.analysis;
  document.getElementById("analysisText").textContent = t.analysisText;

  document.getElementById("modernTitle").textContent = t.modernTitle;
  document.getElementById("modernText").textContent = t.modernText;

  document.getElementById("conclusionTitle").textContent = t.conclusionTitle;
  document.getElementById("conclusionText").textContent = t.conclusionText;
}

setLang("sv");