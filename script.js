let parent    = document.querySelector('.star_parent');
let over      = document.querySelector('.wrap_color_stars');
let cur_width = 0;
let OFFSET    = 30;

parent.onmousemove = handler;
parent.onmouseover = empty_stars;
over.onmousemove   = over_handler;

function fill_stars(num) {
    empty_stars();
    for (let i = 1; i <= num; i++) {
        let tmp = document.getElementById('voit_' + i);
        tmp.classList.add('voit_filled');
    }
}

function empty_stars () {
    for (let i = 1; i < 6; i++) {
        let tmp = document.getElementById('voit_' + i);
        tmp.classList.remove('voit_filled');
        if(tmp.classList.contains('icon-star-half')) {
            tmp.classList.remove('icon-star-half');
            tmp.classList.add('icon-star-full');
        }
    }
}

function over_handler(e) {
    let el_id = e.target.id;
    let num   = el_id.split("_")[1];
    tmp_width = num * 2 * 10;
    if (tmp_width - 10 < cur_width) {
        if (e.offsetX < OFFSET) {
            tmp_width = tmp_width - 10;
        }
        cur_width = tmp_width;
        document.querySelector('.wrap_color_stars').style="width: " + cur_width + '%';
        console.log(cur_width)
    }
}

function handler (e) {
    let el_id = e.target.id;
    let num   = el_id.split("_")[1];
    cur_width = num * 2 * 10;
    if (e.offsetX < OFFSET) {
        cur_width = cur_width - 10;
    }

    document.querySelector('.wrap_color_stars').style="width: " + cur_width + '%';
    console.log(cur_width);
    return false;
}