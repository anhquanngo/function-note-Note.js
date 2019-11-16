//
// Goal: Create method to get incomplete lasks
//
//1. Define getTaskToDo method
//2. Use filter to to return just the imcompleted tasks (arrow function)
//3. Test your work by running the script

const tasks = {
    task:[{
        text: 'Grocery shopping',
        completed: true
    },{
        text: 'clear yard',
        completed: flase
    },{
        text: 'Film coyrse',
        completed: flase 
    }],
    getTaskToDo() {
       const tasksToDo = this.tasks.filter((task) => task.completed === false)
    }
}

console.log(task.getTaskToDo());
