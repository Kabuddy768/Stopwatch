const timeDisplay = document.querySelector("#timeDisplay")
const startBtn = document.querySelector("#startBtn")
const pauseBtn = document.querySelector("#pauseBtn")
const resetBtn = document.querySelector("#resetBtn")

let startTime =0
let elapsedTime =0
let currentTime =0
let paused = true
let intervalId
let hrs =0
let min =0
let secs =0

startBtn.addEventListener("click", ()=>{
    paused = true
    startTime = Date.now() - elapsedTime
    intervalId = setInterval(updateTime, 1000)
})
pauseBtn.addEventListener("click", ()=>{
    paused = true
    elapsedTime=  Date.now() - startTime
    clearInterval(intervalId)
    
})
resetBtn.addEventListener("click", ()=>{
    paused = true
    clearInterval(intervalId)
    startTime =0
    elapsedTime =0
    currentTime =0
    hrs =0
    min =0
    secs =0
    timeDisplay.textContent = "00:00:00"
})

function updateTime(){
    elapsedTime = Date.now()- startTime

    secs = Math.floor((elapsedTime/1000)%60)
    min = Math.floor((elapsedTime/(1000*60))%60)
    hrs = Math.floor((elapsedTime/(1000*3600))%60)

    secs = pad(secs)
    min = pad(min)
    hrs = pad(hrs)

    timeDisplay.textContent = `${hrs}:${min}:${secs}`

    function pad(unit){
        return(("0")+ unit).length >2 ? unit: "0"+ unit
    }
}