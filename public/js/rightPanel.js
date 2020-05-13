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

    const templateTitle = document.querySelector('#task_type_template p');
    const templateContainer = document.querySelector('#task_type_template');
    const taskTemplates = document.querySelector('#type_template');
    const typeTaskTitle = document.querySelector('#task_type_template p');
    const taskSummary = document.querySelector('#task_summary');
    const description = document.querySelector('#description');
    const location = document.querySelector('#location');
    const address = document.querySelector('#address');
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

    function getTask(event) {
        if (event.target.className === 'type_template_item') {
            taskSummary.innerText = `I need a ${templateTitle.innerText.slice(0, -5).toLowerCase()
            } to ${event.target.innerText.toLowerCase()}. `;
            description.value = '';
        }
    }
    templateContainer.addEventListener('click', getTask);

    function addDescription() {
        taskSummary.innerText += ' ' + description.value;
    }
    description.addEventListener('change', addDescription);

    function addLocation() {
        address.innerText = location.value;
    }
    location.addEventListener('change', addLocation);
});

