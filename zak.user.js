// ==UserScript==
// @name         HUJANMOTIONV2
// @namespace    https://tampermonkey.net/
// @version      2.3
// @description  MADEIN1305
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


.ft-copy-report{


display:inline-flex!important;


align-items:center;


justify-content:center;


padding:3px 9px;


margin-right:5px;


border-radius:20px;


font-size:10px!important;


font-weight:1000;


cursor:pointer;


color:white!important;


background:

linear-gradient(
135deg,
#1565C0,
#0D47A1
);


box-shadow:

0 2px 6px rgba(0,0,0,.2);



}



.ft-copy-report:hover{


transform:scale(1.05);


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
    COPY CLIPBOARD BUTTON
*/


const copyBtn =
document.createElement("div");


copyBtn.className =
"ft-copy-report";


copyBtn.innerHTML =
"📋 COPY";



copyBtn.onclick=function(){


const id =
cells[4].innerText.trim();



const bank =
cells[6]
.innerText
.split(",")[0]
.trim();




        /*
         * ROBUST DATE/TIME DETECTOR
         * Tidak bergantung lagi pada cells[3].
         * Target lama:
         * <p>14/08/2026</p>
         * <p class="whitespace-nowrap">1:01:03 PM</p>
         */

        function parseMotionDateTime(row){

            if(!row)
                return null;

            const cells =
                Array.from(row.querySelectorAll("td"));

            let dateText = "";
            let timeText = "";

            /*
             * Cari tanggal + waktu dari SEMUA TD.
             * Jadi kalau posisi kolom berubah, tetap terbaca.
             */
            for(const cell of cells){

                const nodes = [
                    ...cell.querySelectorAll(
                        "p,span,time,div,small,strong"
                    ),
                    cell
                ];

                for(const node of nodes){

                    const text =
                        (node.textContent || "")
                        .replace(/\u00A0/g," ")
                        .replace(/\s+/g," ")
                        .trim();

                    if(!text)
                        continue;

                    if(!dateText){

                        const dm =
                            text.match(
                                /\b(\d{1,2})[\/.-](\d{1,2})[\/.-](\d{4})\b/
                            );

                        if(dm)
                            dateText = dm[0];
                    }

                    if(!timeText){

                        const tm =
                            text.match(
                                /\b(\d{1,2}):(\d{2})(?::(\d{2}))?\s*(AM|PM)?\b/i
                            );

                        if(tm)
                            timeText = tm[0];
                    }

                    if(dateText && timeText)
                        break;
                }

                if(dateText && timeText)
                    break;
            }

            if(!dateText)
                return null;

            const dm =
                dateText.match(
                    /^(\d{1,2})[\/.-](\d{1,2})[\/.-](\d{4})$/
                );

            if(!dm)
                return null;

            const day   = parseInt(dm[1],10);
            const month = parseInt(dm[2],10);
            const year  = parseInt(dm[3],10);

            const test =
                new Date(year,month-1,day);

            if(
                test.getFullYear() !== year ||
                test.getMonth() !== month-1 ||
                test.getDate() !== day
            )
                return null;

            let hour = 0;
            let minute = 0;
            let second = 0;

            if(timeText){

                const tm =
                    timeText.match(
                        /^(\d{1,2}):(\d{2})(?::(\d{2}))?\s*(AM|PM)?$/i
                    );

                if(tm){

                    hour =
                        parseInt(tm[1],10);

                    minute =
                        parseInt(tm[2],10);

                    second =
                        parseInt(tm[3] || "0",10);

                    const ampm =
                        (tm[4] || "").toUpperCase();

                    if(
                        ampm === "PM" &&
                        hour !== 12
                    )
                        hour += 12;

                    if(
                        ampm === "AM" &&
                        hour === 12
                    )
                        hour = 0;

                    if(
                        hour > 23 ||
                        minute > 59 ||
                        second > 59
                    )
                        return null;
                }
            }

            return (
                String(year).padStart(4,"0") + "-" +
                String(month).padStart(2,"0") + "-" +
                String(day).padStart(2,"0") + " " +
                String(hour).padStart(2,"0") + ":" +
                String(minute).padStart(2,"0") + ":" +
                String(second).padStart(2,"0")
            );
        }


        /*
         * Ambil row terbaru saat COPY ditekan.
         * Jangan menggunakan cells[3] lagi.
         */
        const currentRow =
            copyBtn.closest("tr");

        let tanggal =
            parseMotionDateTime(currentRow);


        /*
         * Fallback terakhir:
         * ambil tanggal dan waktu dari seluruh teks row.
         */
        if(!tanggal){

            const rowText =
                (
                    currentRow?.innerText ||
                    currentRow?.textContent ||
                    ""
                )
                .replace(/\u00A0/g," ")
                .replace(/\s+/g," ")
                .trim();

            const dateMatch =
                rowText.match(
                    /\b\d{1,2}[\/.-]\d{1,2}[\/.-]\d{4}\b/
                );

            const timeMatch =
                rowText.match(
                    /\b\d{1,2}:\d{2}(?::\d{2})?\s*(?:AM|PM)?\b/i
                );

            if(dateMatch){

                let d =
                    dateMatch[0]
                    .match(
                        /^(\d{1,2})[\/.-](\d{1,2})[\/.-](\d{4})$/
                    );

                if(d){

                    const day =
                        parseInt(d[1],10);

                    const month =
                        parseInt(d[2],10);

                    const year =
                        parseInt(d[3],10);

                    let hour = 0;
                    let minute = 0;
                    let second = 0;

                    if(timeMatch){

                        const tm =
                            timeMatch[0].match(
                                /^(\d{1,2}):(\d{2})(?::(\d{2}))?\s*(AM|PM)?$/i
                            );

                        if(tm){

                            hour =
                                parseInt(tm[1],10);

                            minute =
                                parseInt(tm[2],10);

                            second =
                                parseInt(tm[3] || "0",10);

                            const ampm =
                                (tm[4] || "").toUpperCase();

                            if(
                                ampm === "PM" &&
                                hour !== 12
                            )
                                hour += 12;

                            if(
                                ampm === "AM" &&
                                hour === 12
                            )
                                hour = 0;
                        }
                    }

                    tanggal =
                        year + "-" +
                        String(month).padStart(2,"0") + "-" +
                        String(day).padStart(2,"0") + " " +
                        String(hour).padStart(2,"0") + ":" +
                        String(minute).padStart(2,"0") + ":" +
                        String(second).padStart(2,"0");
                }
            }
        }


        /*
         * Tidak lagi memakai DATE ERROR.
         * Kalau benar-benar belum tersedia, gunakan DATE NOT FOUND.
         */
        if(!tanggal)
            tanggal = "DATE NOT FOUND";

const report =
`💸WITHDRAW BIG AMOUNT
${bank}
${id}
Withdraw
${tanggal}
Rp ${value.toLocaleString("en-US")}`;




navigator.clipboard.writeText(report);



copyBtn.innerHTML =
"✔ DONE";



setTimeout(()=>{


copyBtn.innerHTML =
"📋 COPY";


},1200);



};



money.parentElement.insertBefore(
copyBtn,
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
