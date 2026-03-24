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
      <p id="contextText">Great Britain is often described as the birthplace of the Industrial Revolution, a period from about the late 1700s when production moved from small workshops and farms to large factories with machines. New inventions in textiles, steam power and iron made it possible to produce goods much faster and more cheaply than before. Many people moved from the countryside to crowded industrial cities and taking a factory job became a common practice, creating new social problems. The working conditions in said factories were famously horrible. The workers, including children, had often worked 12-14 hours a day in dangerous conditions with only a day off only to receive a low wage. "</p>
      <h2 id="contextTitle2">Literary Context</h2>
      <p id="contextText2">Mary Shelley wrote Frankenstein during the Romantic period, an artistic and intellectual movement that began in Europe towards the end of the 18th century. Throughout this time, due to the Industrial revolution and the harsh realities discussed during the Age of Enlightenment people began to believe that individualism,emotions and nature should be held at the highest priority, especially in the arts. Four key ideas stood out: Emotion over reason, glorification of nature,emphasis on individualism and the sublime.</p>
      <h3 id="contextTitle3">Emotion over Reason</h3>
      <p id="contextText3">People believed that deep feelings–such as passion, joy, terror, or sorrow–revealed truths that logic alone could not. They rejected the Enlightenment idea that humans should suppress emotions in favour of rational analysis. Writers like William Wordsworth urged people to trust their intuition and inner experiences, often exploring psychological depth and the power of imagination to create new realities.</p>
      <h3 id="contextTitle4">Glorification of Nature</h3>
      <p id="contextText4">Nature was not just scenery for Romantics; it was a living, spiritual force that inspired awe and offered moral guidance. They contrasted its wild beauty with the pollution and factories of industrial cities. Poets described mountains, storms, and forests as sources of healing or divine presence, capable of overwhelming the sense and stirring profound emotions</p>
      <h3 id="contextTitle5">Emphasis on Individualism</h3>
      <p id="contextText5">Romantics celebrated the unique people who stood apart from society. this “Romantic hero” was often a rebel or a tortured genius defying conventions to pursue personal truth. They valued self-expression and authenticity over social norms, highlighting the conflict between the individual and conformist world.</p>
      <h3 id="contextTitle6">The Sublime</h3>
      <p id="contextText6">The sublime referred to experiences of overwhelming emotions that made people feel both insignificant and exalted, like standing before a raging ocean or endless starry sky. People sought the overwhelming beauty of nature in art.</p>
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
      <p id="modernText">Mary Shelley’s Frankenstein raises a question that has become even more relevant in the modern age of artificial intelligence: What responsibility does a creator have once their creation exists? In the novel, Victor Frankenstein becomes obsessed with the scientific achievement of creating life, but he completely neglects the ethical responsibilities that follow.<br><br> Immediately after bringing the creature to life, he abandons it in fear and disgust. This lack of guidance, care, and accountability ultimately leads to suffering for both the creature and the people around him.<br><br>
      Shelley’s story suggests that creation is not only about innovation or discovery it also involves ongoing responsibility. The tragedy of Frankenstein is not simply that Victor creates life, but that he fails to take responsibility for it afterward. Modern scholars argue that the novel remains a powerful warning about scientific ambition without ethical reflection, especially when discussing modern technologies such as artificial intelligence. <br><br>
      Today, scientists and technology companies are developing increasingly powerful AI systems capable of influencing many areas of society from automated hiring systems to generative AI tools that can produce human like text and images. As these technologies become more common, researchers warn that creators must consider ethical risk such as bias, lack of accountability, and unintended consequences.


      One major concern is the question of who is responsible when AI systems cause harm. AI systems can make decisions that affect people’s lives, such as filtering job applicants or assisting in medical or legal decisions. However, responsibility can become unclear wen decisions are made partly by algorithms rather than humans. Researchers describe this as a responsibility gap. Where it becomes difficult to determine who should be held accountable for an AI system’s actions.
      </p>
      
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
      <h2 id="contextTitle">Historisk kontext</h2>
      <p id="contextText">
        Storbritannien beskrivs ofta som födelseplatsen för den industriella revolutionen, en period från slutet av 1700-talet då produktionen flyttade från små verkstäder och gårdar till stora fabriker med maskiner. Nya uppfinningar inom textilier, ångkraft och järn gjorde det möjligt att producera varor mycket snabbare och billigare än tidigare. Många människor flyttade från landsbygden till trånga industristäder och att arbeta i fabrik blev vanligt, vilket skapade nya sociala problem. Arbetsförhållandena i dessa fabriker var kända för att vara mycket dåliga. Arbetarna, inklusive barn, arbetade ofta 12–14 timmar om dagen i farliga miljöer och fick låg lön.
      </p>

      <h2 id="contextTitle2">Litterär kontext</h2>
      <p id="contextText2">
        Mary Shelley skrev Frankenstein under romantiken, en konstnärlig och intellektuell rörelse som började i Europa i slutet av 1700-talet. Under denna tid, på grund av den industriella revolutionen och de hårda verkligheter som diskuterades under upplysningen, började människor tro att individualism, känslor och natur skulle ha högsta prioritet, särskilt inom konsten. Fyra viktiga idéer stack ut: känsla över förnuft, förhärligande av naturen, betoning på individualism och det sublima.
      </p>

      <h3 id="contextTitle3">Känsla över förnuft</h3>
      <p id="contextText3">
        Människor trodde att starka känslor – som passion, glädje, skräck eller sorg – kunde visa sanningar som logiken ensam inte kunde. De avvisade upplysningens idé att människor skulle trycka undan känslor till förmån för rationellt tänkande. Författare som William Wordsworth uppmuntrade människor att lita på sin intuition och sina inre upplevelser, och de utforskade ofta fantasin och människans psykologiska djup.
      </p>

      <h3 id="contextTitle4">Förhärligande av naturen</h3>
      <p id="contextText4">
        Naturen var inte bara bakgrund för romantikerna; den sågs som en levande och andlig kraft som skapade vördnad och gav moralisk vägledning. De jämförde naturens vilda skönhet med föroreningarna och fabrikerna i industristäder. Poeter beskrev berg, stormar och skogar som källor till helande eller gudomlig närvaro, som kunde väcka starka känslor.
      </p>

      <h3 id="contextTitle5">Betoning på individualism</h3>
      <p id="contextText5">
        Romantiker hyllade unika individer som stod utanför samhället. Den “romantiska hjälten” var ofta en rebell eller ett plågat geni som bröt mot regler för att hitta sin egen sanning. De värderade självuttryck och äkthet högre än sociala normer och visade konflikten mellan individen och samhället.
      </p>

      <h3 id="contextTitle6">Det sublima</h3>
      <p id="contextText6">
        Det sublima handlade om upplevelser av starka känslor som fick människor att känna sig både små och upphöjda, till exempel när man står framför ett stormande hav eller en oändlig stjärnhimmel. Människor sökte naturens mäktiga skönhet i konsten.
      </p>
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
      <p id="modernText">
        Mary Shelleys <em>Frankenstein</em> väcker en fråga som har blivit ännu mer relevant i dagens tid av artificiell intelligens: Vilket ansvar har en skapare när deras skapelse väl existerar? I romanen blir Victor Frankenstein besatt av den vetenskapliga prestationen att skapa liv, men han ignorerar helt det etiska ansvar som följer.<br><br>

        Direkt efter att han har gett varelsen liv överger han den i rädsla och avsky. Denna brist på vägledning, omsorg och ansvar leder till slut till lidande både för varelsen och människorna omkring honom.<br><br>

        Shelleys berättelse visar att skapande inte bara handlar om innovation eller upptäckt, utan också om ett fortsatt ansvar. Tragedin i <em>Frankenstein</em> är inte bara att Victor skapar liv, utan att han misslyckas med att ta ansvar för det efteråt. Moderna forskare menar att romanen fortfarande är en stark varning för vetenskaplig ambition utan etisk reflektion, särskilt när man diskuterar modern teknologi som artificiell intelligens.<br><br>

        Idag utvecklar forskare och teknikföretag allt mer avancerade AI-system som kan påverka många delar av samhället – från automatiserade rekryteringssystem till generativa AI-verktyg som kan skapa text och bilder som liknar människors. När dessa teknologier blir vanligare varnar forskare för att skapare måste ta hänsyn till etiska risker, såsom partiskhet, brist på ansvar och oväntade konsekvenser.<br><br>

        En viktig fråga är vem som är ansvarig när AI-system orsakar skada. AI kan fatta beslut som påverkar människors liv, till exempel genom att välja bort jobbsökande eller hjälpa till vid medicinska eller juridiska beslut. Men ansvaret kan bli otydligt när beslut tas delvis av algoritmer istället för människor. Forskare beskriver detta som ett "ansvarsglapp", där det blir svårt att avgöra vem som ska hållas ansvarig för ett AI-systems handlingar.
      </p>
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