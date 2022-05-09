game_box.style = "display: none;"
game_over.style = "display: none;"

    function game_start() {
        but.style = "display: none;"
        game_box.style = "display: block;"
    }

    function shuffle_images() {
        // Shuffle Images
        images = [false, false, false, false, false, false, false, false, false]
        let j = 0
        for(let i=0;i<9;i++) {
            images[j] = false
            // Generate random number(0-8) on each iteration
            random_num = Math.floor(Math.random() * 9)
            // set that index(random number) to true
            images[random_num] = true
            // set back that index to false
            j = random_num
        }
        return images
    }

is_yeti = shuffle_images()

    function display_image(i) {
        if(is_yeti[i] == true) {
            document.getElementById("penguin"+i).src = "images/yeti.png";
            return setTimeout(over, 800)
        }
        else {
            document.getElementById("penguin"+i).src = "images/penguin.png";
        }
    }

    function over() {
        game_box.style = "display: none;"
        game_over.style = "display: block;"
    }