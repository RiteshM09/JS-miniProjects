// main div
const main = document.querySelector("form");
const inputText = document.querySelector("input");
const targetUl = document.getElementById("allTask");

const addBtn = document.getElementById("btnAdd");

function AddTask(e){
    e.preventDefault();
    // count no. of task 
    console.log(targetUl.children.length);
    if(targetUl.children.length>=25)
    {
        alert("Maximum task Reached😝! pls delete some first.");
        return;
    }
    
    const displayText = inputText.value.trim();

    // if text is empty
    if (displayText === "") {
        alert("Please type something first!");
        return;
    }

   const LI = document.createElement("li");
//    console.log(displayText);

   // dynamically insert the (task created via html,css) into new Li
    LI.innerHTML = `<span>${displayText}</span>
    <div id="btns">
        <button id="btnDone">Done</button>
        <button id="btnDel">DELETE</button>
    </div>`;
   
    // console.log(LI); 
    // add into ul
    targetUl.append(LI);
    
}
main.addEventListener("submit",AddTask);

// delete task
targetUl.addEventListener('click',(e)=>{
    // console.log(e.target.classList.closest("li"));
    //  console.log(e.target.closest("#btnDel"));
     if(e.target.closest("#btnDel"))
     {
             e.target.closest("li").remove();
             return;
             // console.log(e.target.li);
     }
     if(e.target.closest('#btnDone')){
        const btnContent = e.target.closest('li');
        // console.log(btnContent);
        const spanTag = btnContent.querySelector("span");
        // console.log(spanTag);
        spanTag.classList.add("completed-task");
        
     }
})