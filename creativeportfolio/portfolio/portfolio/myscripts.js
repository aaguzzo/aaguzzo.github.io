//Page1/////////////////////////////////////////////////////////////    

window.addEventListener("load", function (event){
   hideNav.hidden(); 
},false);


//Hide Navigation 
var hideNav={
  
hidden:function(){ 
var nav = document.getElementById('nav'); 
var position = 0;
window.addEventListener('scroll', function(){ 
  if (position <  window.pageYOffset){
    nav.style.position='relative';
    nav.style.top= "-105px";
    position = window.pageYOffset;
  }
  else {
    nav.style.position='fixed';
    nav.style.top='0px';
    position = window.pageYOffset;
  }
 
}); 
}
};
hideNav.hidden();
//End of Nav Hide  
    

 
