document.querySelectorAll(".click-buttons").forEach(button => {
    button.addEventListener("click", (e) => {
      document.getElementById(e.target.name).scrollIntoView();
    });
  });





const translations = {
  en: `
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
        The novel was written during the Industrial Revolution, when people
        feared new technology.
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
    <div id="author" class="section">
      <h2 id="authorTitle">Om Författaren</h2>
      <p id="authorText">
        Mary Shelley var en engelsk författare född 1797. Hon skrev <em>Frankenstein</em>
        vid 18 års ålder.
      </p>
    </div>

    <div id="context" class="section">
      <h2 id="contextTitle">Historisk Kontekst</h2>
      <p id="contextText">
        Romanen skrevs under den industriella revolutionen, en tid då människor
        var rädda för ny teknologi.
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
  document.querySelector(".main").innerHTML = translations[lang]
}

setLang("sv")