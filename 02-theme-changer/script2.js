
const input = document.getElementById("InputBox");
const text1 = document.getElementById("text");
const allColor = document.querySelector("#colors");

text1.innerText = "Light Mode";
input.addEventListener('click',(e)=>{
    if(e.target.checked)
    {
        text1.innerText = "Dark Mode";
        document.body.style.color = "rgba(255, 255, 255, 0.7";
        document.body.style.backgroundColor = "#121212";

         //change text for individual buttons
         allColor.classList.remove("light");
         allColor.classList.add("dark");
    }
    else{
        text1.innerText = "Light Mode";
        document.body.style.color = "black";
        document.body.style.backgroundColor = "#ffffff";
       
       //change text for individual buttons 
        allColor.classList.remove("dark");
        allColor.classList.add("light");
    }   
})


allColor.addEventListener('click',(e)=>{
     // console.log(e.target.checked);
     const child = e.target;
     //select body 
     document.body.style.backgroundColor = child.id;
     text1.innerText = "Theme Mode";
    
})