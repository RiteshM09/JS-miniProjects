
const clock = document.getElementById("one");

setInterval(()=>{
const localTime = new Date().toLocaleTimeString('en-US',({ hour12: true }));// add AM PM
clock.textContent = localTime;
},1000);





