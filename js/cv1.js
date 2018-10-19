var now=0;
var section=document.getElementsByClassName("section");
var wrap=document.getElementById("wrap");
var main=document.getElementById("main");
var nav=document.getElementsByTagName("nav")[0];
var screenHeight=document.documentElement.clientHeight;
var num=section.length;
var startTime=0,
    endTime=0;
window.onload=function() 
{

};

//全屏高度实现
function draw1()
{
        var canvers = document.getElementById("html");
        var context = canvers.getContext("2d");
        context.beginPath();
        context.arc(55, 55, 50, degreesToRadians(-90), degreesToRadians(198), false);
        context.strokeStyle = "#0e2e47";
        context.lineWidth = 8;
        context.stroke();
        context.beginPath();
        context.arc(55, 55, 50, degreesToRadians(198), degreesToRadians(270), false);
        context.strokeStyle = "#7890a3";
        context.lineWidth = 8;
        context.stroke();
        context.font = '20px Arial';
        context.fillStyle = '#0e2e47';
        context.textBaseline = 'middle';
        context.textAlign = 'center';
        context.fillText('50%', 55, 55);
}
function degreesToRadians(degrees)
{
        return (degrees * Math.PI)/180;
}
function fullPage()
{        
        for (var i=0;i<section.length; i++)
        {
                section[i].style.height=screenHeight+"px";
        }

}

function addMouseWheelHandler(){
        var prefix = '';
        var _addEventListener;

        if (window.addEventListener)
        {
            _addEventListener = "addEventListener";
        }
        else
        {
            _addEventListener = "attachEvent";
            prefix = 'on';
        }

         // detect available wheel event
        var support = 'onwheel' in document.createElement('div') ? 'wheel' : // Modern browsers support "wheel"
                  document.onmousewheel !== undefined ? 'mousewheel' : // Webkit and IE support at least "mousewheel"
                  'DOMMouseScroll'; // let's assume that remaining browsers are older Firefox


        if(support == 'DOMMouseScroll')
        {
            document[ _addEventListener](prefix + 'MozMousePixelScroll', mouseWheelHandler, false);
        }

        //handle MozMousePixelScroll in older Firefox
        else
        {
            document[ _addEventListener](prefix + support, mouseWheelHandler, false);
        }
    }


//鼠标滚动事件
function mouseWheelHandler(e)
{         
        var startTime = new Date().getTime();
        var e=window.event||event;
        var delta = Math.max(-1,Math. min(1,(-e.detail) || e.wheelDelta)); 

        if ((endTime-startTime)<-1000)
        {
                if(delta>0 && now>0 && now<num)
                {
                        now--;
                        toSection(now);
                }
                else if(delta<0 && now>=0 && now<(num-1))
                {
                        now++;
                        toSection(now);
                }
                else
                {
                        return false;
                }
                endTime = new Date().getTime();
        }
        else      
        {        
                 event.preventDefault();    	
        }

}

//键盘箭头事件
function onkeydownHandler()
{
        var e = event || window.event || arguments.callee.caller.arguments[0];
        if(e && e.keyCode===40 && now>=0 && now<(num-1))
        {
                now++;  
                toSection(now);
        }
        if(e && e.keyCode===38 && now>0 && now<num)
        {
                now--;
                toSection(now);
        }
}


function toSection(now)
{
        var moveTo=-now*screenHeight;
        $("#main").animate({top:moveTo + "px"},1000);

}