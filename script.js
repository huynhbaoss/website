window.onscroll=function(){
    console.info(document.documentElement.scrollTop);
    var gptotop=document.getElementById("gototop");
    if(document.documentElement.scrollTop >200 || document.documentElement.scrollTop >100){ 
    gototop.style.display="block";
 }
 else{
     gototop.style.display="none";
 }
}
function goToTop() {
    var timer = setInterval(function(){
        document.documentElement.scrollTop-=20;
        if(document.documentElement.scrollTop<=0)

          clearInterval(timer);
    }, 1);
}