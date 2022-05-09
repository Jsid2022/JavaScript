setInterval(fun, 1000)

    function fun() {
        
        d = new Date()

        current_time = d.toTimeString()
        current_date = d.toDateString()

        hour.innerHTML = current_time.slice(0,2)
        minute.innerHTML = " " + current_time.slice(3,5)
        seconds.innerHTML = current_time.slice(6,8)
        day.innerHTML = current_date
        
    }