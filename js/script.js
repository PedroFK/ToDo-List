class Todo {
  constructor() {
    this.totalTasks = document.querySelectorAll('.task').length
  }
  addTask() {
    console.log('ta func')
  }
}

let todo  = new Todo

let addTask = document.querySelector('#add')

addTask.addEventListener('click', function(e) {
  e.preventDefault()
  let taskInput = document.querySelector('#task')
  todo.addTask(taskInput.value)
  taskInput.value = ''
})

