var newTask = document.querySelector('.newTask');
var taskBtn = document.querySelector('.task-btn');

var cancelBtn = document.querySelector('.b1');

newTask.addEventListener('click',function(){
    taskBtn.classList.add('btn-active');
});


cancelBtn.addEventListener('click',function(){
    taskBtn.classList.remove('btn-active');
})

var addTask = document.getElementById("+task");
addTask.addEventListener('click',function(){
    taskBtn.classList.add('btn-active');
})
var w=document.getElementById('label-input').value;
var x = document.getElementById("date").required;
var y = document.getElementById("mycheck").required;
var z = newTask = document.querySelector('.newTask');
var taskBtn = document.querySelector('.task-btn');

var cancelBtn = document.querySelector('.b1');
var addBtn = document.querySelector('.b2');

newTask.addEventListener('click',function(){
    taskBtn.classList.add('btn-active');
});

cancelBtn.addEventListener('click',function(){
    taskBtn.classList.remove('btn-active');
})
addBtn.addEventListener('click',function(){
    taskBtn.classList.remove('btn-active');
})
