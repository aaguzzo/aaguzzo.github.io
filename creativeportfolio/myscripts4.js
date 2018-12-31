//Page 4//////////////////////////////////////////////////////////////////    
    
//Typewriter    
 var writer={    
        texrContent:'01100100 01110011 01100110 01100110 01101011 01100001 00100000 01110011 01101011 01100110 01101101 01101011 01101100 01100001 01100111 01101110 01101011 \
01101010 01110011 01101110 \ 01100111 01101101 00100000 01110011 01100110 01100111 01101110 01100100\ 01100110 01101101 01100111 01101010 01101011 01100100 01100110\n 01110110 00100000 01101011 01100110 01110011 01100100 \01101110 01110110 01100100 01100110 01110011\n 1110010001 01010 10 101010\101010010100001 01010 100101\00100000 01110110 01101011\ \101  100  1001001001101110 01110011 00100000 01100110 \n 01110110 01101110 01101011 00100000 01100001\01100101000101\10101010\101000\100\1001 1001 10010001\ 100 1001111\
10 1001 10011\ 100 1001 &#10;\ 01100111 01101101\
00100000 01110011 \n 11001 1001 10 10010110\n 1001 1001 1001 \n 100 101   ', 
        i:0,   
      runs:function() {
            var content=this.texrContent;
            var inew=this.i;
        
             var theSetInterval = setInterval (function (){   
             var type=document.getElementById('typewriter').textContent += content[inew];
             inew +=1;
             if (inew > content.length -1 ){
                 clearInterval(theSetInterval);
             };
         },10);      
     }
} ;  

//End of Typewriter 

//Start of Skillslider 
var skillSlider={
  gg:2300,    
  skills:function(){    
    var pos=300;  
    var illustrator=document.getElementById('illustrator');
    var photoshop=document.getElementById('photoshop');
    var flash=document.getElementById('flash');
    var html=document.getElementById('html');
    var css=document.getElementById('css');
    var javascript=document.getElementById('javascript');
    var wordpress=document.getElementById('wordpress'); 
   if(window.pageYOffset>skillSlider.gg){ 
      illustrator.style.left="0px";
      photoshop.style.left="0px";
      flash.style.left="0px";
      html.style.left="0px";
      css.style.left="0px";
      javascript.style.left="0px";
      wordpress.style.left="0px";}
},

run:function(){window.addEventListener("scroll",skillSlider.skills);},
    
run2:function(){window.addEventListener('scroll',function tt(){
  if(window.pageYOffset>2300){
    writer.runs();
    window.removeEventListener('scroll',tt );
  }
});}


} ;
 
skillSlider.skills();    
skillSlider.run(); 
skillSlider.run2();
//End of Skillslider   
 