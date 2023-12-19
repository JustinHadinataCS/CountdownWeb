let hour = document.querySelector(".js-hour");
let minute = document.querySelector(".js-minute");
let second = document.querySelector(".js-second");
let seconds = 0
function clock(){
    setInterval(function(){
        seconds += 1
        second.innerText = seconds;
        if (seconds == 60){
            seconds = 0
            minute.innerHTML = parseInt(minute.innerHTML) + 1
        } 
        if (minute.innerHTML == 60){
            minute.innerHTML = 0
            hour.innerHTML = parseInt(hour.innerHTML) + 1
        }
    },10)
}

let important = document.querySelector(".important");
important.addEventListener("click", function(){
    clock()
})
