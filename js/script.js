class Todo {
  constructor() {
    this.totalTasks = document.querySelectorAll('.task').length
  }
  addTask(taskInput) {
    // template clone
    let template = document.querySelector('.task').cloneNode(true)
    // Manipulating template
    template.classList.remove('hide')
    let templateText = template.querySelector('.task-title')
    templateText.textContent = taskInput
    // adding to list
    let list = document.querySelector('#tasks-container')
    list.appendChild(template)
  }
}

let todo  = new Todo

let addTask = document.querySelector('#add')

addTask.addEventListener('click', function(e) {
  e.preventDefault()
  let taskInput = document.querySelector('#task')
  if(taskInput.value !== '') { // Input arent empty
    todo.addTask(taskInput.value)
  }
  taskInput.value = ''
})

