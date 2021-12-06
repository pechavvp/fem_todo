let textInputHigh = document.querySelector(".text-input-high");
let textInputLow = document.querySelector(".text-input-low");
let addButtonHigh = document.querySelector(".add-button-high");
let addButtonLow = document.querySelector(".add-button-low");
let blockItemsHigh = document.querySelector(".block-items-high");
let blockItemsLow = document.querySelector(".block-items-low");
let deleteButtons;
let checkboxButtons;

addButtonHigh.addEventListener("click", function() {
    if (textInputHigh.value) {
    let blockItem = document.createElement('div');
    blockItem.className = "block-item";
    blockItem.innerHTML = 
    `<button class="checkbox-button checkbox-button-off"></button>
    <p class="block-item-text">${textInputHigh.value}</p>
    <button class="delete-button"></button>`;
    blockItemsHigh.prepend(blockItem);
    textInputHigh.value = "";
    deleteButtons = document.querySelectorAll(".delete-button");
    checkboxButtons = document.querySelectorAll(".checkbox-button");
    deleteItem();
    checkboxButton();
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
    blockItemsLow.prepend(blockItem);
    textInputLow.value = "";
    deleteButtons = document.querySelectorAll(".delete-button");
    checkboxButtons = document.querySelectorAll(".checkbox-button");
    deleteItem();
    checkboxButton();
    console.log(checkboxButtons);
    } else {
        alert("Заполните поле!")
    }
});

function deleteItem() {
    deleteButtons.forEach(function(item) {
        item.addEventListener("click", function() {
            item.parentNode.remove();
        });
    });
}

function checkboxButton() {
    checkboxButtons.forEach(function(item) {
        item.addEventListener("click", function() {
            item.parentNode.classList.toggle("block-item-done");
            item.classList.toggle("checkbox-button-off");
            item.classList.toggle("checkbox-button-on");
        });
    });
}