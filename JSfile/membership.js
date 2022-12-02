let p1;
function change1(){
    p=document.getElementById("table1");
    p.onmouseover=over;
    p.onmouseout=out;
}

function over(){
    p1.style.color="black";
}

function out(){
    p1.style.color="#767676";
}