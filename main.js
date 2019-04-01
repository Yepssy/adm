function BoutonDroit()
{
if((event.button==2)||(event.button==3)||(event.button==4))
alert('Hey what you do expect ?');
}

function Alerte()
{
  return false
  alert("Hey what you do expect ?");
}
document.onmousedown=BoutonDroit; 
document.oncontextmenu =Alerte;
document.onselectstart=Alerte;

Xm = 3 ;
X = 0 ;
let n = 25;
setTimeout(next, 460) ;

function next()
{

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
