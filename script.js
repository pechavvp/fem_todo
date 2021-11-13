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

function changeStatus(taskName, status) {
    let task = list.find(item => item.name === taskName);
    task.status = status;
}

function addTask(newTaskName, priority) {
    const newTask = {
        id: list.length + 1,
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

function showList() {
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