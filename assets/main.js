function addZero(time) {
    if (time < 10) {
        time = "0" + time
    }
    return time
}

function getTime() {
    let date = new Date;
    let hour = addZero(date.getHours())
    let minute = addZero(date.getMinutes())

    let time = hour + ":" + minute

    document.querySelector("#time").innerHTML = time
    setTimeout(getTime, 1000)
}

getTime()
particlesJS.load('particlejs', 'config/particlesjs.json')