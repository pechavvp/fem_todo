const list = [
    {
        id: 1,
        name: "create a post",
        status: "TODO",
        priority: "low",
    },
    {
        id: 2,
        name: "test",
        status: "Done",
        priority: "high",
    }
]

let idCounter = 2;

function changeStatus(taskName, status) {
    let task = list.find(item => item.name === taskName);
    task.status = status;
}

function addTask(newTaskName, priority) {
    idCounter += 1;
    
    const newTask = {
        id: idCounter,
        name: newTaskName,
        status: "TODO",
        priority: priority,
    }
    list.push(newTask);
}

function deleteTask(deleteTaskName) {
    let indexToDelete = list.findIndex(item => item.name === deleteTaskName);
    list.splice(indexToDelete, 1);
}

function showBy(key) {
    if (key === "status") {

    let toDoItems = list.filter(item => item.status === "TODO");
    let showToDo = "To Do:\n";
    if (toDoItems.length === 0) {
        console.log(showToDo + "-");
    } else {
        toDoItems.forEach(function(item) {
            showToDo += item.name + "\n";
        });
        console.log(showToDo);
    }

    let inProgressItems = list.filter(item => item.status === "In progress");
    let showInProgress = "In progress:\n";
    if (inProgressItems.length === 0) {
        console.log(showInProgress + "-");
    } else {
        inProgressItems.forEach(function(item) {
            showInProgress += item.name + "\n";
        });
        console.log(showInProgress);
    }

    let doneItems = list.filter(item => item.status === "Done");
    let showDone = "Done:\n";
    if (doneItems.length === 0) {
        console.log(showDone + "-");
    } else {
        doneItems.forEach(function(item) {
            showDone += item.name + "\n";
        });
        console.log(showDone);
    }
    }

    if (key === "priority") {
        
    let highPriorityItems = list.filter(item => item.priority === "high");
    let showHighPriority = "High:\n";
    if (highPriorityItems.length === 0) {
        console.log(showHighPriority + "-");
    } else {
        highPriorityItems.forEach(function(item) {
            showHighPriority += item.name + "\n";
        });
        console.log(showHighPriority);
    }

    let lowPriorityItems = list.filter(item => item.priority === "low");
    let showLowPriority = "Low:\n";
    if (lowPriorityItems.length === 0) {
        console.log(showLowPriority + "-");
    } else {
        lowPriorityItems.forEach(function(item) {
            showLowPriority += item.name + "\n";
        });
        console.log(showLowPriority);
    }
    }
}