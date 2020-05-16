'use strict';
window.addEventListener('load', function () {
    const newTask = document.querySelector("#add_new_task p");
    const editButton = document.querySelector('.edit');
    const saveButton = document.querySelector('#submit');
    const slideForm = document.querySelector('.slide');
    $(newTask).on('click', function () {
        if ($('.slide').css('right') === '-1500px') {
            saveButton.innerText = 'CREATE TASK';
            $(slideForm).animate({right: '+=1500px'}, 750);
        }
    });
    /*$(editButton).on('click', function () {
        if ($('.slide').css('right') === '-1500px') {
            saveButton.innerText = 'EDIT TASK';
            $(slideForm).animate({right: '+=1500px'}, 750);
        }
    });*/
});
