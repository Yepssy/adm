Xm = 3 ;
X = 0 ;
setTimeout(next, 2500) ;

function next()
{
document.images[X].style.display = "none" ;
if ( X < Xm )
  X++;
else
  X=0;     
document.images[X].style.display = "initial";
setTimeout(next, 2500) ;
}

