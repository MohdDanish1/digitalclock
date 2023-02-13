let h = document.getElementById("hour");
let m = document.getElementById("minute");
let s = document.getElementById("second");
let ampm = document.getElementById("ampm");

// alert("connected")

function updateTime(){

    h.innerText = new Date().getHours(); 
    m.innerText = new Date().getMinutes(); 
    s.innerText = new Date().getSeconds(); 
    ampm.innerText="AM";
    if(new Date().getHours() <10)
    h.innerText = "0" + h.innerText;
   
   if(new Date().getHours() > 12)
   {
    ampm.innerText="PM";
    h.innerText =  h.innerText-12;

   }

    if(new Date().getMinutes()<10)
    m.innerText = "0" + m.innerText;

    if(new Date().getSeconds() < 10)
    s.innerText = "0" + s.innerText;
    
    setTimeout(updateTime,1000);

}

updateTime();

// We can call this function by this type also
// setInterval(()=>{
//     updateTime()
// },1000)
