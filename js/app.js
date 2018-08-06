// Add your JavaScript

//Leaflet Map
var initialCoordinates = [-23.55, -46.63]; // Sao Paulo
var initialZoomLevel = 13;

// create a map in the "map" div, set the view to a given place and zoom
var map = L.map('map').setView(initialCoordinates, initialZoomLevel);

// add an OpenStreetMap tile layer
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; Contribuidores do <a href="http://osm.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var muxiCoordinates = [-23.5539487, -46.65767779999999];
//var muxiMarkerMessage = "A Muxi fica aqui.<br>Olá mundo!";

L.marker(muxiCoordinates).addTo(map)
  //.bindPopup(muxiMarkerMessage)
  .openPopup()
;



$(document).ready(function() {

	splash();
  setDisplayFlex();
  filterBySearch();
  filterType();
})

function splash(){
	$('#splash').delay(2000).fadeOut(500);  	
  $('#main').delay(3000).fadeIn(500);
}

function setDisplayFlex(){
	setTimeout(function(){
	  $("#main").css("display","flex");
	}, 3000);
}

function filterType(){
	$('.filter-type').change(function(){
  	var type = '';
  	//type = $('.filter-type').val(); 
  	type = $(this).val();
  	console.log(type);
  });
}

function filterBySearch(){
	$('.button').click(function(){
		var input = $('.input').val().toLowerCase();
		var found = []; 
		var unfound = []; 
		$( ".images" ).remove();

		restaurantes.forEach(restaurant => { 
			if(hasName(input, restaurant) || hasDescription(input, restaurant) ){
				found.push(restaurant);
			} else {
				unfound.push(restaurant);
			}
		});
		//console.log(found);
		//console.log(unfound);	

		if (found.length > 0){
		showRestaurants(found);
		}
	});
}

function hasName(input, restaurant){
	if(restaurant.name.toLowerCase().search(input) !== -1){
		return true;
	} else {
		return false;
	}
}

function hasDescription(input, restaurant){
		if(restaurant.description.toLowerCase().search(input) !== -1){
			return true;
		} else{
			return false;
		}
}

function showRestaurants(found){
	found.forEach(restaurant => {
		var image = $("<img>");
		$('.images-container').append(
			$('<img>')
			 	.attr('src', restaurant.image)
			 	.addClass('images') //Verificar se realmente precisa dessa linha
		);
	});
}




		//Colocar o mapa pinado
		//Fazer modal
		//mostrar imagens de acordo com tipo de restaurante
		//colocar opção para mostrar todos
		//comecar mostrando todos


//

/*let typeSelected = [];
let type = '';

restaurantes.forEach(restaurant => {
	if (restaurant.type == 'vegana'){
		//console.log(restaurant.name);
		typeSelected.push(restaurant);
	}
});
	console.log(typeSelected);*/
