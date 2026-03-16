function addScrollEvents() {
  document.querySelectorAll(".click-buttons").forEach(button => {
    button.addEventListener("click", (e) => {
      const targetId = e.currentTarget.name;
      const section = document.getElementById(targetId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}


const translations = {
  en: `
    <div class="hero">
      <h1 id="hero-title">Artificial Intelligence & Ethics</h1>
      <p id="intro">A study of Frankenstein and modern AI relationships.</p>
    </div>

    <div class="buttons">
      <button name="author" class="click-buttons">Author</button>
      <button name="context" class="click-buttons">Context</button>
      <button name="analysis" class="click-buttons">Analysis</button>
      <button name="modern" class="click-buttons">AI Today</button>
      <button name="conclusion" class="click-buttons">Conclusion</button>
    </div>

    <div id="author" class="section">
      <h2 id="authorTitle">About the Author</h2>
      <p id="authorText">Mary Shelley was an English writer born in 1797. She wrote Frankenstein at age 18.</p>
    </div>

    <div id="context" class="section">
      <h2 id="contextTitle">Historical Context</h2>
      <p id="contextText">Great Britain is often described as the birthplace of the Industrial Revolution...</p>
      <h2 id="contextTitle2">Literary Context</h2>
      <p id="contextText2">Mary Shelley wrote Frankenstein during the Romantic period...</p>
      <h3 id="contextTitle3">Emotion over Reason</h3>
      <p id="contextText3">People believed that deep feelings revealed truths that logic alone could not...</p>
      <h3 id="contextTitle4">Glorification of Nature</h3>
      <p id="contextText4">Nature inspired awe and offered moral guidance...</p>
      <h3 id="contextTitle5">Emphasis on Individualism</h3>
      <p id="contextText5">Romantics celebrated unique individuals, the "Romantic hero"...</p>
      <h3 id="contextTitle6">The Sublime</h3>
      <p id="contextText6">Experiences of overwhelming beauty or terror elevated the soul...</p>
    </div>

    <div id="analysis" class="section">
      <h2 id="analysisTitle">Analysis</h2>
      <p id="analysisText">
        In the novel <em>Frankenstein</em>, one of the main themes is responsibility. The story shows what can happen when someone creates something but does not take responsibility for it.<br><br>

        Victor Frankenstein is a young scientist who becomes very interested in discovering the secret of life. After many experiments, he finally creates a living creature. But when the creature comes to life, Victor becomes scared of it. Instead of helping his creation, he runs away and abandons it.<br><br>

        At the beginning, the creature is not evil. He is curious and wants to understand the world. He secretly watches a family and learns how people speak and live. What he really wants is friendship and to be accepted by others. However, because of his scary appearance, people are afraid of him and reject him.<br><br>

        Because the creature feels lonely and rejected, he becomes angry and wants revenge against Victor. Through this story, the author, Mary Shelley, shows that the real problem is not creating the creature, but abandoning it and not taking responsibility.<br><br>

        Today, we can compare this idea to modern technology like artificial intelligence. Scientists and companies are creating powerful AI systems that can influence many parts of society. Just like Victor Frankenstein created something without thinking about the consequences, today people are asking similar questions about technology. If AI systems make mistakes or cause harm, who is responsible? This shows that the message of Frankenstein is still very relevant today.<br><br>

        The novel also teaches empathy. If Victor had guided the creature and shown care, much suffering could have been avoided. Responsibility is not only about creating, but also about helping and guiding.<br><br>

        Society also plays a role. The creature is rejected because of his appearance. Isolation can turn curiosity into anger and pain. This shows that responsibility can extend beyond the creator to the community.<br><br>

        Finally, <em>Frankenstein</em> raises timeless questions: What are our duties to what we create? Who is responsible if creations cause harm? These ideas apply to AI and modern technology today, showing that Shelley’s lessons remain important.<br><br>

        Source: Wikipedia – <a href="https://en.wikipedia.org/wiki/Frankenstein" target="_blank">Frankenstein</a>
      </p>
    </div>

    <div id="modern" class="section">
      <h2 id="modernTitle">AI & Modern Society</h2>
      <p id="modernText">Today we create artificial intelligence. We must take responsibility for it.</p>
      
    </div>

    <div id="conclusion" class="section">
      <h2 id="conclusionTitle">Conclusion</h2>
      <p id="conclusionText">Frankenstein still matters because AI raises the same ethical questions today.</p>
    </div>
  `,

  sv: `
    <div class="hero">
      <h1 id="hero-title">Artificiell Intelligens & Etik</h1>
      <p id="intro">En studie av Frankenstein och moderna AI-relationer.</p>
    </div>

    <div class="buttons">
      <button name="author" class="click-buttons">Författare</button>
      <button name="context" class="click-buttons">Kontext</button>
      <button name="analysis" class="click-buttons">Analys</button>
      <button name="modern" class="click-buttons">AI Idag</button>
      <button name="conclusion" class="click-buttons">Slutsats</button>
    </div>

    <div id="author" class="section">
      <h2 id="authorTitle">Om Författaren</h2>
      <p id="authorText">Mary Shelley var en engelsk författare född 1797. Hon skrev Frankenstein vid 18 års ålder.</p>
    </div>

    <div id="context" class="section">
      <h2 id="contextTitle">Historisk Kontext</h2>
      <p id="contextText">Storbritannien beskrivs ofta som födelseplatsen för den industriella revolutionen...</p>
      <h2 id="contextTitle2">Litterär Kontext</h2>
      <p id="contextText2">Mary Shelley skrev Frankenstein under den romantiska perioden...</p>
      <h3 id="contextTitle3">Känsla över Förnuft</h3>
      <p id="contextText3">Folk trodde att djupa känslor avslöjade sanningar som logiken inte kunde...</p>
      <h3 id="contextTitle4">Förhärligande av Naturen</h3>
      <p id="contextText4">Naturen inspirerade vördnad och erbjöd moralisk vägledning...</p>
      <h3 id="contextTitle5">Betoning på Individualism</h3>
      <p id="contextText5">Romantiker hyllade unika individer, den "romantiska hjälten"...</p>
      <h3 id="contextTitle6">Det Sublima</h3>
      <p id="contextText6">Upplevelser av överväldigande skönhet eller skräck upphöjde själen...</p>
    </div>

    <div id="analysis" class="section">
      <h2 id="analysisTitle">Analys</h2>
      <p id="analysisText">
        I <em>Frankenstein</em> är ett av huvudtemana ansvar. Berättelsen visar vad som kan hända när någon skapar något men inte tar hand om det eller vägleder det.<br><br>

        Victor Frankenstein är en ung vetenskapsman. Han är mycket nyfiken och vill upptäcka livets hemlighet. Efter många experiment skapar han slutligen en levande varelse. Men när den kommer till liv blir Victor rädd. Istället för att hjälpa den flyr han och lämnar varelsen ensam. Detta visar att det inte räcker att skapa något; man måste också ta ansvar för det.<br><br>

        I början är varelsen inte ond. Han är nyfiken på världen och vill lära sig. Han iakttar en familj i hemlighet och ser hur människor lever, talar och beter sig. Varelsen vill ha vänskap och acceptans, men människor är rädda för honom på grund av hans utseende. De avvisar honom, och detta gör honom ensam och ledsen.<br><br>

        Varelsens ensamhet leder till ilska. Han vill hämnas på Victor för att han övergav honom. Mary Shelley visar att problemet inte är skapelsen i sig, utan Victors brist på ansvar. Detta lär oss en viktig läxa: försummelse och rädsla kan orsaka skada, även om avsikten var god.<br><br>

        Victors berättelse lär oss också om etik inom vetenskap. Kunskap och färdighet räcker inte. Skapare måste tänka på konsekvenserna av sina handlingar. Om man ignorerar hur ens skapelse påverkar andra kan det leda till lidande och fara. Shelley uppmanar oss att fråga: vad är rätt att göra efter att ha skapat något kraftfullt?<br><br>

        Vi kan jämföra detta med modern teknologi som artificiell intelligens. Idag skapar forskare och företag AI-system som kan påverka miljontals människor. AI kan hjälpa, men kan också göra fel. Om ett AI-system orsakar skada, vem är ansvarig? Precis som Victor måste skapare tänka på ansvar, etik och säkerhet innan de släpper sin skapelse.<br><br>

        Berättelsen visar också vikten av empati. Om Victor hade brytt sig om varelsen och hjälpt honom att förstå hur man lever med människor, kunde många tragedier ha undvikits. På samma sätt måste vi inom teknologi vägleda och utbilda användare och tänka på människan vid innovation.<br><br>

        En annan viktig lärdom handlar om samhälle och acceptans. Varelsen ville ha kärlek och vänskap, men samhället dömde honom efter hans utseende. Shelley påminner oss om att avvisande och isolering kan skapa ilska och smärta. Detta gäller också människor idag – förståelse och vänlighet kan förebygga konflikter.<br><br>

        Slutligen är <em>Frankenstein</em> fortfarande relevant idag. Den väcker frågor om skapande, ansvar, etik och konsekvenser. Dessa frågor gäller AI, robotik och andra kraftfulla verktyg. Vi måste alltid fråga oss: hur påverkar våra handlingar andra, och vilket ansvar har vi för det vi skapar? Genom att tänka noga och agera ansvarsfullt kan vi undvika de misstag som berättelsen visar.<br><br>

        Källa: Wikipedia – <a href="https://en.wikipedia.org/wiki/Frankenstein" target="_blank">Frankenstein</a>
      
        </p>
    </div>

    <div id="modern" class="section">
      <h2 id="modernTitle">AI & Samhället Idag</h2>
      <p id="modernText">Idag utvecklar vi artificiell intelligens. Vi måste ta ansvar för hur den används.</p>
    </div>

    <div id="conclusion" class="section">
      <h2 id="conclusionTitle">Slutsats</h2>
      <p id="conclusionText">Frankenstein är fortfarande relevant eftersom AI väcker samma etiska frågor idag.</p>
    </div>
  `
};


function setLang(lang) {
  document.querySelector(".main").innerHTML = translations[lang];
  addScrollEvents(); 
}


setLang("sv");