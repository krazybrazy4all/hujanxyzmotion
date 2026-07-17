// ==UserScript==
// @name         HUJANMOTIONV2
// @namespace    https://tampermonkey.net/
// @version      2.1
// @description  TETAP TENANG
// @match        https://motionv2.com/*
// @grant        none
// ==/UserScript==


(function(){

'use strict';



/* =====================================
   CONFIG
===================================== */


const CONFIG = {


    MEDIUM:500000,


    HIGH:3000000,



    BANK:{


        "BCA":{
            color:"#0D47A1",
            bg:"#E3F2FD"
        },


        "DANA":{
            color:"#01579B",
            bg:"#E1F5FE"
        },


        "SEABANK":{
            color:"#E65100",
            bg:"#FFF3E0"
        },


        "SEA BANK":{
            color:"#E65100",
            bg:"#FFF3E0"
        },


        "BNI":{
            color:"#EF6C00",
            bg:"#FFF3E0"
        },


        "BRI":{
            color:"#1B5E20",
            bg:"#E8F5E9"
        },


        "MANDIRI":{
            color:"#0D47A1",
            bg:"#E3F2FD"
        },


        "OVO":{
            color:"#4A148C",
            bg:"#F3E5F5"
        },


        "GOPAY":{
            color:"#1B5E20",
            bg:"#E8F5E9"
        },


        "GO PAY":{
            color:"#1B5E20",
            bg:"#E8F5E9"
        },


        "LINKAJA":{
            color:"#880E4F",
            bg:"#FCE4EC"
        },


        "LINK AJA":{
            color:"#880E4F",
            bg:"#FCE4EC"
        }


    }


};





/* =====================================
   STYLE PREMIUM
===================================== */


const style=document.createElement("style");


style.textContent=`


/* =====================================
 REMOVE HORIZONTAL SCROLL
===================================== */


html,
body{

    overflow-x:hidden!important;

}





/* =====================================
 ROW FLAT STYLE
===================================== */


.ft-row{

    transition:none!important;

}


.ft-row:hover{

    transform:none!important;

    box-shadow:none!important;

}





/* =====================================
 NOMINAL MEDIUM
===================================== */


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





/* =====================================
 NOMINAL HIGH
===================================== */


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


    background:#FFD600!important;

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





/* =====================================
 BANK + NOMOR BLOCK
===================================== */


.ft-bank-box{


    display:inline-block!important;


    padding:

    4px 9px!important;


    border-radius:

    7px!important;


    border:

    1px solid #cbd5e1!important;


    font-size:

    13px!important;


    font-weight:

    1000!important;


    line-height:

    16px!important;


    white-space:nowrap!important;


    box-shadow:

    0 1px 5px rgba(0,0,0,.08);


    border:

    1px solid #cbd5e1!important;



    background:

    linear-gradient(
    135deg,
    #ffffff,
    #f1f5f9
    )!important;



    line-height:

    16px!important;



    box-shadow:

    0 2px 8px rgba(0,0,0,.08);


}



.bank-name{


    font-size:

    13px!important;


    font-weight:

    1000!important;


}



.bank-number{


    font-size:

    11px!important;


    opacity:.85;


}






/* =====================================
 REPORT BUTTON
===================================== */


.ft-report-note{


    display:inline-flex!important;


    align-items:center;


    justify-content:center;


    min-width:auto!important;


    padding:2px 7px;


    border-radius:20px;


    font-size:10px!important;


    font-weight:900;


    line-height:

    14px!important;



    margin-right:

    5px!important;

}





.ft-report-warning{


    color:#E65100!important;


    background:#FFF8E1;


    border:1px solid #FFB300;


}





.ft-report-success{


    color:white!important;


    background:

    linear-gradient(
    135deg,
    #00C853,
    #2E7D32
    );


}






/* =====================================
 CS ALERT
===================================== */


.ft-cs-alert{


    color:#c62828!important;


    background:#ffebee!important;


    padding:2px 7px!important;


    border-radius:6px!important;


    font-weight:900!important;


    border:1px solid #ef9a9a!important;


}





/* =====================================
 PGA CALLBACK FAILED
===================================== */


.ft-callback-failed{


    color:white!important;


    background:

    linear-gradient(
    135deg,
    #ff1744,
    #b71c1c
    )!important;


    border-radius:6px!important;


    padding:4px 10px!important;


    font-weight:1000!important;


    display:inline-block!important;


    animation:

    callbackPulse 2s infinite;


}



@keyframes callbackPulse{


0%{

box-shadow:
0 0 5px rgba(244,67,54,.5);

}


50%{

box-shadow:
0 0 20px rgba(244,67,54,.9);

}


100%{

box-shadow:
0 0 5px rgba(244,67,54,.5);

}


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



    if(keyword.some(word=>text.includes(word))){


        element.classList.add(
        "ft-cs-alert"
        );


    }


}





/* =====================================
 CHECK CALLBACK FAILED
===================================== */


function checkCallbackFailed(element){

    if(!element)
        return;

    let text = element.innerText.toUpperCase();

    if(
        text.includes("FAILED")
    ){

        element.classList.add(
            "ft-callback-failed"
        );

    }

}
/* =====================================
   PROCESS ROW
===================================== */


function processRow(row){


    if(row.dataset.financeTerminal)
    return;



    const cells =
    row.querySelectorAll("td");



    if(cells.length < 8)
    return;



    row.dataset.financeTerminal="true";



    row.classList.add(
        "ft-row"
    );





    /*
        CHECK TEXT STATUS
    */


    cells.forEach(cell=>{


        checkCSName(cell);


        checkCallbackFailed(cell);


    });








    /*
        BANK + NOMOR REKENING
    */

const bankCell = cells[6];


if(bankCell){


    let text =
    bankCell.innerText
    .replace(/\s+/g," ")
    .trim();



    let name =
    text.split(",")[0]
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



    // ambil nomor rekening
    let number =
    text
    .replace(
        /BCA|BRI|BNI|BPD|JAGO|DANA|OVO|GOPAY|GO PAY|SEABANK|SEA BANK|MANDIRI|LINKAJA|LINK AJA/gi,
        ""
    )
    .replace(/,/g,"")
    .trim();





    let finalText =
    name + ", " + number;




    // kosongkan seluruh isi kolom

    bankCell.innerHTML = "";



    const box =
    document.createElement("span");


    box.className =
    "ft-bank-box";



    box.innerText =
    finalText;



    if(bankData){


        box.style.color =
        bankData.color;


        box.style.background =
        bankData.bg;


    }




    bankCell.appendChild(box);



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



    value =
    parseInt(value || 0);





    money.classList.add(
        "ft-money"
    );








    /*
        HIGH PRIORITY
        >= 3.000.000
    */


    if(value >= CONFIG.HIGH){



        row.classList.add(
            "ft-high"
        );




        /*
            LAPOR GRUP BUTTON
        */



        const transactionId = (


            cells[0].innerText.trim()
            +"|"+
            cells[2].innerText.trim()
            +"|"+
            cells[7].innerText.trim()


        );



        const storageKey =
        "FT_REPORT_"+transactionId;




        const note =
        document.createElement("div");



        note.className =
        "ft-report-note";





        if(localStorage.getItem(storageKey)){



            note.innerHTML =
            "✔ SUDAH LAPOR";



            note.classList.add(
            "ft-report-success"
            );



        }else{



            note.innerHTML =
            "⚠ LAPOR GRUP";



            note.classList.add(
            "ft-report-warning"
            );




            note.onclick=function(){



                localStorage.setItem(
                    storageKey,
                    "YES"
                );



                note.innerHTML =
                "✔ SUDAH LAPOR";



                note.classList.remove(
                "ft-report-warning"
                );



                note.classList.add(
                "ft-report-success"
                );



            };



        }





        money.parentElement.insertBefore(
            note,
            money
        );




    }






    /*
        MEDIUM PRIORITY
        >=500.000
    */


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
        .querySelectorAll(
        "tbody tr"
        )
        .forEach(
        processRow
        );



    },400);



}






/*
 INITIAL LOAD
*/


scan();





/*
 AUTO DETECT DATA CHANGE
*/


new MutationObserver(scan)

.observe(


    document.body,


    {


        childList:true,


        subtree:true


    }


);






})();
