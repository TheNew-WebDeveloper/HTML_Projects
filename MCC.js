let num=0;
function fun(){
    num++;
    if(num%2==1){
        document.getElementById("container2").style.height="18vh";
        document.getElementById("line").style.display="block";
        document.getElementById("navBar2").style.display="block";
        document.getElementById("navBar2").style.transition="all 1s"
    }
    else {
        document.getElementById("container2").style.height="8vh";
        document.getElementById("line").style.display="none";
        document.getElementById("navBar2").style.display="none";
    }
}
