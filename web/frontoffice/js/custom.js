/** personalizacion IbericaSoft 2015 */
$(document).ready(function(){
	
	$('.bxslider').bxSlider({controls:false, pager: true, pagerType: 'full', mode: 'fade', captions: true, auto: true, speed: 500, pause: 3000, autoHover: true,infiniteLoop: true});
    
   //dialogo mellamais
   $('.mellamais').click(function() {  
	   	mostrar_centrar_mask($(this));
    	$("#teloemail").focus();
    	return false;
   });
   
   //When clicking on the button close or the mask layer the popup closed
   $('a.close, #mask').on('click', function() { 
     $('#mask , .form-popup').fadeOut(300 , function() {
       $('#mask').remove();  
       return false;
     });
   });  
   
   //dialogo politica de privacidad
   $('.politica').click(function() {
	   mostrar_centrar_mask($(this));
	   return false;
   });
   
   //boton responsive
   var vida= false 
   $('.boton-responsive').click(function() {
	   if(vida){ 
		   $('#menu').css({'left' : '-300px'})
		   vida = false
	   }else{ 
		   $('#menu').css({'left' : '0px'})   
		   vida = true
	   } 
   }); 
});

function mostrar_centrar_mask(item){
	//Getting the variable's value from a link 
	var box = $(item).attr('href');

	//Fade in the Popup
	$(box).fadeIn(300);
	
	$(box).css({top:'50%',left:'50%',margin:'-'+($(box).height() / 2)+'px 0 0 -'+($(box).width() / 2)+'px'});
	
	// Add the mask to body
	$('body').append('<div id="mask"></div>');
	$('#mask').fadeIn(300);
}