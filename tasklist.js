var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');



var tasks = JSON.parse(localStorage.getItem('list_tasks')) || [];


function renderTasks() {
    listElement.innerHTML = ''; //apaga tudo que estiver na list element
    for(task of tasks){
        var taskElement = document.createElement('li');
        var taskText = document.createTextNode(task);
        
        var linkElement = document.createElement('a');
        linkElement.setAttribute('href','#');
        var pos = tasks.indexOf(task); //retorna o indice do elemento que tem o mesmo parametro passado
        linkElement.setAttribute('onclick', 'deleteTask(' + pos + ')');//seta a chamada de função com o index de cada elemento
        var linkText = document.createTextNode('Excluir');
        linkElement.appendChild(linkText);
        
        taskElement.appendChild(taskText);
        taskElement.appendChild(linkElement);
        
        listElement.appendChild(taskElement);
    }    
}

renderTasks();

function addTask() {
    var taskText = inputElement.value;

    tasks.push(taskText);
    inputElement.value = ''; //reset o valor do input
    renderTasks();
    saveToStorage();
}

buttonElement.onclick = addTask;

function deleteTask(pos) {
    tasks.splice(pos, 1); //remove uma quantidade de items do array baseado na posicao passada
    renderTasks();
    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem('list_tasks', JSON.stringify(tasks));

}
