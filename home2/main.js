var isSetClas=false;

var stclas=function(){
var buts=document.getElementsByTagName('button');
for(var i=0;i<buts.length;i++){
buts[i].className= "kil" ;
}
}



var SetH1=function(){
    var h=document.getElementsByTagName("h1");
    for(var i=0;i<h.length;i++){
        h[i].className="holypop";
    }
    for(var i=0;i<h.length;i++){
        h[i].id="hol"+(i+1);
    }
    stclas();
    isSetClas=true;
}

var NewName=function(){
    var masname=["My", "Name" , "Is", "John Cena!!"]
    if(isSetClas){
    for(var i=0;i<masname.length;i++){
    var h = document.getElementById("hol"+(i+1));
        h.innerHTML=masname[i];
        }
    }else {
        for(var i=0;i<masname.length;i++){
        var h = document.getElementsByTagName("h1");
        h[i].innerHTML=masname[i];
        }
    }
}

var imclas=function(){
    var im=document.getElementsByTagName("img");
    var mas=["#333","blue","#f1f1f1"];
    for(var i=0;i<im.length;i++){
        im[i].className="image";
    }
    for(var i=0;i<im.length;i++){
       if(im[i].clientHeight != "200px" || im[i].clientWidth != "200px"){
           im[i].style.width="200px";
           im[i].style.height="200px";
       }
        im[i].style.borderRadius=" "+((i+1)*10)+"px";
        im[i].style.border="solid "+((i+1)*4)+"px";
        im[i].style.borderColor=mas[i];
    }
}
