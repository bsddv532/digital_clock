function currentTime(){
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
  
    if(hh == 0){
        session = "AM";
    }
    if(hh >= 12){
        session = "PM";
        // hh = hh - 12;
    }

    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;
      
    // const hour = document.getElementById("h")
    // hour.innerText = hh + "\n" + "hours";
    document.getElementById("h").innerText = hh + "\n" + "hours";
    document.getElementById("m").innerText = mm + "\n" + "min";
    document.getElementById("s").innerText = ss + "\n" + "sec";
    document.getElementById("am").innerText = session;

    setTimeout(function(){ 
        currentTime();
    }, 1000);
}

currentTime();


function setAlarm(){
    
    var wakeup = document.getElementById("wakeup-time").value;
    var lunch = document.getElementById("lunch-time").value;
    var nap = document.getElementById("nap-time").value;

    var msg = document.getElementById("unique");
    var txt = document.getElementById("about-image");
    var pic = document.getElementById("card-image");

    function wakeup_msg(){
        if((wakeup == "default")&&(lunch == "default")&&(nap == "default")){
            msg.style.display = "block";
            msg.innerText = "Please set the time first";
            txt.innerText = "HAVE A GOOD DAY";
            // pic.src = "D:\PREPBYTES\project\digital_clock\images\wakeup_image.svg"
            // document.getElementById("card-image").src = "./images/default.png";
            // dc.getelmntbyid("card-image"). style =img.scr="./images/default.png";
        }
        else{
            // msg.innerText = "The Wakeup Time is" + wakeup;

            const element = document.createElement("h4");
            element.setAttribute("class","heading1");
            element.innerText = "The Wakeup Time is " + wakeup;
            // console.log(element);
            msg.appendChild(element);
            msg.style.display = "block";
        }
    }


    function lunch_msg(){
        if((wakeup == "default")&&(lunch == "default")&&(nap == "default")){
            msg.style.display = "block";
            msg.innerText = "Please set the time first";
        }
        else{
            const element = document.createElement("h4");
            element.setAttribute("class","heading2");
            element.innerText = "The Lunch Time is " + lunch;
            msg.appendChild(element);
            msg.style.display = "block";
        }
    }


    function nap_msg(){
        if((wakeup == "default")&&(lunch == "default")&&(nap == "default")){
            msg.style.display = "block";
            msg.innerText = "Please set the time first";
        }
        else{
            const element = document.createElement("h4");
            element.setAttribute("class","heading3");
            element.innerText = "The Nap Time is " + nap;
            msg.appendChild(element);
            msg.style.display = "block";
        }
    }

    wakeup_msg();
    lunch_msg();
    nap_msg();



}




// function setAlarm(){
//     let date = new Date(); 
//     let hh = date.getHours();
//     let mm = date.getMinutes();
//     let ss = date.getSeconds();
//     let session = "AM";

//     var wakeup = document.getElementById("wakeup-time").value;
//     var lunch = document.getElementById("lunch-time").value;
//     var nap = document.getElementById("nap-time").value;

//     var msg = document.getElementById("unique");
//     var txt = document.getElementById("about-image");
//     var pic = document.getElementById("card-image");

//     function wakeup_msg(){
//         f((wakeup == "default"){
//             msg.style.display = "block";
//             msg.innerText = "Please set the time first";
//             txt.innerText = "HAVE A GOOD DAY";
//             // pic.src = "D:\PREPBYTES\project\digital_clock\images\wakeup_image.svg"
//             // document.getElementById("card-image").src = "./images/default.png";
//             dc.getelmntbyid("card-image"). style =img.scr="./images/default.png";
//         }
//         else{
//             // msg.innerText = "The Wakeup Time is" + wakeup;

//             const element = document.createElement("h4");
//             element.setAttribute("class","heading1");
//             element.innerText = "The Wakeup Time is " + wakeup;
//             // console.log(element);
//             msg.appendChild(element);
//             msg.style.display = "block";
//         }
//     }


//     function lunch_msg(){
//         if((wakeup == "default")&&(lunch == "default")&&(nap == "default")){
//             msg.style.display = "block";
//             msg.innerText = "Please set the time first";
//         }
//         else{
//             const element = document.createElement("h4");
//             element.setAttribute("class","heading2");
//             element.innerText = "The Lunch Time is " + lunch;
//             msg.appendChild(element);
//             msg.style.display = "block";
//         }
//     }


//     function nap_msg(){
//         if((wakeup == "default")&&(lunch == "default")&&(nap == "default")){
//             msg.style.display = "block";
//             msg.innerText = "Please set the time first";
//         }
//         else{
//             const element = document.createElement("h4");
//             element.setAttribute("class","heading3");
//             element.innerText = "The Nap Time is " + nap;
//             msg.appendChild(element);
//             msg.style.display = "block";
//         }
//     }

//     wakeup_msg();
//     lunch_msg();
//     nap_msg();
// }
