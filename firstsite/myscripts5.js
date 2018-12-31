//Page 5/////////////////////////////////////////////////////////////////////
window.addEventListener("load", function (event){
   slideFooter.footerSlide(); 
},false);

 //Wiggle Popper
var wigglePopper={
    pos:2850,
    popper:function(){       
        if(window.pageYOffset>wigglePopper.pos){ 
           document.getElementById('email').classList.add('emailwiggle');
           document.getElementById('number').classList.add('numberwiggle');
           var textpop=document.getElementById('contactme').classList.add('textpop');
           document.getElementById('contactme').style.visibility="visible";    
           
        }},
    
    run:function(){
        window.addEventListener('scroll',this.popper);
    }
    
}
wigglePopper.run();
  
//slide in footer
var slideFooter={
  footerSlide:function(){
    var footer=document.getElementById('footer'); 
    if((window.pageYOffset + window.innerHeight) >= document.body.offsetHeight)
    {footer.style.right = "0px"; 
    footer.style.transition="right 0.7s ease-in-out 0s";} 
    else{footer.style.right = "-100%";
    footer.style.transition="right 0.1s ease-in-out 0s";}
  },
  list:function(){
   document.addEventListener('scroll',this.footerSlide);}   

}   
slideFooter.list();
//end of slide footer




//End of Wiggle Popper

 