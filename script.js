const list = {
    "create a task": "In Progress",
    "make a bed": "Done",
    "write a post": "To Do",
}

function changeStatus(task, status) {
    list[task] = status;
}

function addTask(task) {
    list[task] = "To Do";
}

function deleteTask(task) {
    delete list[task];
}

function showList() {
    console.log("ToDo:");

    let toDoContain;

    for (let key in list) {
        if (list[key] === "To Do") {
            toDoContain = key;
            console.log(key);
        }
    }

    if (!toDoContain) {
        console.log("---");
    }

    console.log("In Progress:");

    let inProgressContain;

    for (let key in list) {
        if (list[key] === "In Progress") {
            inProgressContain = key;
            console.log(key);
        }
    }

    if (!inProgressContain) {
        console.log("---");
    }

    console.log("Done:");

    let doneContain;

    for (let key in list) {
        if (list[key] === "Done") {
            doneContain = key;
            console.log(key);
        }
    }

    if (!doneContain) {
        console.log("---");
    }
}