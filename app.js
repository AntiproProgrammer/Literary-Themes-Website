function go(id){
    document.getElementById(id).scrollIntoView();
}

function setLang(lang){
    if(lang=="sv"){
        title.innerText="Artificiell Intelligens & Etik";
        intro.innerText="En studie av Frankenstein och moderna AI‑relationer.";

        authorTitle.innerText="Om författaren";
        authorText.innerText="Mary Shelley var en engelsk författare född 1797. Hon skrev Frankenstein när hon var 18.";

        contextTitle.innerText="Historisk kontext";
        contextText.innerText="Romanen skrevs under industriella revolutionen när människor fruktade ny teknologi.";

        analysisTitle.innerText="Analys";
        analysisText.innerText="Victor skapar liv men överger sin skapelse. Detta visar faran med vetenskap utan etik.";

        modernTitle.innerText="AI & Samhället idag";
        modernText.innerText="Idag skapar vi artificiell intelligens. Vi måste ta ansvar för den.";

        conclusionTitle.innerText="Slutsats";
        conclusionText.innerText="Frankenstein är fortfarande relevant eftersom AI skapar samma etiska frågor.";
    }

    if(lang=="en"){
        location.reload();
    }
}