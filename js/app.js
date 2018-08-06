
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

		restaurantes.forEach(restaurant => { 
			if(hasName(input, restaurant) || hasDescription(input, restaurant) ){
				found.push(restaurant);
			} else {
				unfound.push(restaurant);
			}
		});
		console.log(found);
		console.log(unfound);	

		if (found.length > 0){
		showRestaurants(found);
		//console.log('array tamanho: '+found.length);
		//console.log(found);
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
	console.log('showRestaurants:');
	console.log(found);
	found.forEach(restaurant => {
		console.log(restaurant.name);

		$('.images-container').add('<p></p>').text(restaurant.name);
		console.log('foi um rest')
		//var image = $("<img>");
		/*$('.images-container').append(
			$('<p>FOI</p>')
			 $('<img>')
			 	.attr('src', restaurant.image)
			 	.addClass('images') //Verificar se realmente precisa dessa linha
		);*/

	});
}




		//Apresentar as imagens
		//Colocar o mapa pinado
		//Fazer modal


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
