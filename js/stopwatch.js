let minuteW = document.getElementById('minW');
let secondW = document.getElementById('secW');
let mlsecondW = document.getElementById('mlsecW');
let btnStopwatch = document.getElementById('btn-stopwatch');
let btnPauseW = document.getElementById('btn-pauseW');
let btnRestartW = document.getElementById('btn-restartW');
let resultTextW = document.getElementById('resultTextW');


btnStopwatch.addEventListener('click',(e)=>{
    e.preventDefault();
    btnStopwatch.style.display = 'none';
    btnPauseW.style.display = 'block';
    btnRestartW.style.display = 'block';

    var setWatch = setInterval(()=>{
        secondW.value++;
        if(secondW.value == 60) {
            secondW.value = 0;
            minuteW.value++;
        }
        var mlsecWatch = setInterval(()=>{
            mlsecondW.value++;
            if(mlsecondW.value == 100) {
                mlsecondW.value = 0;
            }
        } ,10);
        // Pause button
        btnPauseW.addEventListener('click',(e)=>{
            e.preventDefault();
            btnStopwatch.style.display = 'block';
            btnPauseW.style.display = 'none';
            clearInterval(setWatch);
            clearInterval(mlsecWatch);
        });
        // Restart button
        btnRestartW.addEventListener('click',(e)=>{
            e.preventDefault();
            minuteW.value = 0;
            secondW.value = 0;
            mlsecondW.value = 0;
            clearInterval(setWatch);
            clearInterval(mlsecWatch);
            btnStopwatch.style.display = 'block';
            btnPauseW.style.display = 'none';
            btnRestartW.style.display = 'none';
        });
    } ,1000);
});