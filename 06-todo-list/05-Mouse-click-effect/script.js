
const cursor = document.querySelector("body");
// const box = document.getElementsByClassName("box1");

function Move(e){
    // console.log(e);
    // console.log(e.clientX,e.clientY);

    // create new element 
    const newElement = document.createElement('div');
    // add css to new element using classList frm css
    newElement.classList.add("box1");

    // list of 50 distinct color names
    const colors = [
        "Crimson", "DarkSalmon", "LightCoral", "DeepPink", "Tomato", 
        "OrangeRed", "DarkOrange", "Orange", "Gold", "Yellow", 
        "Moccasin", "PeachPuff", "Lavender", "Thistle", "Plum", 
        "Orchid", "Magenta", "MediumPurple", "SlateBlue", "BlueViolet", 
        "DarkMagenta", "Purple", "Indigo", "Chartreuse", "LimeGreen", 
        "PaleGreen", "MediumSpringGreen", "ForestGreen", "Green", "Olive", 
        "Teal", "DarkCyan", "Aqua", "Cyan", "Turquoise", 
        "Aquamarine", "CadetBlue", "SkyBlue", "DeepSkyBlue", "DodgerBlue", 
        "RoyalBlue", "Blue", "Navy", "MidnightBlue", "Wheat", 
        "Tan", "Sienna", "Maroon", "Silver", "SlateGray"
      ];
      // pick a random no. frm 0 to 50
      const index = Math.floor(Math.random()*colors.length );
      // pull the color from array index
      newElement.style.backgroundColor = colors[index];
      console.log(index);
      newElement.style.top = e.clientY-35+"px"; // adjust positon of circle
      newElement.style.left = e.clientX-35+"px";
      
    // // delete the box after animation end
    //   newElement.addEventListener('animationend',()=>{
    //     console.log("Animation finished successfully!"); 
    //     newElement.remove();
    //   });

       // at last 
      // add new element to body
      document.body.append(newElement);
      
    
     
}

cursor.addEventListener("click",Move);
