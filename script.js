setInterval(function() {
    
    //ОБНАРУЖЕНИЕ ПЕРВОГО И ВТОРОГО ЧИСЛА ЧАСА/МИНУТЫ/СЕКУНДЫ

    let hr1 = new Date().getHours()
    let hr1_temp = hr1.toString().split('');
    if (hr1_temp.length == 1) {
        hr1 = 0;
    } else {
        hr1 = hr1_temp[0];
    };

    let hr2 = new Date().getHours()
    let hr2_temp = hr2.toString().split('');
    if (hr2_temp.length == 1) {
        hr2 = hr2_temp[0];
    } else {
        hr2 = hr2_temp[1];
    };

    let min1 = new Date().getMinutes()
    let min1_temp = min1.toString().split('');
    if (min1_temp.length == 1) {
        min1 = 0;
    } else {
        min1 = min1_temp[0];
    };

    let min2 = new Date().getMinutes()
    let min2_temp = min2.toString().split('');
    if (min2_temp.length == 1) {
        min2 = min2_temp[0];
    } else {
        min2 = min2_temp[1];
    };

    let sec1 = new Date().getSeconds()
    let sec1_temp = sec1.toString().split('');
    if (sec1_temp.length == 1) {
        sec1 = 0;
    } else {
        sec1 = sec1_temp[0];
    };

    let sec2 = new Date().getSeconds()
    let sec2_temp = sec2.toString().split('');
    if (sec2_temp.length == 1) {
        sec2 = sec2_temp[0];
    } else {
        sec2 = sec2_temp[1];
    };
    
    //ВЫВОД В БРАУЗЕР
    
    document.getElementById('hr1').innerHTML = hr1;
    document.getElementById('hr2').innerHTML = hr2;
    document.getElementById('min1').innerHTML = min1;
    document.getElementById('min2').innerHTML = min2;
    document.getElementById('sec1').innerHTML = sec1;
    document.getElementById('sec2').innerHTML = sec2;
}, 1000)