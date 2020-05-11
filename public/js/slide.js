window.addEventListener('load', function () {
    const newTask = document.querySelector("#add_new_task p");
    const slideForm = document.querySelector('.slide');
    $(newTask).one('click', function () {
        $(slideForm).animate({right: '+=1450px'}, 750);
    });
});
