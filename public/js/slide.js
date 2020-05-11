window.addEventListener('load', function () {
    const newTask = document.querySelector("#add_new_task p");
    const editButton = document.querySelector('.edit');
    const saveButton = document.querySelector('#submit');
    const slideForm = document.querySelector('.slide');
    $(newTask).one('click', function () {
        saveButton.innerText = 'CREATE TASK';
        $(slideForm).animate({right: '+=1450px'}, 750);
    });
    $(editButton).one('click', function () {
        saveButton.innerText = 'EDIT TASK';
        $(slideForm).animate({right: '+=1450px'}, 750);
    });
});
