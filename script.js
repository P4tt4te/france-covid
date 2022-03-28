var cas;
var morts;
var hospital;
var date;
var annee;
var mois;
var jour;

var boxcas = document.querySelector('.boxcas>span');
var boxnewcas = document.querySelector('.boxcas>span.maj');
var boxmorts = document.querySelector('.boxmorts>span');
var boxnewmorts = document.querySelector('.boxmorts>span.maj');
var boxhospital = document.querySelector('.boxhospital>span');
var boxdate = document.querySelector('.maj>span');

window.addEventListener('load', requete);
/* requete pour récupérer les informations par rapport au covid-19 */
async function requete(evt) {
	await fetch("https://covid-193.p.rapidapi.com/statistics?country=france", {
			"method": "GET",
			"headers": {
				"x-rapidapi-host": "covid-193.p.rapidapi.com",
				"x-rapidapi-key": "2d024dd615msh1eab2c47260e3bfp1b9a61jsn10d150aa6b43"
			}
		})
		.then(response => {
			console.log(response);
			return response.json();
		})
		.then(function (object) {
			object = object.response;
			console.log(object.response);
			cas = object[0].cases.active;
			boxnewcas.textContent = object[0].cases.new;
			boxcas.textContent = cas.toLocaleString();
			morts = object[0].deaths.total;
			boxnewmorts.textContent = object[0].deaths.new;
			boxmorts.textContent = morts.toLocaleString();
			hospital = object[0].cases.critical;
			boxhospital.textContent = hospital.toLocaleString();
			date = object[0].day;
			boxdate.textContent = date;
			console.log(date);

		})
		.catch(err => {
			console.error(err);
			console.log("L'api n'est plus mis à jour.");
		});

}


/* fonction pour mettre en forme la date du jour 
	PLUS BESOIN DANS LA NOUVELLE API
function separerdate() {
	var tab = date.split('-');
	annee = tab[0];
	mois = tab[1];
	jour = tab[2].substr(0,2);
	console.log(annee);
	console.log(mois);
	console.log(jour);
	boxdate.textContent = jour + " / " + mois + " / " + annee;
}

*/