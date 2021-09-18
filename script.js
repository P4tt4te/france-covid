var cas;
var morts;
var hospital;

var boxcas = document.querySelector('.boxcas>span');
var boxmorts = document.querySelector('.boxmorts>span');
var boxhospital = document.querySelector('.boxhospital>span');



fetch("https://covid-19-data.p.rapidapi.com/country?name=france", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "covid-19-data.p.rapidapi.com",
		"x-rapidapi-key": "2d024dd615msh1eab2c47260e3bfp1b9a61jsn10d150aa6b43"
	}
})
.then(response => {
	console.log(response);
  return response.json();
})
.then(function(object) {
  console.log(object);
  cas = object[0].confirmed;
  boxcas.textContent = cas;
  morts = object[0].deaths;
  boxmorts.textContent = morts;
  hospital = object[0].critical;
  boxhospital.textContent = hospital;

  hospital = object[0].confirmed;
  console.log(cas);
})
.catch(err => {
	console.error(err);
});
