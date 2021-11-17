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