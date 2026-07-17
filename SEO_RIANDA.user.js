// ==UserScript==
// @name         SEO_RIANDA
// @namespace    https://tampermonkey.net/
// @version      8.0
// @description  Professional Withdraw Monitoring System
// @match        https://motionv2.com/*
// @grant        none
// ==/UserScript==


(function(){

'use strict';




    "LINK AJA":{
        color:"#880E4F",
        bg:"#FCE4EC"
    }


}


};







/* =====================================
   STYLE
===================================== */


const style=document.createElement("style");


style.textContent=`

/* ROW */


.ft-row{

    transition:
    all .25s ease!important;

}


.ft-row:hover{

    transform:
    translateX(3px);

    box-shadow:
    0 6px 18px rgba(0,0,0,.12);

}





/* LEFT INDICATOR */


.ft-medium{


    background:

    linear-gradient(
    90deg,
    rgba(255,193,7,.18),
    transparent
    )!important;


    border-left:
    5px solid #FFC107!important;

}





.ft-high{


    background:

    linear-gradient(
    90deg,
    rgba(244,67,54,.18),
    transparent
    )!important;


    border-left:
    5px solid #E53935!important;

}





/* BANK COMPACT */


.ft-bank{


    font-size:
    13px!important;


    font-weight:
    1000!important;


    letter-spacing:
    .4px;


    padding:
    2px 8px!important;


    border-radius:
    6px!important;


    display:
    inline-block!important;


    border:
    1px solid currentColor!important;


    line-height:
    15px!important;


}





/* NOMINAL */


.ft-money{


    font-size:
    14px!important;


    font-weight:
    900!important;


    padding:
    5px 12px!important;


    border-radius:
    8px!important;


    display:
    inline-block!important;


}





.ft-medium .ft-money{


    background:
    #FFD600!important;


    color:#111!important;


}






.ft-high .ft-money{


    background:

    linear-gradient(
    135deg,
    #ff1744,
    #b71c1c
    )!important;


    color:white!important;


    box-shadow:

    0 0 18px rgba(244,67,54,.55);


    animation:
    ftPulse 2s infinite;


}





@keyframes ftPulse{


0%{

box-shadow:
0 0 5px rgba(244,67,54,.5);

}


50%{

box-shadow:
0 0 22px rgba(244,67,54,.8);

}


100%{

box-shadow:
0 0 5px rgba(244,67,54,.5);

}


}





/* LAPOR GRUP */


.ft-report-note{

    display:inline-flex!important;

    align-items:center;

    justify-content:center;

    min-width:120px;

    padding:4px 10px;

    border-radius:30px;

    font-size:11px!important;

    font-weight:900;

    letter-spacing:.4px;

    margin-bottom:4px;

    transition:.25s;

    user-select:none;

}

.ft-report-warning{

    color:#E65100!important;

    background:linear-gradient(135deg,#FFF8E1,#FFE082);

    border:1px solid #FFB300;

    cursor:pointer;

}

.ft-report-warning:hover{

    transform:translateY(-1px);

    box-shadow:0 0 10px rgba(255,193,7,.5);

}

.ft-report-success{

    color:#fff!important;

    background:linear-gradient(135deg,#00C853,#2E7D32);

    border:1px solid #66BB6A;

    box-shadow:0 0 12px rgba(0,200,83,.35);

    animation:reportGlow 2s infinite;

}

@keyframes reportGlow{

0%{
box-shadow:0 0 5px rgba(0,200,83,.3);
}

50%{
box-shadow:0 0 16px rgba(0,200,83,.6);
}

100%{
box-shadow:0 0 5px rgba(0,200,83,.3);
}

}





/* HUB CS */


.ft-cs-alert{


    color:#c62828!important;


    background:#ffebee!important;


    padding:

    2px 7px!important;


    border-radius:

    6px!important;


    font-weight:

    900!important;


    border:

    1px solid #ef9a9a!important;


}



`;



document.head.appendChild(style);








/* =====================================
   CHECK HUB CS
===================================== */


function checkCSName(element){


    if(!element)
    return;



    let text =
    element.textContent
    .toUpperCase();



    const keyword=[

        "HUB - CS",
        "HUBUNGI CS",
        "HUB CS"

    ];



    if(
        keyword.some(word=>text.includes(word))
    ){


        element.classList.add(
            "ft-cs-alert"
        );


    }


}









/* =====================================
   PROCESS ROW
===================================== */


function processRow(row){


    if(row.dataset.financeTerminal)
    return;



    const cells=
    row.querySelectorAll("td");



    if(cells.length < 8)
    return;



    row.dataset.financeTerminal="true";


    row.classList.add(
        "ft-row"
    );




    /*
        CHECK HUB CS
    */


    cells.forEach(cell=>{

        checkCSName(cell);

    });







    /*
        BANK
    */


    const bankElement =
    cells[6]
    .querySelector("span");



    if(bankElement){


        let name =

        bankElement.textContent
        .trim()
        .toUpperCase();



        if(name==="SEA BANK")
        name="SEABANK";


        if(name==="GO PAY")
        name="GOPAY";


        if(name==="LINK AJA")
        name="LINKAJA";





        const bankData =
        CONFIG.BANK[name];



        if(bankData){


            bankElement.classList.add(
                "ft-bank"
            );



            bankElement.innerHTML =
            name;



            bankElement.style.background =
            bankData.bg;



            bankElement.style.color =
            bankData.color;



        }


    }









    /*
        NOMINAL
    */


    const money =
    cells[7]
    .querySelector("p");



    if(!money)
    return;



    let value =

    money.textContent
    .replace(/[^\d]/g,'');



    value=parseInt(value||0);



    money.classList.add(
        "ft-money"
    );







    if(value >= CONFIG.HIGH){



        row.classList.add(
            "ft-high"
        );



// =========================
// ID TRANSAKSI
// =========================

// Silakan sesuaikan jika ada kolom ID transaksi
const transactionId = (
    cells[0].innerText.trim() + "|" +
    cells[2].innerText.trim() + "|" +
    cells[7].innerText.trim()
);

const storageKey = "FT_REPORT_" + transactionId;


// =========================
// NOTE
// =========================

const note = document.createElement("div");

note.className = "ft-report-note";

if(localStorage.getItem(storageKey)){

    note.innerHTML = "✔ SUDAH LAPOR";

    note.classList.add("ft-report-success");

}else{

    note.innerHTML = "⚠ LAPOR GRUP";

    note.classList.add("ft-report-warning");

    note.onclick = function(){

        localStorage.setItem(storageKey,"YES");

        note.innerHTML = "✔ SUDAH LAPOR";

        note.classList.remove("ft-report-warning");

        note.classList.add("ft-report-success");

    };

}

money.parentElement.insertBefore(note,money);



    }



    else if(value >= CONFIG.MEDIUM){



        row.classList.add(
            "ft-medium"
        );


    }



}









/* =====================================
   SMART OBSERVER
===================================== */


let timer;



function scan(){


    clearTimeout(timer);



    timer=setTimeout(()=>{


        document
        .querySelectorAll("tbody tr")
        .forEach(processRow);



    },400);



}



scan();



new MutationObserver(scan)

.observe(

    document.body,

    {

        childList:true,

        subtree:true

    }

);



})();
