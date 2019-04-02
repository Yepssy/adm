function alerte(){
  alert("Hey what you do expect ?");
  return false
}

function rotateCmd(sens) {
  var img = document.getElementById("rotate");
  var t = img.style.transform.match(/(\d+)/g) || [0];
  var val = ( t[0] *1 +1) % 360;      
  img.style.transform = 'rotate(' +val +'deg)'
  
/*
    if (sens == 1) {
    var val = ( t[0] *1 +1) % 360;      
    img.style.transform = 'rotate(' +val +'deg)'
    
  } else {
    var val = ((( t[0] *1 + 1) % 360 ) - 360) * -1;
    img.style.transform = 'rotate(' +val +'deg)'
    
  }
*/

  if (val == 358) {
    alert("no")
    clearInterval(interv);
    delete(interv);
    val = 0;
    
  }
}

function rotate() 
{
  if (typeof(interv) == "undefined") {
/*    
    if (sens == -1) {
      var sens = 1;
    } else {
      var sens = -1;
    }
*/
    interv = setInterval(rotateCmd(sens), 5)
  }
}

function next(){
if (n < 2500) {
  n = n * 1.25;
}
document.images[X].style.display = "none" ;
if ( X < Xm )
  X++;
else
  X=0;
document.images[X].style.display = "initial";
setTimeout(next, n) ;
}

document.onmousedown=alerte; 
document.oncontextmenu =alerte;
document.onselectstart=alerte;
var sens = false;
Xm = 3 ;
X = 0 ;
var n = 25;
setTimeout(next, 460) ;