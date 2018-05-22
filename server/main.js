import { Meteor } from 'meteor/meteor';
import {Students} from "../imports/api/students.js";
import * as d3 from "d3";


Meteor.startup(() => {
  // code to run on server at startup
  if(Meteor.isServer && Students.find().count()===0)
  {
  	// let data = d3.json("../imports/api/studentsData.json",function(data){
  		// let studentsData = data;
  		console.log(Students.find().count());
	  	studentsData.forEach((s)=>Students.insert(s));
	  	console.log(Students.find().fetch());
  	// });
  	
  }
});
//Sería conveniente tener constantes en archivos separados
var studentsData = 
[
{"nombre":"NICOLAS ACEVEDO SANDOVAL","seccion":1,"codigo":201530726,"twitteruser":"n_acevedo11","notas":[2,1,2,-1,2,2,0,2,2,-1,2,2,2,2,2,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],"idtweets":[]},
{"nombre":"GERMAN CAMILO ANDRADE MAYORGA","seccion":1,"codigo":201511422,"twitteruser":"gcandrade10","notas":[0,2,2,2,2,2,2,2,2,-1,2,1,1,1,2,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],"idtweets":[]},
{"nombre":"JUAN SEBASTIAN BARRAGAN JERONIMO","seccion":1,"codigo":201212774,"twitteruser":"sebas9064","notas":[2,2,2,2,2,2,2,2,1,-1,2,2,2,2,0,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],"idtweets":[]},
{"nombre":"NICOLAS EDUARDO CABRERA VENEGAS","seccion":1,"codigo":201530947,"twitteruser":"NicolasCabrer","notas":[2,2,2,0,2,2,2,2,2,2,2,2,2,1,2,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],"idtweets":[]},
{"nombre":"CAMILO ANDRES CARRILLO NIÑO","seccion":1,"codigo":201215749,"twitteruser":"CamiloC_Wk","notas":[2,2,2,2,-1,2,2,0,2,-1,1,0,1,2,-1,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],"idtweets":[]},
{"nombre":"SANTIAGO CORTES FERNANDEZ","seccion":1,"codigo":201531124,"twitteruser":"SantiagoCF96","notas":[2,1,2,2,2,2,2,2,1,2,2,2,2,2,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],"idtweets":[]},
{"nombre":"DAVID FERNANDO CUBILLOS SANCHEZ","seccion":1,"codigo":201412152,"twitteruser":"notDfCubillos","notas":[2,2,1,0,0,0,-1,1,1,0,2,1,0,2,2,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],"idtweets":[]},
{"nombre":"BIBIANA GAMBA SABOGAL","seccion":1,"codigo":201423538,"twitteruser":"bibigamba","notas":[2,1,2,2,2,2,2,2,2,-1,2,1,2,2,2,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],"idtweets":[]},
{"nombre":"JUAN DIEGO GONZALEZ ARTETA","seccion":1,"codigo":201531418,"twitteruser":"juandg161","notas":[-1,2,2,2,2,2,2,2,2,2,-1,1,2,1,2,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],"idtweets":[]},
{"nombre":"CAMILO ANDRES MONTENEGRO HERNANDEZ","seccion":1,"codigo":201531747,"twitteruser":"camontenegro11","notas":[2,2,0,2,2,2,2,2,2,2,2,1,2,-1,2,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],"idtweets":[]},
{"nombre":"CRISTIAN CAMILO NOVOA AVELLANEDA","seccion":1,"codigo":201513389,"twitteruser":"novoa_14","notas":[1,1,2,2,0,-1,2,2,2,-1,2,2,0,1,-1,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],"idtweets":[]},
{"nombre":"SERGIO ANDRES PARDO SANCHEZ","seccion":1,"codigo":201415928,"twitteruser":"Carnifis","notas":[2,1,1,2,2,2,2,2,1,-1,2,2,1,-1,-1,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],"idtweets":[]},
{"nombre":"CARLOS GABRIEL PEÑALOZA GOMEZ","seccion":1,"codigo":201531973,"twitteruser":"cpenalozag","notas":[2,2,2,2,2,2,2,2,2,-1,2,1,2,2,2,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],"idtweets":[]},
{"nombre":"JUAN SEBASTIAN PRIETO BUSTAMANTE","seccion":1,"codigo":201426358,"twitteruser":"SebasP27","notas":[2,2,2,2,-1,2,2,2,1,1,-1,1,-1,2,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],"idtweets":[]},
{"nombre":"PAULA JULIANA RAMIREZ GONZALEZ","seccion":1,"codigo":201328023,"twitteruser":"paujrg","notas":[2,0,1,0,2,1,2,2,2,2,2,1,1,2,2,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],"idtweets":[]},
{"nombre":"FREDDY ANDRES VERA HERNANDEZ","seccion":1,"codigo":201417333,"twitteruser":"FAndresVera26","notas":[2,0,2,2,2,0,2,-1,0,1,-1,2,-1,1,-1,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],"idtweets":[]},
{"nombre":"CAMILO ZAMBRANO VOTTO","seccion":1,"codigo":201515438,"twitteruser":"Camilozvi","notas":[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],"idtweets":[]},
{"nombre":"NICOLAS AGUILAR LEON","seccion":2,"codigo":201530741,"twitteruser":"Nicolas_Agui","notas":[2,2,2,2,2,2,2,2,1,2,-1,2,-1,2,-1,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],"idtweets":[]},
{"nombre":"JUAN CAMILO BUSTAMANTE ATEHORTUA","seccion":2,"codigo":201212925,"twitteruser":"JuanBusho","notas":[2,2,1,-1,1,0,2,-1,1,-1,0,2,-1,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],"idtweets":[]},
{"nombre":"JUAN DIEGO CHAVES SANGUINO","seccion":2,"codigo":201533528,"twitteruser":"JuanDiegoChav13","notas":[2,2,1,2,2,0,0,2,0,-1,2,2,2,2,2,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],"idtweets":[]},
{"nombre":"JUAN MANUEL DOMINGUEZ OSORIO","seccion":2,"codigo":201532819,"twitteruser":"jmdominguezWebD","notas":[2,2,2,2,2,2,2,2,2,2,2,1,2,2,2,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],"idtweets":[]},
{"nombre":"ALEJANDRO ECHEVERRI ROMERO","seccion":2,"codigo":201532824,"twitteruser":"AEcheverriR","notas":[2,2,2,-1,2,2,1,2,2,1,-1,2,2,2,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],"idtweets":[]},
{"nombre":"ANDRES DAVID LAITON VARGAS","seccion":2,"codigo":201422317,"twitteruser":"David_Laiton","notas":[2,2,2,2,1,-1,0,2,1,2,0,2,1,2,2,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],"idtweets":[]},
{"nombre":"FABIO ANDRES LOPEZ CORREDOR","seccion":2,"codigo":201423782,"twitteruser":"faanloco","notas":[2,2,1,2,2,-1,2,2,2,2,2,2,-1,2,2,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],"idtweets":[]},
{"nombre":"JUAN MANUEL ALBERTO LOVERA LOZANO","seccion":2,"codigo":201423795,"twitteruser":"jmalovera10","notas":[2,2,2,2,2,-1,-1,-1,2,2,2,2,2,-1,2,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],"idtweets":[]},
{"nombre":"JUAN FELIPE MENDEZ PERALTA","seccion":2,"codigo":201423877,"twitteruser":"jfmendez11","notas":[1,2,1,2,2,-1,-1,-1,1,1,2,0,1,-1,-1,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],"idtweets":[]},
{"nombre":"ANDRES FELIPE OLIVARES VARGAS","seccion":2,"codigo":201424027,"twitteruser":"af_olivares","notas":[2,1,2,2,2,2,2,1,0,2,2,2,1,2,2,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],"idtweets":[]},
{"nombre":"JUAN CAMILO PINILLA RAMIREZ","seccion":2,"codigo":201533888,"twitteruser":"juancpinillar","notas":[2,2,2,0,2,2,2,0,0,2,-1,2,0,2,2,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],"idtweets":[]},
{"nombre":"WILLIAM RICARDO RAVELO MENDEZ","seccion":2,"codigo":201532093,"twitteruser":"Ravelinx","notas":[2,2,2,2,2,1,2,2,2,2,2,1,2,2,1,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],"idtweets":[]},
{"nombre":"RAMON ESTEBAN VEGA SALAZAR","seccion":2,"codigo":201424569,"twitteruser":"RamonVega96","notas":[2,2,2,0,2,0,2,2,1,1,2,2,0,2,2,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],"idtweets":[]},
{"nombre":"ESNEIDER VELANDIA GONZALEZ","seccion":2,"codigo":201215364,"twitteruser":"SneiderVG","notas":[2,0,0,2,-1,1,2,2,2,1,2,2,1,2,2,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],"idtweets":[]},
{"nombre":"TOMAS FELIPE VENEGAS BERNAL","seccion":2,"codigo":201328833,"twitteruser":"TomasVenegas6","notas":[2,2,2,2,2,1,2,2,2,-1,2,2,2,2,2,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],"idtweets":[]}
];
