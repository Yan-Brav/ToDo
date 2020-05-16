'use strict';
window.addEventListener('load', function () {
    const newTask = document.querySelector("#add_new_task p");
    const todoIDStorage = document.querySelector('#todo_id');
    const saveButton = document.querySelector('#submit');
    const slideForm = document.querySelector('.slide');
    $(newTask).on('click', function () {
        if ($('.slide').css('right') === '-1500px') {
            $(slideForm).animate({right: '+=1500px'}, 750);
        }
        saveButton.innerText = 'CREATE TASK';
        todoIDStorage.innerText = '';
    });
});
