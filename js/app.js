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


// Add your JavaScript
$(document).ready(function() {

	//Faz o splash
/*	setTimeout(function(){
		$("#splash").fadeOut(500);	
	}, 3000);
	
	setTimeout(function(){
		$("#main").fadeIn("slow")
	}, 3000);
*/
	splash();
  //filterType()
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
		let found = []; 
		let unfound = []; 

		restaurantes.forEach(restaurant => { 

			if(hasName(input, restaurant) || hasDescription(input, restaurant) ){
				found.push(restaurant);
			} else {
				unfound.push(restaurant);
			}
		});
		console.log(found);
		console.log(unfound);		
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
			console.log("tem Descrip");
			return true;
		} else{
			return false;
		}
}
















/*restaurantes.forEach(restaurant => { //filtro por nome
			//let restaurantName = restaurant.name.toLowerCase();
			if(restaurant.name.toLowerCase().search(input) !== -1){
				console.log("tem Name");
			}
		})*/

//filtro pela descrição
		/*restaurantes.forEach(restaurant => { 
			if(restaurant.description.toLowerCase().search(input) !== -1){
				console.log("tem Descrip");
			}
		})*/

		//Condição OU nos Ifs para apresentar imagem
		//Apresentar as imagens
		//Colocar o mapa pinado
		//Fazer modal