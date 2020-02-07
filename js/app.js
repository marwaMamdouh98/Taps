/* var of button*/
var btn1 = document.getElementById("tapBtn1");
var btn2 = document.getElementById("tapBtn2");
var btn3 = document.getElementById("tapBtn3");


/* click on frist button*/
btn1.onclick = function(){
    var temp = "";
    /* set data in empty var*/
    temp+=`<div class="showData">
            <p>Javascript is great</p>
            </div>`;
    /* show data in html*/
    document.getElementById("tapData").innerHTML = temp;
    /* change background of btn*/
    btn1.style.background="#e07587";
    btn2.style.background="#9e3150";
    btn3.style.background="#9e3150";
}

/* click on second button*/
btn2.onclick = function(){
    
    var temp2 = "";
    /* set data in empty var*/
    temp2+=`<div class="showData">
            <p>Ruby is great</p>
            </div>`;
    /* show data in html*/
    document.getElementById("tapData").innerHTML = temp2;
    /* change background of btn*/
    btn2.style.background="#e07587";
    btn1.style.background="#9e3150";
    btn3.style.background="#9e3150";
}

/* click on third button*/
btn3.onclick = function(){
    var temp3 = "";
    /* set data in empty var*/
    temp3+=`<div class="showData">
            <p>PHP is great</p>
            </div>`;
    /* show data in html*/
    document.getElementById("tapData").innerHTML = temp3;
    /* change background of btn*/
    btn3.style.background="#e07587";
    btn1.style.background="#9e3150";
    btn2.style.background="#9e3150";
}
