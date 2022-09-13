"use strict";

function hideContent() {
    $a('.tab-content').forEach((e) => {
        e.style.display = "none";
    })

    $a('.tab-item').forEach((e) => {
        e.classList.remove('active');
    })
}

hideContent();

function showContent(i = 0, b, c) {
    $a('.tab-content')[i].style.display = "block";
    $a('.tab-item')[i].classList.add('active');
}

showContent();

$('.tab-wrapper').addEventListener('click', (e) => {
    if(e.target && e.target.classList.contains("tab-item")) {
        $a(".tab-item").forEach((item, i) => {
            if ( e.target === item) {
                hideContent();
                showContent(i);
                // console.log(e.target);
                // console.log(item);
            }
        })
    }
})