function myFunz() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let subject = document.getElementById("subject").value;
  let message = document.getElementById("message").value;

  if (name == "") {
    alert("Inserisci il tuo Nome e Cognome");
  }else if (email == "") {
    alert("Inserisci il tuo Indirizzo Email");
  }else if (subject == "") {
    alert("Inserisci l'Oggetto di Richiesta");
  }else if (message == "") {
    alert("Inserisci il Messaggio");
  }else 
	alert("Nome: " + name + "\nEmail: " + email + "\nOggetto: " + subject + "\nMessaggio: " + message); 
	return false;
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

function descMon(mon){
	const ris=document.getElementById("pippo");
	if(mon==1){
		ris.innerHTML="<h1>Fosse Andeatine</h1>"+" <img src='img/fosse.jpg' alt='fosse' border='0' width='700px' height='500px'>"+"<h2>Le Fosse Ardeatine sono un luogo di commemorazione a Roma, che ricorda un evento tragico della Seconda Guerra Mondiale. Il 24 marzo 1944, in risposta a un attentato partigiano, le forze tedesche uccisero 335 prigionieri italiani. Furono portati alle Fosse Ardeatine, una serie di cave, e fucilati. Questo terribile episodio è ora ricordato come un memoriale per onorare le vittime e ricordare le atrocità della guerra.</h2>";		
	}
	if(mon==2){  
		ris.innerHTML="<h1>Catacombe di San Callisto</h1>"+" <img src='img/cal.jpg' alt='callisto' border='0' width='700px' height='500px'>"+"<h2>Le Catacombe di San Callisto sono uno dei più importanti complessi di catacombe cristiane a Roma, furono il cimitero ufficiale della Chiesa di Roma nel III secolo. In esse furono sepolti circa mezzo milione di cristiani, tra cui decine di martiri e sedici pontefici. </h2>";

	}
	if(mon==3){
		ris.innerHTML="<h1>Museo Jago</h1>"+" <img src='img/jago.jpg' alt='jago' border='0' width='700px' height='500px'>"+"<h2>Il Museo Jago a Napoli è un museo d'arte contemporanea dedicato alla collezione privata dell'imprenditore e collezionista d'arte Vincenzo Agovino, noto anche come Jago. La collezione del museo include opere di numerosi artisti contemporanei italiani e internazionali, tra cui dipinti, sculture, installazioni e opere multimediali.</h2>";
	}
	if(mon==4){
		ris.innerHTML="<h1>Museo Cappella Sansevero</h1>"+" <img src='img/dr.jpg' alt='MCS' border='0' width='700px' height='500px'>"+"<h2>La Cappella Sansevero è una chiesa storica situata nel centro storico di Napoli. La sua principale attrazione è il Museo Cappella Sansevero, che si trova all'interno della chiesa, è famoso per le sue straordinarie opere d'arte.</h2>";
	}
	if(mon==5){
		ris.innerHTML="<h1>Galleria Umberto I</h1>"+" <img src='img/umb.jpg' alt='umberto' border='0' width='700px' height='500px'>"+"<h2>La Galleria Umberto I è una galleria commerciale storica situata nel centro di Napoli, è caratterizzata da una grande cupola in vetro e ferro battuto, circondata da quattro bracci che formano una croce, con una galleria superiore che si affaccia sul livello inferiore.</h2>";
	}
	if(mon==6){
		ris.innerHTML="<h1>Piazza del Plebiscito</h1>"+" <img src='img/piaz.jpg' alt='piaz' border='0' width='700px' height='500px'>"+"<h2>Piazza del Plebiscito è una delle piazze pubbliche più grandi di Napoli, si trova nel centro storico della città ed è adiacente al Palazzo Reale di Napoli e alla Chiesa di San Francesco di Paola. La piazza è significativa per la sua importanza storica e architettonica.</h2>"+"<h1>Castel dell'ovo</h1>"+" <img src='img/arc.jpg' alt='ovo' border='0' width='700px' height='500px'>"+"<h2>Il Castel dell'Ovo è una fortezza situata nel Golfo di Napoli, si trova su un isolotto roccioso chiamato Megaride, che è collegato alla terraferma dal lungomare di Napoli. Il castello è uno dei simboli più importanti della città e ha una storia ricca di leggende e tradizioni.</h2>";
	}
	if(mon==7){
		ris.innerHTML="<h1>Pompei</h1>"+" <img src='img/bat.jpg' alt='pompei' border='0' width='700px' height='500px'>"+"<h2>Pompei è un sito archeologico straordinario situato vicino alla città di Napoli. È famoso in tutto il mondo per essere stata una città romana sepolta sotto ceneri e lapilli durante l'eruzione del Vesuvio nel 79 d.C. L'ottimo stato di conservazione del sito offre ai visitatori un'opportunità unica di esplorare la vita quotidiana dell'antica Roma</h2>"
	}
		if(mon==8){
		ris.innerHTML="<h1>Sentiero Gran cono</h1>"+" <img src='img/cn.jpg' alt='vesuvio' border='0' width='700px' height='500px'>"+"<h2>Il Sentiero Gran Cono è un percorso escursionistico che si trova nel Parco Nazionale del Vesuvio, il Gran Cono è la cima principale del vulcano Vesuvio, noto per la sua eruzione del 79 d.C., che distrusse le città romane di Pompei e Ercolano. </h2>"
	}
		if(mon==9){
		ris.innerHTML="<h1>Duomo</h1>"+" <img src='img/dum.jpg' alt='duomo' border='0' width='700px' height='500px'>"+"<h2>Il Duomo di Napoli, dedicato a San Gennaro, è una delle principali chiese di Napoli, e una delle più importanti dal punto di vista storico e artistico.</h2>"+"<h1>Napoli Sotteranea</h1>"+" <img src='img/cata.jpg' alt='cata' border='0' width='700px' height='500px'>"+"<h2>Napoli sotterranea è una rete di gallerie, tunnel e cavità sotterranee che si estende sotto il centro storico di Napoli, questo intricato labirinto di passaggi è stato scavato nel corso dei secoli per vari scopi, tra cui la costruzione di cave di tufo, l'approvvigionamento idrico, la difesa militare e come rifugi durante periodi di guerra.</h2>"
	}
	if(mon==10){
		ris.innerHTML="<h1>Reggia di Caserta</h1>"+" <img src='img/pino.jpg' alt='reggia' border='0' width='700px' height='500px'>"+"<h2>La Reggia di Caserta è un maestoso palazzo reale situato nella città di Caserta, è considerato uno dei più grandi palazzi reali mai costruiti e rappresenta un capolavoro dell'architettura barocca e neoclassica.</h2>";
	}
}


let immagini = [
    "img/pino.jpg",
    "img/arc.jpg",
    "img/bat.jpg",
    "img/calo.jpg",
    "img/cata.jpg",
    "img/cn.jpg",
    "img/dr.jpg",
    "img/fr.jpg",
    "img/umb.jpg",
    "img/dum.jpg"
];
		let immagineCorrente = 0;
		function indietro() {
			if (immagineCorrente === 0) {
    immagineCorrente = immagini.length - 1;
	} else {
    immagineCorrente--;
	}
			document.getElementById("immagine").src = immagini[immagineCorrente];
		}
		function avanti() {
		if (immagineCorrente === immagini.length - 1) {
    immagineCorrente = 0;
	} else {
    immagineCorrente++;
	}
			document.getElementById("immagine").src = immagini[immagineCorrente];
		}
