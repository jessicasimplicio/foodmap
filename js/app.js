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

  
  



})

function splash(){
	$('#splash').delay(2000).fadeOut(500);  	
  $('#main').delay(3000).fadeIn(500);
}

function filterType(){
	$('.filter-type').change(function(){
  	var type = '';
  	//type = $('.filter-type').val(); 
  	type = $(this).val();
  	console.log(type);
  });
}

function setDisplayFlex(){
	setTimeout(function(){
	  $("#main").css("display","flex");
	}, 3000);
}