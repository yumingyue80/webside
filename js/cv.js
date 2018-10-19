window.onload = function() 
{
    if(navigator.userAgent.match(/Trident\/7\./)) 
    {  
        document.body.addEventListener && document.body.addEventListener("mousewheel", function() 
        {    
            event.preventDefault();    
            var wd = event.wheelDelta;    
            var csp = window.pageYOffset;    
            window.scrollTo(0, csp - wd);
        });
    }
    var section = document.getElementsByClassName("section");
    var menu =  document.getElementsByTagName("nav")[0];
    var screenHeight = document.documentElement.clientHeight;
    section[0].style.height = screenHeight + "px";
    menu.style.height = screenHeight + "px";
    var menuicon = document.getElementById("menu-icon");
    toNextBottomMove();
    menuicon.onclick = function(){
        $("#menu-nav").slideToggle();
        alert(section[1].offsetTop);
        alert(section[1].offsetParent);
    };
};

function toNextBottomMove()
{
    setTimeout( function() {
        moveWay();
        toNextBottomMove();
    },
    1000
    );
}

function moveWay()
{
    $("#to-next").animate({top:"+=30px"},1000).animate({top:"-=30px"},1000);
}