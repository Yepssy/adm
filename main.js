Im = 3 ;
I = 0 ;
setTimeout(next, 3000) ;

function next()
{
document.images[I].style.display = "none" ;
if ( I < Im )
  I++;
else
  I=0;     
document.images[I].style.display = "initial";
setTimeout(next, 3000) ;
}