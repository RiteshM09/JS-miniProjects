// Name input element 
const formName = document.getElementById("name");
// tag to diplay event
const display = document.getElementById("displayEvent");

// date
// get date from form
const eventDate = document.getElementById("futureDate");
//  Get current date directly in "YYYY-MM-DD" format
const currentDate = new Date().toISOString().split('T')[0];


document.getElementById("outer").style.display = "none";// hide the output at start 
//form 
const formMain = document.getElementById("form");
//countdown
const countdownDisplay = document.getElementById("countdown"); 

// form content
const formContent = document.getElementById("form");

let timerInterval; // to manage timer loop (resubmition,hadling -ve date)
function FormSubmission(e){
    e.preventDefault();// prevent frm reloading

    // clear previou msg and countdown
     clearInterval(timerInterval);

    //get EVENT time(in ms) from event date
 // Adding T00:00 forces JS to treat the form date as a local time(12:00) not indian IST 5:30
    const eventDateInMs = new Date(eventDate.value + "T00:00").getTime(); 
    console.log(eventDateInMs);
    
    
    timerInterval = setInterval(function() {

           // get current date(in ms)
        const currentDateInMS = Date.now();

        // calculate conversion frm ms to ( day | hr | min | sec )
        let timediff = eventDateInMs - currentDateInMS;
        console.log(timediff);
        //  ms -> sec -> min -> hr -> days
        const day = Math.floor(timediff/(1000*60*60*24));
        timediff = timediff%((1000*60*60*24));// Remaining TIME in hr (in ms)
        
        const hr = Math.floor(timediff/(1000*60*60));
        timediff = timediff%((1000*60*60)); 

        const min = Math.floor(timediff/(1000*60));
        timediff = timediff%(1000*60);

        const sec = Math.floor(timediff/(1000));

        console.log( Math.floor((timediff)%1000*60*60*24));

        // console.log(currentDate);
        // console.log(eventDate.value);
        
        // PREVENT NEGATIVE COUNTDOWNS
        if (timediff <= 0) {
            display.textContent = formName.value;
            clearInterval(timerInterval); 
        }

        // card style 
        // after submition handle font and outer content
        document.getElementById("simpleInfo").style.display = "none";// hide the form content 
        document.getElementById("outer").style.display = "block";// display result



        if(eventDate.value>currentDate)
        {   // hide form content after submittion
            formContent.style.display = "none";
            
            // console.log(formName.value);
            display.textContent = formName.value;

            // console.log(eventDate.value);
            countdownDisplay.textContent = day + "days " + hr + "hr " + min + "min " + sec + "s remaining";
          
        }else if(eventDate.value===currentDate){
            // event occure
            formContent.style.display = "none";
            display.textContent = "Hurray 🎉 Time's up! ";

        }
        else{
            display.textContent = "Invalid Date(accepts future date only)";
            countdownDisplay.textContent = "";
        }

    },1000);
   
}
// 
formMain.addEventListener('submit',FormSubmission);

