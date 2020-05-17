'use strict';
window.addEventListener('load', function () {
    //Lists of tasks
    const listElectricianTask = ['Fix a light', 'Fix a socket', 'Fix a switch',
        'Install a light', 'Install a socket', 'Install a switch'];
    const listPlumberTask = ['Unblock a toilet', 'Unblock a sink', 'Fix a water leak',
        'Install a sink', 'Install a shower', 'Install a toilet'];
    const listGardenerTask = ['Plant a tree', 'Water the plants', 'Loosen the soil',
        'Trim the bushes', 'Fertilize the soil', 'Harvest'];
    const listHousekeeperTask = ['Wipe off the dust', 'Wash the floor', 'Vacuum clean',
        'Wash the dishes', 'Knock out carpet', 'Clean up'];
    const listCookTask = ['Cook meat', 'Make a cake', 'Cook borsch',
        'Make coffee', 'Sour cabbage', 'Make canned food'];
    //Images of task types
    const electrician = document.querySelector('#electrician');
    const plumber = document.querySelector('#plumber');
    const gardener = document.querySelector('#gardener');
    const housekeeper = document.querySelector('#housekeeper');
    const cook = document.querySelector('#cook');
    //fieldset for task template
    const templateContainer = document.querySelector('#task_type_template');
    //div for task template
    const taskTemplates = document.querySelector('#type_template');
    //Task template title <p>
    const typeTaskTitle = document.querySelector('#task_type_template p');
    //<p> for summary task
    const taskSummary = document.querySelector('#task_summary');
    //Textarea for description
    const description = document.querySelector('#description');
    //Textarea for location
    const location = document.querySelector('#location');
    //<p> for location (address)
    const address = document.querySelector('#address');
    //<input type date> for expiry date
    const expDate = document.querySelector('#exp_data');
    //<p> for expiry date
    const dataTask = document.querySelector('#data_task');
    //Create-Edit button
    const buttonCreateEdit = document.querySelector('#submit');
    //Close button (X)
    const closeButton = document.querySelector('.form_task_close');

    const requestURL = 'http://localhost:3333/todos';
    //Div for sliding panel
    const slideForm = document.querySelector('.slide');
    //Div for todos on the right panel
    const divFromDB = document.querySelector('#from_db');
    //Element for keeping todos ID
    const todoIDStorage = document.querySelector('#todo_id');
    //Buttons for manage todos
    let buttonEdit;
    let buttonDelete;
    let infoObject = {};

    //Candidate to view class
    function createTodoContainer(date, task) {
        const divTodoContainer = document.createElement('div');
        const divDeadline = document.createElement('div');
        const divTaskContent = document.createElement('div');
        const divTaskManager = document.createElement('div');
        buttonEdit = document.createElement('button');
        buttonDelete = document.createElement('button');
        //Set classes to elements
        divTodoContainer.className = 'todo_items';
        divDeadline.className = 'deadline';
        divTaskContent.className = 'task_content';
        divTaskManager.className = 'task_manager';
        buttonEdit.className = 'edit';
        buttonDelete.className = 'delete';
        //Filling content todos
        divDeadline.innerText = date;
        divTaskContent.innerText = task;
        buttonEdit.innerText = 'Edit';
        buttonDelete.innerText = 'Delete';
        //Appending elements
        divTaskManager.appendChild(buttonEdit);
        divTaskManager.appendChild(buttonDelete);
        divTodoContainer.appendChild(divDeadline);
        divTodoContainer.appendChild(divTaskContent);
        divTodoContainer.appendChild(divTaskManager);
        divFromDB.appendChild(divTodoContainer);
        return divTodoContainer;
    }
    //Electrician Task
    function getElectricianTasks() {
        const typeTask = electrician.id;
        $(plumber).css('border', 'none');
        $(gardener).css('border', 'none');
        $(housekeeper).css('border', 'none');
        $(cook).css('border', 'none');
        $(electrician).css('border', '2px solid #2668ff');
        typeTaskTitle.innerText = `${typeTask.toUpperCase()} TASK`;
        taskTemplates.innerHTML = '';
        listElectricianTask.forEach(item => {
            let taskTemplate = document.createElement('div');
            taskTemplate.className = 'type_template_item';
            taskTemplate.innerText = item;
            taskTemplates.appendChild(taskTemplate);
        });
    }
    electrician.addEventListener('click', getElectricianTasks);
    //Plumber task
    function getPlumberTask() {
        const typeTask = plumber.id;
        $(plumber).css('border', '2px solid #2668ff');
        $(gardener).css('border', 'none');
        $(housekeeper).css('border', 'none');
        $(cook).css('border', 'none');
        $(electrician).css('border', 'none');
        typeTaskTitle.innerText = `${typeTask.toUpperCase()} TASK`;
        taskTemplates.innerHTML = '';
        listPlumberTask.forEach(item => {
            let taskTemplate = document.createElement('div');
            taskTemplate.className = 'type_template_item';
            taskTemplate.innerText = item;
            taskTemplates.appendChild(taskTemplate);
        });
    }
    plumber.addEventListener('click', getPlumberTask);
    //Gardener task
    function getGardenerTask() {
        const typeTask = gardener.id;
        $(plumber).css('border', 'none');
        $(gardener).css('border', '2px solid #2668ff');
        $(housekeeper).css('border', 'none');
        $(cook).css('border', 'none');
        $(electrician).css('border', 'none');
        typeTaskTitle.innerText = `${typeTask.toUpperCase()} TASK`;
        taskTemplates.innerHTML = '';
        listGardenerTask.forEach(item => {
            let taskTemplate = document.createElement('div');
            taskTemplate.className = 'type_template_item';
            taskTemplate.innerText = item;
            taskTemplates.appendChild(taskTemplate);
        });
    }
    gardener.addEventListener('click', getGardenerTask);
//Housekeeper task
    function getHousekeeperTask() {
        const typeTask = housekeeper.id;
        $(plumber).css('border', 'none');
        $(gardener).css('border', 'none');
        $(housekeeper).css('border', '2px solid #2668ff');
        $(cook).css('border', 'none');
        $(electrician).css('border', 'none');
        typeTaskTitle.innerText = `${typeTask.toUpperCase()} TASK`;
        taskTemplates.innerHTML = '';
        listHousekeeperTask.forEach(item => {
            let taskTemplate = document.createElement('div');
            taskTemplate.className = 'type_template_item';
            taskTemplate.innerText = item;
            taskTemplates.appendChild(taskTemplate);
        });
    }
    housekeeper.addEventListener('click', getHousekeeperTask);
//Cook task
    function getCookTask() {
        const typeTask = cook.id;
        $(plumber).css('border', 'none');
        $(gardener).css('border', 'none');
        $(housekeeper).css('border', 'none');
        $(cook).css('border', '2px solid #2668ff');
        $(electrician).css('border', 'none');
        typeTaskTitle.innerText = `${typeTask.toUpperCase()} TASK`;
        taskTemplates.innerHTML = '';
        listCookTask.forEach(item => {
            let taskTemplate = document.createElement('div');
            taskTemplate.className = 'type_template_item';
            taskTemplate.innerText = item;
            taskTemplates.appendChild(taskTemplate);
        });
    }
    cook.addEventListener('click', getCookTask);
    //Insertion a type of task to task title
    function getTask(event) {
        const taskTemplates = document.querySelectorAll('.type_template_item');
        taskTemplates.forEach(item => {
            item.style = 'border: none';
        });
        if (event.target.className === 'type_template_item') {
            taskSummary.innerText = `I need a ${typeTaskTitle.innerText.slice(0, -5).toLowerCase()
            } to ${event.target.innerText.toLowerCase()}. `;
            event.target.style = 'border: 1px solid #2668ff';
            description.value = '';
        }
    }
    templateContainer.addEventListener('click', getTask);
    //Addition a description to task
    function addDescription() {
        taskSummary.innerText += ' ' + description.value;
    }
    description.addEventListener('change', addDescription);
    //Addition a location to summary
    function addLocation() {
        address.innerText = location.value;
    }
    location.addEventListener('change', addLocation);
    //Addition an expiry date to summary
    function getDataTask() {
        dataTask.innerText = expDate.value;
    }
    expDate.addEventListener('change', getDataTask);

    function cleanForm() {
        location.value = '';
        description.value = '';
        expDate.value = '';
        taskSummary.innerText = '';
        typeTaskTitle.innerText = '';
        taskTemplates.innerHTML = '';
        address.innerText = '';
        dataTask.innerText = '';
        $(plumber).css('border', 'none');
        $(gardener).css('border', 'none');
        $(housekeeper).css('border', 'none');
        $(cook).css('border', 'none');
        $(electrician).css('border', 'none');
        $(slideForm).animate({right: '-=1500px'}, 750);
    }
    closeButton.addEventListener('click', cleanForm);

    //Sending the info to DB

    async function getAllFromDB() {
        divFromDB.innerHTML = '';
        const listToDos = await fetch(requestURL);
        const todos = await listToDos.json();
        await todos.forEach(todo => {
            const containerTodo = createTodoContainer(todo.date, todo.task);
            divFromDB.appendChild(containerTodo);
            let url = `${requestURL}/${todo._id}`;
            async function deleteTodo() {
                await fetch(url, {method: 'DELETE'});
                containerTodo.remove();
            }
            buttonDelete.addEventListener('click', deleteTodo);
            function editTodo() {
                location.value = todo.location;
                description.value = todo.description;
                expDate.value = todo.date;
                taskSummary.innerText = todo.task;
                typeTaskTitle.innerText = todo.type.toUpperCase() + ' TASK';
                address.innerText = todo.location;
                dataTask.innerText = todo.date;
                todoIDStorage.innerText = todo._id;
                switch (todo.type.toLowerCase()) {
                    case 'electrician': {
                        getElectricianTasks();
                    }
                    break;
                    case 'plumber': {
                        getPlumberTask();
                    }
                    break;
                    case 'gardener': {
                        getGardenerTask();
                    }
                    break;
                    case 'housekeeper': {
                        getHousekeeperTask();
                    }
                    break;
                    case 'cook': {
                        getCookTask();
                    }
                    break;
                    default: {
                        taskTemplates.innerHTML = '';
                    }
                    break;
                }
                if ($('.slide').css('right') === '-1500px')     {
                    $(slideForm).animate({right: '+=1500px'}, 750);
                }
                // $(slideForm).css('transform: translateX(0px) ');
                buttonCreateEdit.innerText = 'EDIT TASK';
            }
            buttonEdit.addEventListener('click', editTodo);
        });
    }
    async function getTaskInfo() {
         infoObject = {
            location: location.value,
            type: typeTaskTitle.innerText.slice(0, -5).toLowerCase(),
            task: taskSummary.innerText,
            description: description.value,
            date: expDate.value
        };
         if (buttonCreateEdit.innerText === 'CREATE TASK') {
             await fetch(requestURL, {
                 method: 'POST',
                 headers: {
                     'Content-Type': 'application/json'
                 },
                 body: JSON.stringify(infoObject)
             });
         }else if (buttonCreateEdit.innerText === 'EDIT TASK') {
             let url = `${requestURL}/${todoIDStorage.innerText}`;
             await fetch(url, {
                 method: 'PUT',
                 headers: {
                     'Content-Type': 'application/json'
                 },
                 body: JSON.stringify(infoObject)
             });
         }
        cleanForm();
        await getAllFromDB();
    }
    buttonCreateEdit.addEventListener('click', getTaskInfo);
    getAllFromDB();
});

