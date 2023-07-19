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

    var secWatch = setInterval(()=>{
        secondW.value++
        var mlsecWatch = setInterval(()=>{
            mlsecondW.value++;
            if(mlsecondW.value == 100) {
                mlsecondW.value = 0;
            }
        } ,10);
        btnPauseW.addEventListener('click',(e)=>{
            e.preventDefault();
            btnStopwatch.style.display = 'block';
            clearInterval(secWatch);
            clearInterval(mlsecWatch);
        });
        btnRestartW.addEventListener('click',(e)=>{
            secondW.value = 0;
            mlsecondW.value = 0;
            clearInterval(secWatch);
            clearInterval(mlsecWatch);
            btnStopwatch.style.display = 'block';
            btnPauseW.style.display = 'none';
            btnRestartW.style.display = 'none';
        });
    } ,1000);
});
