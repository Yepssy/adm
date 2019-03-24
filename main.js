function DIAPO() {
 
 
var ArrayImages = document.getElementsByClass("img-defil");
var NbPhotos = ArrayImages.length; 
 
 
for (var i=1; i=ArrayImages.length; i++) {
    ArrayImages[i-1].style.display = "none";
    }
 
if (NbPhotos === ArrayImages.length) {
  ArrayImages[NbPhotos-1].style.display = "inline-block";
  NbPhotos = NbPhotos-1;
  setTimeout(DIAPO(), 3000);
        }
 
else if ( NbPhotos > 0 && NbPhotos != ArrayImages.length) {
ArrayImages[NbPhotos-1].style.display = "inline-block";
ArrayImages[NbPhotos].style.display = "none";
NbPhotos = NbPhotos-1;
setTimeout(DIAPO(), 3000);
        }
 

else {
ArrayImages[0].style.display = "inline-block";
NbPhotos = ArrayImages.length;
setTimeout(DIAPO(),3000);                               
		}
                             
DIAPO();