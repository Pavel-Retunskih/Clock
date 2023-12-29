let timerId; // переменная, которая будет хранить ID таймера


const startButton = document.getElementById('start');
startButton.addEventListener('click', function () {
    // НУЖНО ПОГУГЛИТЬ ЧТО ТАКОЕ setInterval
    if(!timerId){
        timerId = setInterval(updateClock, 1000);
    }
     // запускаем  updateClock() каждую секунду
    console.log(timerId);
});


const stopButton = document.getElementById('stop');
stopButton.addEventListener('click', function () {
    // НУЖНО ПОГУГЛИТЬ ЧТО ТАКОЕ clearInterval
    clearInterval(timerId); // останавливаем таймер
    timerId = undefined;
    console.log(timerId);
});


function updateClock() {
    const clock = document.getElementById('clock');
    // НУЖНО ПОГУГЛИТЬ ЧТО ТАКОЕ new Date()
    const now = new Date();
    const hours = now.getHours()
    const minutes = now.getMinutes()
    const seconds = now.getSeconds()

    return clock.textContent = `${hours < 10 ? '0' + hours : hours }:${minutes <10 ? '0' + minutes : minutes}:${seconds <10 ? '0' + seconds : seconds}`;
}
