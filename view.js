let textInputHigh = document.querySelector(".text-input-high");
let textInputLow = document.querySelector(".text-input-low");
let addButtonHigh = document.querySelector(".add-button-high");
let addButtonLow = document.querySelector(".add-button-low");
let blockItemsHigh = document.querySelector(".block-items-high");
let blockItemsLow = document.querySelector(".block-items-low");


addButtonHigh.addEventListener("click", function() {
    if (textInputHigh.value) {
    let blockItem = document.createElement('div');
    blockItem.className = "block-item";
    blockItem.innerHTML = 
    `<button class="checkbox-button checkbox-button-off"></button>
    <p class="block-item-text">${textInputHigh.value}</p>
    <button class="delete-button"></button>`;
    let deleteButton = blockItem.querySelector(".delete-button");
    let checkboxButton = blockItem.querySelector(".checkbox-button");
    deleteButton.addEventListener("click", deleteItem);
    checkboxButton.addEventListener("click", checkboxButtonChange);
    blockItemsHigh.prepend(blockItem);
    textInputHigh.value = "";
    } else {
        alert("Заполните поле!")
    }
});

addButtonLow.addEventListener("click", function() {
    if (textInputLow.value) {
    let blockItem = document.createElement('div');
    blockItem.className = "block-item";
    blockItem.innerHTML = 
    `<button class="checkbox-button checkbox-button-off"></button>
    <p class="block-item-text">${textInputLow.value}</p>
    <button class="delete-button"></button>`;
    let deleteButton = blockItem.querySelector(".delete-button");
    let checkboxButton = blockItem.querySelector(".checkbox-button");
    deleteButton.addEventListener("click", deleteItem);
    checkboxButton.addEventListener("click", checkboxButtonChange);
    blockItemsLow.prepend(blockItem);
    textInputLow.value = "";
    } else {
        alert("Заполните поле!")
    }
});

function deleteItem() {
            this.parentNode.remove();
}

function checkboxButtonChange() {
            this.parentNode.classList.toggle("block-item-done");
            this.classList.toggle("checkbox-button-off");
            this.classList.toggle("checkbox-button-on");
}