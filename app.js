document.querySelectorAll(".click-buttons").forEach((button) => {
  button.addEventListener("click", (e) => {
    document.getElementById(e.target.name).scrollIntoView();
  });
});

const translations = {
  en: `
    <div class="hero">
      <h1 id="title">Artificial Intelligence & Ethics</h1>
      <p id="intro">A study of Frankenstein and modern AI relationships.</p>
    </div>
    
    <div class="buttons">
      <button name="author" class="click-buttons">Author</button>
      <button name="context" class="click-buttons">Context</button>
      <button name="analysis" class="click-buttons">Analysis</button>
      <button name="modern" class="click-buttons">AI Today</button>
      <button name="conclusion" class="click-buttons">Conclusion</button>
    <div id="author" class="section">
      <h2 id="authorTitle">About the Author</h2>
       
      <p id="authorText">
        Mary Shelley was an English writer born in 1797. She wrote Frankenstein
        at age 18.
      </p>
    </div>
    <div id="context" class="section">
      <h2 id="contextTitle">Historical Context</h2>
      <p id="contextText">
        Great Britain is often described as the birthplace of the Industrial Revolution, a period from about the late 1700s when production moved from small workshops and farms to large factories with machines. New inventions in textiles, steam power and iron made it possible to produce goods much faster and more cheaply than before. Many people moved from the countryside to crowded industrial cities and taking a factory job became a common practice, creating new social problems. The working conditions in said factories were famously horrible. The workers, including children, had often worked 12-14 hours a day in dangerous conditions with only a day off only to receive a low wage.
      </p>
      <h2 id="contextTitle2">Literary Context</h2>
      <p id="contextText2">Mary Shelley wrote Frankenstein during the Romantic period, an artistic and intellectual movement that began in Europe towards the end of the 18th century. Throughout this time, due to the Industrial revolution and the harsh realities discussed during the Age of Enlightenment people began to believe that individualism,emotions and nature should be held at the highest priority, especially in the arts. Four key ideas stood out: Emotion over reason, glorification of nature,emphasis on individualism and the sublime.
        </p>
      <h3 id="contextTitle3">Emotion over reason</h3>
      <p id="contextText3">
        People believed that deep feelings–such as passion, joy, terror, or sorrow–revealed truths that logic alone could not. They rejected the Enlightenment idea that humans should suppress emotions in favour of rational analysis. Writers like William Wordsworth urged people to trust their intuition and inner experiences, often exploring psychological depth and the power of imagination to create new realities.
      </p>
      <h3 id="contextTitle4">Glorification of nature</h3>
      <p id="contextText4">
        Nature was not just scenery for Romantics; it was a living, spiritual force that inspired awe and offered moral guidance. They contrasted its wild beauty with the pollution and factories of industrial cities. Poets described mountains, storms, and forests as sources of healing or divine presence, capable of overwhelming the sense and stirring profound emotions.
      </p>
      <h3 id="contextTitle5">Emphasis on individualism</h3>
      <p id="contextText5">
        Romantics celebrated the unique people who stood apart from society. this “Romantic hero” was often a rebel or a tortured genius defying conventions to pursue personal truth. They valued self-expression and authenticity over social norms, highlighting the conflict between the individual and conformist world.
      </p>
      <h3 id="contextTitle6">The sublime</h3>
      <p id="contextText6">
        The sublime referred to experiences of overwhelming emotions that made people feel both insignificant and exalted, like standing before a raging ocean or endless starry sky. People sought the overwhelming beauty of nature in art.
      </p>

    </div>

    <div id="analysis" class="section">
      <h2 id="analysisTitle">Analysis</h2>
      <p id="analysisText">
        Victor creates life but rejects his creation. This shows the danger of
        science without ethics.
      </p>
    </div>
    
    <div id="modern" class="section">
      <h2 id="modernTitle">AI & Modern Society</h2>
      <p id="modernText">
        Today we create artificial intelligence. We must take responsibility for
        it.
      </p>
    </div>
    
    <div id="conclusion" class="section">
      <h2 id="conclusionTitle">Conclusion</h2>
      <p id="conclusionText">
        Frankenstein still matters because AI raises the same ethical questions
        today.
      </p>
    </div>
    `,

  sv: `

    <div class="hero">
      <h1 id="title">Artificiell Intelligens & Etik</h1>
      <p id="intro">En studie av Frankenstein och moderna AI-relationer.</p>
    </div>

    <div class="buttons">
      <button name="author" class="click-buttons">Författare</button>
      <button name="context" class="click-buttons">Kontekst</button>
      <button name="analysis" class="click-buttons">Analys</button>
      <button name="modern" class="click-buttons">AI Idag</button>
      <button name="conclusion" class="click-buttons">Slutsats</button>
    </div>
    <div id="author" class="section">
      <h2 id="authorTitle">Om Författaren</h2>
      <p id="authorText">
        Mary Shelley var en engelsk författare född 1797. Hon skrev <em>Frankenstein</em>
        vid 18 års ålder.
      </p>
    </div>

    <div id="context" class="section">
      <h2 id="contextTitle">Historisk kontext</h2>
      <p id="contextText">
        Storbritannien beskrivs ofta som födelseplatsen för den industriella revolutionen, en period från slutet av 1700-talet då produktionen flyttade från små verkstäder och gårdar till stora fabriker med maskiner. Nya uppfinningar inom textilier, ångkraft och järn gör det möjligt att producera varor mycket snabbare och billigare än tidigare. Många människor flyttade från landsbygden till trånga industristäder och att ta ett fabriksjobb blev en vanlig praxis, vilket skapade nya sociala problem. Arbetsförhållandena i dessa fabriker var ökända för att vara fruktansvärda. Arbetarna, inklusive barnen, hade ofta arbetat 12–14 timmar om dagen under farliga förhållanden med bara en ledig dag för att sedan få låg lön.
      </p>
      <h2 id="contextTitle2">Litterär kontext</h2>
      <p id="contextText2">
        Mary Shelley skrev Frankenstein under den romantiska perioden, en konstnärlig och intellektuell rörelse som började i Europa mot slutet av 1700-talet. Under denna tid, på grund av den industriella revolutionen och de hårda realiteter som diskuterades under upplysningstiden, började människor tro att individualism, känslor och natur borde ha högsta prioritet, särskilt inom konsten. Fyra nyckelidéer stack ut: Känsla över förnuft, förhärligande av naturen, betoning på individualism och det sublima.
      </p>
      <h3 id="contextTitle3">Känsla över förnuft</h3>
      <p id="contextText3">
        Folk trodde att djupa känslor – som passion, glädje, skräck eller sorg – avslöjade sanningar som logiken ensam inte kunde. De avvisade upplysningens idé att människor borde uttrycka känslor till förmån för rationell analys. Författare som William Wordsworth uppmanade människor att lita på sin intuition och sina inre erfarenheter, ofta genom att utforska psykologiskt djup och fantasins kraft att skapa nya verkligheter.
      </p>
      <h3 id="contextTitle4">Glorifiering av naturen</h3>
      <p id="contextText4">
        Naturen var inte bara landskap för romantiker; Det var en levande, andlig kraft som ingav vördnad och erbjöd moralisk vägledning. De kontrasterar dess vilda skönhet med föroreningarna och fabrikerna i industristäder. Poeter beskrev berg, stormar och skogar som källor till helande eller gudomlig närvaro, kapabla att överväldiga sinnet och väcka djupa känslor.
      </p>
      <h3 id="contextTitle5">Betoning på individualism</h3>
      <p id="contextText5">
        Romantiker hyllade de unika människor som stod utanför samhället. Denna "romantiska hjälte" var ofta en rebell eller ett plågat geni som trotsade konventioner för att söka personlig sanning. De värderade självuttryck och äkthet högre än sociala normer, vilket belyser konflikten mellan individen och den konformistiska världen.
      </p>
      <h3 id="contextTitle6">Det sublima</h3>
      <p id="contextText6">
        Det sublima syftade på upplevelser av överväldigande känslor som fick människor att känna sig både obetydliga och upphöjda, som att stå framför ett rasande hav eller en oändlig stjärnhimmel. Folk sökte naturens överväldigande skönhet i konsten.
      </p>
    </div>

    <div id="analysis" class="section">
      <h2 id="analysisTitle">Analys</h2>
      <p id="analysisText">
        Victor skapar liv men avvisar slutligen sin skapelse. Detta visar farorna
        med vetenskap utan etiska överväganden.
      </p>
    </div>

    <div id="modern" class="section">
      <h2 id="modernTitle">AI & Samhället Idag</h2>
      <p id="modernText">
        Idag utvecklar vi artificiell intelligens. Vi måste ta ansvar för hur den
        används.
      </p>
    </div>

    <div id="conclusion" class="section">
      <h2 id="conclusionTitle">Slutsats</h2>
      <p id="conclusionText">
        <em>Frankenstein</em> är fortfarande relevant eftersom AI väcker samma
        etiska frågor idag.
      </p>
    </div>
  `,
};

function setLang(lang) {
  document.querySelector(".main").innerHTML = translations[lang];
}

setLang("sv");
