document.querySelectorAll(".click-buttons").forEach(button => {
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
    </div>

    <section id="author" class="section">
      <div class="innehåll">
        <img src="./image/swe-flag.png">
        <div class="card-text">
          <h2 id="authorTitle">About the Author</h2>
          <p id="authorText">
            Mary Shelley was an English writer born in 1797. She wrote Frankenstein
            at age 18. Mary Shelley was an English writer born in 1797. She wrote Frankenstein
            at age 18. Mary Shelley was an English writer born in 1797. She wrote Frankenstein
            at age 18. Mary Shelley was an English writer born in 1797. She wrote Frankenstein
            at age 18.
          </p>
        </div>
      </div>
    </section>
    <section id="context" class="section">
      <div class="innehåll">
        <img src="./image/swe-flag.png">
        <div class="card-text">  
          <h2 id="contextTitle">Historical Context</h2>
          <p id="contextText">
            The novel was written during the Industrial Revolution, when people
            feared new technology.
          </p>
        </div>
      </div>
    </section>

    <section id="analysis" class="section">
      <div class="innehåll">
        <img src="./image/swe-flag.png">
        <div class="card-text">
          <h2 id="analysisTitle">Analysis</h2>
          <p id="analysisText">
            Victor creates life but rejects his creation. This shows the danger of
            science without ethics.
          </p>
        </div>
      </div>
    </section>
    
    <section id="modern" class="section">
      <div class="innehåll">
        <img src="./image/swe-flag.png">
        <div class="card-text">
          <h2 id="modernTitle">AI & Modern Society</h2>
          <p id="modernText">
            Today we create artificial intelligence. We must take responsibility for
            it.
          </p>
        </div>
      </div>
    </section>
    
    <section id="conclusion" class="section">
      <div class="innehåll">
        <img src="./image/swe-flag.png">
        <div class="card-text">
          <h2 id="conclusionTitle">Conclusion</h2>
          <p id="conclusionText">
            Frankenstein still matters because AI raises the same ethical questions
            today.
          </p>
        </div>
      </div>
    </section>
    `,

  sv: `

  <div class="hero">
    <h1 id="title">Artificiell intelligens och etik</h1>
    <p id="intro">En studie av Frankenstein och relationen till modern AI.</p>
  </div>

  <div class="buttons">
    <button name="author" class="click-buttons">Författare</button>
    <button name="context" class="click-buttons">Historisk kontext</button>
    <button name="analysis" class="click-buttons">Analys</button>
    <button name="modern" class="click-buttons">AI idag</button>
    <button name="conclusion" class="click-buttons">Slutsats</button>
  </div>

  <section id="author" class="section">
    <div class="innehåll">
      <img src="./image/swe-flag.png">
      <div class="card-text">
        <h2 id="authorTitle">Om författaren</h2>
        <p id="authorText">
          Mary Shelley var en engelsk författare född 1797. Hon skrev Frankenstein
          när hon var 18 år gammal.
        </p>
      </div>
    </div>
  </section>

  <section id="context" class="section">
    <div class="innehåll">
      <img src="./image/swe-flag.png">
      <div class="card-text">  
        <h2 id="contextTitle">Historisk kontext</h2>
        <p id="contextText">
          Romanen skrevs under den industriella revolutionen, när människor
          var rädda för ny teknologi.
        </p>
      </div>
    </div>
  </section>

  <section id="analysis" class="section">
    <div class="innehåll">
      <img src="./image/swe-flag.png">
      <div class="card-text">
        <h2 id="analysisTitle">Analys</h2>
        <p id="analysisText">
          Victor skapar liv men förkastar sin skapelse. Detta visar faran med
          vetenskap utan etik.
        </p>
      </div>
    </div>
  </section>

  <section id="modern" class="section">
    <div class="innehåll">
      <img src="./image/swe-flag.png">
      <div class="card-text">
        <h2 id="modernTitle">AI och det moderna samhället</h2>
        <p id="modernText">
          Idag skapar vi artificiell intelligens. Vi måste ta ansvar för den.
        </p>
      </div>
    </div>
  </section>

  <section id="conclusion" class="section">
    <div class="innehåll">
      <img src="./image/swe-flag.png">
      <div class="card-text">
        <h2 id="conclusionTitle">Slutsats</h2>
        <p id="conclusionText">
          Frankenstein är fortfarande relevant eftersom AI väcker samma etiska frågor idag.
        </p>
      </div>
    </div>
  </section>
  `,
};

function setLang(lang) {
  document.querySelector(".main").innerHTML = translations[lang]
}

setLang("sv")