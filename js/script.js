var removeBtn = document.querySelector(".remove");
var undoBtn = document.querySelector(".undo");
var options = document.querySelectorAll(".colorSelect option");
var undoArray = [];

// Remove
removeBtn.addEventListener("click", function () {
    // Picking the selected value
    var select = document.querySelector(".colorSelect");
    var input = select.value;

    // Checking for index in options array
    for (i = 0; i < options.length; i++) {
        if (options[i].value == input) {
            undoArray.push(options[i]);
            select.removeChild(options[i]);
            console.log(undoArray);
        }
    }
});

// Undo
undoBtn.addEventListener("click", function(){
    var select = document.querySelector(".colorSelect");
    select.appendChild(undoArray[undoArray.length - 1]);
    undoArray.pop();
});