let minute = document.getElementById('min');
let second = document.getElementById('sec');
let btnTimer = document.getElementById('btn-timer');
let btnRestart = document.getElementById('btn-restart');
let resultText = document.getElementById('resultText');

btnTimer.addEventListener('click',(e)=>{
    e.preventDefault();
    var current = second.value;

    if((minute.value > 0) || (second.value > 0)) {
        // Set seconds : repeat every seconds
        btnTimer.style.display = 'none';
        btnRestart.style.display = 'block';
        let newText = document.createElement('p')
        btnRestart.addEventListener('click', (e)=>{
            e.preventDefault();
            document.querySelector('body').classList.remove("bodyResult");
            btnTimer.style.display = "block";
            btnRestart.style.display = "none";
            newText.innerHTML = "";
            clearInterval(secTimer);
            clearInterval(minTimer);
            minute.value = 0;
            second.value = 0;
        });

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
                newText.innerHTML = "DONE!";
                resultText.appendChild(newText);
                document.querySelector('body').classList.add("bodyResult");
                btnTimer.style.display = "none";
                btnRestart.style.display = "block";
            }
        } , 1000);
    }
});