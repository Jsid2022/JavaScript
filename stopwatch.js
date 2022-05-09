flag = false
let mili = 0
let sec = 0
let min = 0
let interval;

    function bt_start() {
        if(flag === false) {
            interval = setInterval(startTimer, 10)
            start.innerHTML = "<i class="+'"fa-solid fa-pause"'+"></i>";
            flag = true
        }
        else if(flag === true) {
            clearInterval(interval)
                start.innerHTML = "<i class="+'"fa-solid fa-play"'+"></i>";
                flag = false
        }
    }

    function startTimer() {
        mili++

        if(mili <= 9) {
            ms.innerHTML = "0" + mili
        }

        if(mili > 9) {
            ms.innerHTML = mili
        }

        if(mili > 99) {
            sec++;
            seconds.innerHTML = "0" + sec + ":";
            mili = 0;
            ms.innerHTML = "0" + 0;
            if(sec > 9) {
                seconds.innerHTML = sec + ":"
            }
            if(sec > 59) {
                min++;
                minute.innerHTML = "0" + min + ":";
                sec = 0
                seconds.innerHTML = "00:"
            }
        }
    }

    function bt_reset() {
        clearInterval(interval)
        if(flag === true) {
            start.innerHTML = "<i class="+'"fa-solid fa-play"'+"></i>";
            flag = false;
        }
        mili = 0;
        sec = 0;
        min = 0;
        ms.innerHTML = "00";
        seconds.innerHTML = "00:";
        minute.innerHTML = "00:";
    }