//Selecting DOM Elements
const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const name = document.getElementById('name');
const focus = document.getElementById('focus');

//Showing Time
function showTime() {
    let today = new Date(), 
        hour = today.getHours(),
        minutes = today.getMinutes(),
        seconds = today.getSeconds();

    //Set AM / PM
    const amPm = hour >= 12 ? 'PM' : 'AM';

    //12hr Format
    hour = hour % 12 || 12;

    //Output Time
    time.innerHTML = `${hour}<span>:</span>${addZero(minutes)}<span>:</span>${addZero(seconds)} ${amPm}`;

    setTimeout(showTime, 1000);
}

//Adding 0 function

function addZero(n) {
   return(parseInt(n, 10) < 10 ? '0' : '') + n; 
}

//Set Background and Greeting
function setBgGreet() {
    let today = new Date (), 
    hour = today.getHours();

    if(hour < 12) {
        //Morning
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x1080/?morning')";
        greeting.textContent = 'Good Morning';
        document.body.style.color = 'black';
        
    } else if (hour < 18) {
        //Afternoon
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x1080/?afternoon')";
        greeting.textContent = 'Good Afternoon';

    } else {
        //Evening
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x1080/?night')";
        greeting.textContent = 'Good Evening';
        document.body.style.color = 'white';
    
    }
}
//Run
showTime();
setBgGreet();
