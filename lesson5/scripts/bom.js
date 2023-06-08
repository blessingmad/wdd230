const input = document.getElementById("favcap");


const addButton = document.getElementById("submit");


const list = document.getElementById("list");

//add event listerner to the add chapter button
addButton.addEventListener("click", function(){
    const chapterText = input.ariaValueMax.trim();

    if (chapterText !== "") {
        const li = document.createElement("li");
    // create delete button
    const deleteButton = document.createElement("button");deleteButton.textContent = "X"
    li.textContent = chapterText;

    list.appendChild(li);

    input.value = "";

    input.focus();

    }
})