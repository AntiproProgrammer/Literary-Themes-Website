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
      <p id="authorText">About the Author
        Basic facts about Mary Shelley
        Born 1797 30 august London- somers town dead 1851 first january in chester square london Mary Shelley is a British author known for Frankenstein which was published anonymously in 1818 and she started writing it when she was 18 years old. The reason behind writing such a bizarre story was based on a trip she made to Germany in Gernsheim which was close to the “Frankenstein castle” which many believe was an inspiration to the novel.<br><br>





        Why she was typical or unusual for her time

        It was very unusual for young women to become famous authors as she wrote Frankenstein aged 18 years old. Her novel also helped create the “science fiction” genre with Frankenstein technically being the first work of that kind.

        Her influence on society 
        Ideas:
        Big influence on the science fiction genre making Frankenstein which was unusual because it mixed science with imaginative storytelling. The concept was way ahead of its time and explored concepts like creating life through science before biotechnology existed. Frankenstein apparently sparked debates about science like for example if science should create life if they could? or what happens when technology advances faster than ethics? and similar themes are discussed today like for example AI. It also influenced a lot of people and is why Frankenstein is still getting adaptations to this day.<br><br>

        Timeline of her life
        1797-Birth 30th august she war born in london, England
        Her parents were famous intellectuals. Mary Wollenstonecraft-author who wrote “A vindication of the rights of woman”, William Godwin- who was also an author. Her mother died 11 days after birth which shaped her childhood
        1814- At age 16 she runs off to Europe with poet Percy Bysshe Shelley (a married admirer of her fathers ideas) along with her stepdaughter Claire. This bold move caused a family scandal in which she was cut off from her father for years.
        1815 First child (Clara) born prematurely and dies in infancy<br><br>
        1816- The famous “haunted summer” occurred in Geneva which was a stormy and cold summer which led to lake geneva flooding and animal corpses filled the area nearby where Percy, Claire and lord Nyron inspires her to write frankenstein. Their son William is born
        1817 she finishes writing Frankenstein and  publishes her first work “History of a six weeks tour” which she and Percy released together.
        1818: Frankenstein; or, The Modern Prometheus published anonymously at 20 years of age and was considered an immediate sensation, often credited to Percy initially. During the year the Family moves to Italy and another infant daughter dies.
        1819 William dies of malaria age 3. and the same year of the birth of Percy Florence who is the only child that survives adulthood.
        1822: Percy Shelley drowns in boating accident (age 29) returns to England, preserves his heart as relic, edits/publishes his works for legacy and income.
        1831: Revised edition of Frankenstein published under her own name, with famous introduction on
        1851: Dies in London at 53 (brain tumor). Legacy: Creator of Frankenstein—foundational Gothic/science fiction exploring creation, responsibility, isolation—shaped by radical upbringing, bold rebellion, and profound losses.</p>
    </div>

    <div id="context" class="section">
      <h2 id="contextTitle">Historical Context</h2>
      <p id="contextText">Great Britain is often described as the birthplace of the Industrial Revolution, a period from about the late 1700s when production moved from small workshops and farms to large factories with machines. New inventions in textiles, steam power and iron made it possible to produce goods much faster and more cheaply than before. Many people moved from the countryside to crowded industrial cities and taking a factory job became a common practice, creating new social problems. The working conditions in said factories were famously horrible. The workers, including children, had often worked 12-14 hours a day in dangerous conditions with only a day off only to receive a low wage.</p>
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
      <p id="contextText7">Source: <a href="https://en.wikipedia.org/wiki/Romanticism" target="_blank">Wikipedia</a></p>
    
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
      <h2 id="authorTitle">Om författaren</h2>
      <p id="authorText">
        Grundläggande fakta om Mary Shelley<br>
        Född 30 augusti 1797 i London (Somers Town) – dog 1 januari 1851 i Chester Square, London. Mary Shelley var en brittisk författare känd för <em>Frankenstein</em>, som publicerades anonymt år 1818. Hon började skriva boken när hon var 18 år gammal. Idén till den ovanliga berättelsen kom från en resa hon gjorde till Tyskland, i Gernsheim, nära “Frankenstein-slottet”, som många tror inspirerade romanen.<br><br>

        Varför hon var typisk eller ovanlig för sin tid<br>
        Det var mycket ovanligt för unga kvinnor att bli kända författare, särskilt i så ung ålder som 18 år. Hennes roman bidrog också till att skapa genren “science fiction”, och <em>Frankenstein</em> räknas ofta som ett av de första verken i denna genre.<br><br>

        Hennes påverkan på samhället<br>
        Mary Shelley hade stor påverkan på science fiction-genren genom att kombinera vetenskap med fantasi. Idén var långt före sin tid och utforskade koncept som att skapa liv genom vetenskap, långt innan modern bioteknik existerade. <em>Frankenstein</em> startade också diskussioner om vetenskapens roll, till exempel om man bör skapa liv bara för att man kan, och vad som händer när teknologin utvecklas snabbare än etiken. Dessa frågor är fortfarande aktuella idag, till exempel inom AI. Boken har också påverkat många människor och fortsätter att få nya film- och teateradaptioner.<br><br>

        Tidslinje över hennes liv<br>
        1797 – Född 30 augusti i London, England. Hennes föräldrar var kända intellektuella: Mary Wollstonecraft, som skrev <em>A Vindication of the Rights of Woman</em>, och William Godwin, som också var författare. Hennes mamma dog 11 dagar efter hennes födelse, vilket påverkade hennes uppväxt.<br><br>

        1814 – Vid 16 års ålder rymmer hon till Europa med poeten Percy Bysshe Shelley (som var gift) tillsammans med sin styvsyster Claire. Detta skapade en stor skandal och hon bröt kontakten med sin far i flera år.<br><br>

        1815 – Första barnet (Clara) föds för tidigt och dör som spädbarn.<br><br>

        1816 – Den berömda “spöksommaren” i Genève. Det var en kall och stormig sommar som ledde till översvämningar runt Genèvesjön. Under denna tid inspirerades hon att skriva <em>Frankenstein</em>. Samma år föds deras son William.<br><br>

        1817 – Hon avslutar <em>Frankenstein</em> och publicerar sitt första verk <em>History of a Six Weeks’ Tour</em> tillsammans med Percy.<br><br>

        1818 – <em>Frankenstein; or, The Modern Prometheus</em> publiceras anonymt när hon är 20 år gammal och blir snabbt mycket uppmärksammad. Familjen flyttar till Italien och ytterligare en dotter dör som spädbarn.<br><br>

        1819 – Sonen William dör i malaria vid 3 års ålder. Samma år föds Percy Florence, som blir det enda barnet som överlever till vuxen ålder.<br><br>

        1822 – Percy Shelley drunknar i en båtolycka vid 29 års ålder. Mary återvänder till England, bevarar hans hjärta som minne och redigerar/publicerar hans verk.<br><br>

        1831 – En reviderad version av <em>Frankenstein</em> publiceras under hennes eget namn, med en känd introduktion.<br><br>

        1851 – Hon dör i London vid 53 års ålder (hjärntumör). Hennes arv: skaparen av <em>Frankenstein</em> – en grundläggande gotisk och science fiction-berättelse om skapelse, ansvar och isolering, formad av hennes livserfarenheter.
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
      <p id="contextText7">Källa: <a href="https://en.wikipedia.org/wiki/Romanticism" target="_blank">Wikipedia</a></p>
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