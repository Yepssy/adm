
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

