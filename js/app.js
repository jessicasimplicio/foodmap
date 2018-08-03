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
	setTimeout(function(){
		$("#splash").fadeOut(500);	
	}, 3000);
	
	setTimeout(function(){
		$("#main").fadeIn("slow")
	}, 3000);
  /*$('#main').delay('3000').fadeIn('slow');*/
  /*$("#main").attr("display","flex");*/

  //Filtra por tipo:
  $('.filter-type').change(function(){
  	var type = '';
  	//type = $('.filter-type').val(); /*====> DÁ UNDEFINED!!! PQ???????*/
  	type = $(this).val();
  	console.log(type);
  });



})


