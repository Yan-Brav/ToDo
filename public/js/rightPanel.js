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
    const deadline = document.querySelector('#exp_data');
    //<p> for expiry date
    const dataTask = document.querySelector('#data_task');
    //Create-Edit button
    const buttonCreateEdit = document.querySelector('#submit');
    const closeButton = document.querySelector('.form_task_close');

    const postRequestURL = 'http://localhost:3333/todo';
    const getAllRequestURL = 'http://localhost:3333';
    //Div for sliding panel
    const slideForm = document.querySelector('.slide');

    async function getAllFromDB() {
        const listToDos = await fetch(getAllRequestURL);
        const data = await listToDos.join();
        console.log(data);
    }
    document.addEventListener('DOMContentLoaded', getAllFromDB);

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
        if (event.target.className === 'type_template_item') {
            taskSummary.innerText = `I need a ${typeTaskTitle.innerText.slice(0, -5).toLowerCase()
            } to ${event.target.innerText.toLowerCase()}. `;
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
        dataTask.innerText = deadline.value;
    }
    deadline.addEventListener('change', getDataTask);

    function cleanForm() {
        location.value = '';
        description.value = '';
        deadline.value = '';
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
    async function getTaskInfo() {
        const infoObject = {
            location: location.value,
            type: typeTaskTitle.innerText.slice(0, -5).toLowerCase(),
            task: taskSummary.innerText,
            description: description.value,
            date: deadline.value
        };
        await fetch(postRequestURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                    },
            body: JSON.stringify(infoObject)
        });
        cleanForm();
    }
    buttonCreateEdit.addEventListener('click', getTaskInfo);


});

