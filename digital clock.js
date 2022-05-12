function showTime() {
    let date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    let session = "AM" ;
  

    if( h==0 ){
        h = 12 ;
    }
    if( h>12){
        h =h-12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
 
    let time = h + ":" + m + ":" + s ;
    document.getElementById("clockdiv").innerText = time ;

    setTimeout(showTime,1000);

}
showTime();