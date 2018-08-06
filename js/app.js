
// Add your JavaScript
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
