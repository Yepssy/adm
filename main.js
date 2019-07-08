var next_available;

function alerte(){
  if (ccavert) {
    return true;
  } else {
    ccavert = true;
    alert("Cette œuvre est mise à disposition selon les termes de la Licence Creative Commons Attribution - Pas d’Utilisation Commerciale - Partage dans les Mêmes Conditions 4.0 International /n Vous pouvez désormais accéder au code source :)")
    return false;
  }
}

function so(){
  i ++;
  if (i == 6) {
    alert("Easter Eggs :  Oh Tourniquet !! ")
    var ee = true
  }
}

function rotateCmd(){
  var img = document.getElementById("rotate");
  var t = img.style.transform.match(/(\d+)/g) || [0];
  val = ( t[0] *1 +1) % 360 * ( Number(sens) * 2 - 1 );
  img.style.transform = 'rotate(' +val +'deg)'

  if (val == 359 || val == -359) {
    clearInterval(interv);
    delete(interv);
    val = 0;
  }
}

function rotate(){
  if (typeof interv == "undefined") {
    sens =! sens;
    so();
    interv = setInterval(rotateCmd, 5)
  }
}

function next(){
  if (n < 2500) {
    n = n * 1.25;
  }

  let img = document.getElementsByClassName("img-defil");
  img[X].style.display = "none" ;
  if ( X < Xm )
    X++;
  else
    X=0;
  img[X].style.display = "initial";
  setTimeout(next, n) ;
}

function responsive(){

  if (document.body.clientWidth <= 1000) {
    let i;

    let colleft = document.getElementsByClassName("column-left");
    for (i = 0; i < colleft.length; i++) {
      colleft[i].style.width = "auto";
    }

    let colmain = document.getElementById("main-column");
    colmain.style.width = "auto";

    let rotate = document.getElementById("rotate");
    rotate.style.width = "10%";
    rotate.style.top = "92%";
    rotate.style.left = "88%";

    if (next_available != false){
      let colaside = document.getElementById("aside-column");
      colaside.style.width = "auto";
    }

    let logo = document.getElementsByClassName("logo")
    for (i = 0; i < logo.length; i++) {
      logo[i].style.width = "100%";
    }

    let imgdefil = document.getElementsByClassName("img-defil")
    for (i = 0; i < imgdefil.length; i++) {
      imgdefil[i].style.width = "30%";
    }

    let nav = document.getElementsByTagName("nav")
    for (i = 0; i < 1; i++) {
      nav[i].style.margin = "0";
      nav[i].style.float = "0";
    }

    let li = document.getElementsByTagName("li")
    for (i = 0; i < 5; i++) {
      li[i].style.float = "none";
    }



    //let ul = document.getElementsByTagName("ul")
    //for (i = 0; i < 1; i++) {
    //  ul[i].style.border-radius = "0 auto";
    //}

    let crpaside = document.getElementsByClassName("corps-aside");
    for (i = 0; i < crpaside.length; i++) {
      crpaside[i].style.padding = "1% 5%";

    }
  }

}



var sens = false;
var ee = false;
i = 0;
Xm = 3 ;
X = 0 ;
var n = 25;

let ccavert = false;
document.oncontextmenu =alerte;
document.onselectstart=alerte;

//document.onload=setTimeout(responsive, 1000);
//document.onload=setTimeout(responsive, 2500);



if (next_available != false){
  setTimeout(next, 460);  
}