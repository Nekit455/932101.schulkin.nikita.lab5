function show_back() {
    document.getElementsByClassName("back")[0].style.display = 'block';
    document.getElementById('new1').style.opacity = '0.3';
    document.getElementById('new2').style.opacity = '0.3';
    document.getElementById('new3').style.opacity = '0.3';
}

function show1() {
    show_back();
    document.getElementById('win1').style.display = 'block';
}

function show2() {
    show_back();
    document.getElementById('win2').style.display = 'block';
}

function show3() {
    show_back();
    document.getElementById('win3').style.display = 'block';
}

function close_all() {
    document.getElementsByClassName("back")[0].style.display ='none';
    document.getElementById('win1').style.display = 'none';
    document.getElementById('win2').style.display = 'none';
    document.getElementById('win3').style.display = 'none';
    document.getElementById('new1').style.opacity = '1';
    document.getElementById('new2').style.opacity = '1';
    document.getElementById('new3').style.opacity = '1';
}