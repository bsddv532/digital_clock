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
        hh = hh - 12;
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


    var mo = document.getElementById("wakeup-time").value;
    var lu = document.getElementById("lunch-time").value;
    var na = document.getElementById("nap-time").value;
    var hours = new Date().getHours();


    //if((mo == "default")&&(lu == "default")&&(na == "default")){
    if((mo != hours)&&(lu != hours)&&(na != hours)){
        document.getElementById("card-image").style.backgroundImage = "url(./images/hacker.jpg)";
        document.getElementById("about-image").innerText="PLEASE SET YOUR TIME";
    }
 
}
currentTime();



function printMessage(){
    var msg = document.getElementById("unique");
    msg.style.display = "block";

    var wakeup = document.getElementById("wakeup-time");
    var value = wakeup.options[wakeup.selectedIndex].text;

    var lunch = document.getElementById("lunch-time");
    var value2 = lunch.options[lunch.selectedIndex].text;

    var nap = document.getElementById("nap-time");
    var value3 = nap.options[nap.selectedIndex].text;

    msg.innerText= "WAKE UP TIME IS " + value + "\n" + "LUNCH TIME IS " + value2 + "\n" + "NAP TIME IS " + value3;
}


function setAlarm(){
    var mo = document.getElementById("wakeup-time").value;
    var lu = document.getElementById("lunch-time").value;
    var na = document.getElementById("nap-time").value;

    var hour = new Date().getHours();

    if(mo == hour){
        document.getElementById("card-image").style.backgroundImage = "url(./images/wakeup_image.svg)";
        document.getElementById("about-image").innerText="GOOD MORNING FRIENDS";
    }

    else if(lu == hour){
        document.getElementById("card-image").style.backgroundImage = "url(./images/lunch_image.svg)";
        document.getElementById("about-image").innerText="LET'S HAVE SOME LUNCH";
    }

    else if(na == hour){
        document.getElementById("card-image").style.backgroundImage = "url(./images/goodnight_image.svg)";
        document.getElementById("about-image").innerText="THIS IS THE BED TIME";
    }

    else{
        document.getElementById("card-image").style.backgroundImage = "url(./images/hacker.jpg)";
        document.getElementById("about-image").innerText="PLEASE SET YOUR TIME";
    }

    printMessage();
}
