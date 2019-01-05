window.addEventListener('load',function(){
    myname()
    navigate();
})

function myname(){
    var myname = document.getElementById('my-name');
    var topside = document.getElementById('topside');
    var bottomside = document.getElementById('bottomside');
    var top = document.getElementById('top');
    var footer = document.getElementsByTagName('footer')[0];
    setTimeout(function(){ 
        myname.style.transition="all 2s";
        myname.style.maxWidth = "20%";
        myname.style.top = "-60px"
        myname.style.left = "15px"
        myname.style.marginBottom = "110px";
        top.style.transition="all 2s";
        top.style.maxHeight='70px';
        top.style.backgroundColor="rgb(28, 28, 28,.6)";
        top.style.marginBottom="100px"
       
    },4000)

    setTimeout(function(){
        topside.style.display="block";
        bottomside.style.display="block";
        footer.style.display="block";
    },4200)

}

function navigate(){
    var topside1 = document.getElementsByClassName('topside-single-container')[0]
    topside1.addEventListener('click',function(){window.location.href="https://aaguzzo.github.io/minimalist/"})
    var topside2 = document.getElementsByClassName('topside-single-container')[1]
    topside2.addEventListener('click',function(){window.location.href="https://aaguzzo.github.io/modern/"})
    var topside3 = document.getElementsByClassName('topside-single-container')[2]
    topside3.addEventListener('click',function(){window.location.href="https://aaguzzo.github.io/favourite/"})
    var topside4 = document.getElementsByClassName('topside-single-container')[3]
    topside4.addEventListener('click',function(){window.location.href="https://aaguzzo.github.io/firstsite/"})
    var topside5 = document.getElementsByClassName('topside-single-container')[4]
    topside5.addEventListener('click',function(){window.location.href="https://aaguzzo.github.io/"})
    var topside6 = document.getElementsByClassName('topside-single-container')[5]
    topside6.addEventListener('click',function(){window.location.href="https://anthony-guzzo-portfolio-node.herokuapp.com/"})


    var bottomside1 = document.getElementsByClassName('bottomside-single-container')[0]
    bottomside1.addEventListener('click',function(){window.location.href="https://cougarmicrobes.com"})
    var bottomside2 = document.getElementsByClassName('bottomside-single-container')[1]
    bottomside2.addEventListener('click',function(){window.location.href="https://www.theowlmag.com"})
    var bottomside3 = document.getElementsByClassName('bottomside-single-container')[2]
    bottomside3.addEventListener('click',function(){window.location.href="https://echoclubhouse.com"})
    var bottomside4 = document.getElementsByClassName('bottomside-single-container')[3]
    bottomside4.addEventListener('click',function(){window.location.href="https://modcloth.com"})
    var bottomside5 = document.getElementsByClassName('bottomside-single-container')[4]
    bottomside5.addEventListener('click',function(){window.location.href="https://earmilk.com"})
    var bottomside6 = document.getElementsByClassName('bottomside-single-container')[5]
    bottomside6.addEventListener('click',function(){window.location.href="https://postplanner.com"})
 }