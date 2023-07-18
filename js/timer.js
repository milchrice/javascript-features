let minute = document.getElementById('min');
let second = document.getElementById('sec');
let mlsecond = document.getElementById('msec');
let btnTimer = document.getElementById('btn-timer');
let btnRestart = document.getElementById('btn-restart');
let resultText = document.getElementById('resultText');

btnTimer.addEventListener('click',(e)=>{
    e.preventDefault();
    var current = second.value;

    if((minute.value > 0) || (second.value > 0)) {
        
        // Set minutes
        var minTimer = setInterval(()=>{
            minute.value--;
        } , 60000);
        
        // Set seconds : repeat every seconds
        var repeatSec = setInterval(()=>{
            if(second.value === 0) {
                second.value = 59;
                minute.value--;
            } else {
                second.value = current;
            }
            var secTimer = setInterval(()=>{
                second.value--;
                if(second.value < 0) {
                    minute.value--;
                    second.value = 59;
                }
                // Results
                if((minute.value == 0) && (second.value == 0)) {
                    clearInterval(secTimer);
                    clearInterval(minTimer);
                    let newText = document.createElement('p')
                    newText.innerHTML = "DONE!";
                    resultText.appendChild(newText);
                    document.querySelector('body').style.backgroundColor = "coral"
                    btnTimer.style.display = "none";
                    btnRestart.style.display = "block";
                    btnRestart.addEventListener('click', (e)=>{
                        e.preventDefault();
                        document.querySelector('body').style.backgroundColor = "transparent"
                        btnTimer.style.display = "block";
                        btnRestart.style.display = "none";
                        newText.innerHTML = "";
                    });
                }
            } , 1000);
            if(minute.value !== 0) {
                clearInterval(repeatSec);
            }
        }, 1000);
    }
});