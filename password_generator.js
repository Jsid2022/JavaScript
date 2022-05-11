random_pass = document.getElementById('passw')
increase = document.getElementById('incre')
decrease = document.getElementById('decre')
length_val = document.getElementById('len')

    function counter(i) {
        count = length_val.innerHTML
        if(i == 0) {
            count = parseInt(count) + 1
            // console.log(typeof(count))
            length_val.innerHTML = count
        } else {
            count = parseInt(count) - 1
            length_val.innerHTML = count
        }
    }

    function generator() {
        // Stored all charactersets in variables.
        let lowercase = 'abcdefghjklmnopqrstuvwxyz'
        let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        let numbers = '0123456789'
        let symbols = '~!@#$%^&*-/?|'

        // Make a array of those charactersets.
        lowercase_list = lowercase.split('')
        uppercase_list = uppercase.split('')
        numbers_list = numbers.split('')
        symbols_list = symbols.split('')

        // Pick a random Index number from each array.
        // Run loop 100 times for random number, so it is not
        // Predictable.
        for(let i=0;i<100;i++) {
            lower = Math.floor(Math.random() * lowercase_list.length)
            upper = Math.floor(Math.random() * uppercase.length)
            num = Math.floor(Math.random() * numbers_list.length)
            symb = Math.floor(Math.random() * symbols_list.length)
        }

        // store each random characterset in a list
        random_lower = [lowercase_list[lower]]
        random_upper = [uppercase_list[upper]]
        random_num = [numbers_list[num]]
        random_symb = [symbols_list[symb]]
        console.log(random_lower)
        
        // and concatenate them(Arrays).
        random_password = random_lower.concat(random_upper, random_num, random_symb)
        j = 0
        // Shuffle random password array so first item is
        // not always a lowercase.
        for(let i=0;i <random_password.length;i++) {
            rand_num = Math.floor(Math.random() * random_password.length)
            j = random_password[i]
            random_password[i] = random_password[rand_num]
            random_password[rand_num] = j
        }

        final_pass = ''
        // and add those items in array(random_password)
        // to a string variable(final_pass).
        for(let i=0;i <random_password.length;i++) {
            final_pass += random_password[i]
        }
        
        // Array for all lists.
        combined_list = lowercase_list.concat(uppercase_list, symbols_list, numbers_list)
        a = 0
        // also shuffle the combination of all list.
        for(let b=0;b<combined_list.length;b++) {
            rand_num2 = Math.floor(Math.random() * combined_list.length)
            a = combined_list[b]
            combined_list[b] = combined_list[rand_num2]
            combined_list[rand_num2] = a
        }

        ix = 0
        // Select the remaining charactersets from combined_list(shuffled)
        // till the password length value.
        while(ix < parseInt(length_val.innerHTML)) {
            rand_num3 = 0
            for(let z=0;z<combined_list.length;z++) {
                rand_num3 = Math.floor(Math.random() * combined_list.length)
            }
            final_pass += combined_list[rand_num3]
            if(final_pass.length == parseInt(length_val.innerHTML)) {
                break
            }
            ix += 1
        }
        // update the password in div.
        random_pass.innerHTML = final_pass
        random_pass.style = "color: blue;"
    }