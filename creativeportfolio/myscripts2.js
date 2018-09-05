//Page 2/////////////////////////////////////////////////////////////////
window.addEventListener("load",function(event){
   imgHoverSwitch.imgFunc(); 
});
window.addEventListener("load",function(event){
   Carousel(); 
});
window.addEventListener("load",function(event){
   flexBox.panelflex();
});
window.addEventListener("load",function(event){
   flexBox.panez();
});
window.addEventListener('load',function(e){
    clicker();
}) 
//Gallery Show
var galleryClosers={
 openImageDiv:function(x){
    var element=document.getElementById(x).style.visibility="visible";
    document.getElementById('nav').style.visibility="hidden";
    document.getElementById('logo').style.visibility="hidden";
},
//Gallery Close
 closeImageDiv:function(i){
    document.getElementById(i).style.visibility="hidden";
    document.getElementById('nav').style.visibility="visible";
    document.getElementById('logo').style.visibility="visible";
} 
}

//Gallery1
var imgHoverSwitch={
    imgFunc:function(){
    var bigImage = document.getElementById('bigImage');
    var thumbnailsholder= document.getElementById('thumbnailsHolder');
    
    thumbnailsholder.addEventListener("click", function(event){
        if(event.target.tagName=="IMG"){
            bigImage.src=event.target.src;}    
    });   
}   
};


//Jascript Image Gallery 2 and 3    
function Carousel(containerID) {
	this.container = document.getElementById(containerID) || document.body;
	this.slides = this.container.querySelectorAll('.carousel');
	this.total = this.slides.length - 1;
	this.current = 0;
	
	// start on slide 1
	this.slide(this.current);
};
// NEXT
Carousel.prototype.next = function (interval) {
	(this.current === this.total) ? this.current = 0 : this.current += 1;
	
	this.stop();	
	this.slide(this.current);
	
	if(typeof interval === 'number' && (interval % 1) === 0) {
		var context = this;
		this.run = setTimeout(function() {
			context.next(interval);
		}, interval);
	}
};
// PREVIOUS
Carousel.prototype.prev = function (interval) {	
	(this.current === 0) ? this.current = this.total : this.current -= 1;
		
	this.stop();	
	this.slide(this.current);
	
	if(typeof interval === 'number' && (interval % 1) === 0) {
		var context = this;
		this.run = setTimeout(function() {
			context.prev(interval);
		}, interval);
	}
};
// STOP PLAYING
Carousel.prototype.stop = function () {
	clearTimeout(this.run);
};
// SELECT SLIDE
Carousel.prototype.slide = function (index) {	
	if (index >= 0 && index <= this.total) { 
		this.stop();
		for (var s = 0; s <= this.total; s++) {
			if (s === index) {
				this.slides[s].style.display = "inline-block"; 
			} else {
				this.slides[s].style.display = 'none';
			}
		}
	} else {
		alert("Index " + index + " doesn't exist. Available : 0 - " + this.total);
	}
};



function clicker(){
  let slider = document.querySelector('.items');
  let isDown = false;
  let startX;
  let scrollLeft;
    
    slider.addEventListener('mousedown',function(e) {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });  
  slider.addEventListener('mouseleave', function(){
    isDown = false;
    slider.classList.remove('active');
  });
  slider.addEventListener('mouseup', function(){
    isDown = false;
    slider.classList.remove('active');
  });
  slider.addEventListener('mousemove', function(e){
    if (!isDown) return;  // stop the fn from running
    e.preventDefault();
   let x = e.pageX - slider.offsetLeft;
   let walk = (x - startX) * 3;
    slider.scrollLeft = scrollLeft - walk;
  });
    
};     
//End of Galley 2 and 3   
 
 

//Gallery Four
    var flexBox={
    panel:document.getElementsByClassName('panel'),   
    toggleOpen:function() {
      this.classList.toggle('open');
    },
   toggleActive:function() {
       
      
    },
   panelflex:function(){ 
   for(i=0; flexBox.panel.length; i++){
    flexBox.panel[i].addEventListener('click', this.openBox);
    
  };
   },
   panez:function(){ 
   for(x=0; flexBox.panel.length; x++){
    flexBox.panel[x].addEventListener('click', this.toggleActive);
    
  };
   },    
     openBox:function(){
     this.classList.toggle('open');
      
  }   
      
   };
 

//End of Gallery Four    