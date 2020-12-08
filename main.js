// selecteurs
let enterButton = document.getElementById("enter");
let input = document.getElementById("userInput");
let ul = document.querySelector("ul");
let item = document.getElementsByTagName("li");

// function

// function longueur input
function inputLength(){
    return input.value.length;
}

// function creation li
function createListElement(){
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";

    // function toggle tâche terminé
    function crossOut(){
        li.classList.toggle("done");
    }
    
    // active la function crossOut quand on clique sur une li
    li.addEventListener("click", crossOut);
    
    // bouton supprimer
    let dBtn = document.createElement("button");
    dBtn.appendChild(document.createTextNode("X"));
    li.appendChild(dBtn);
    dBtn.addEventListener("click", deleteListItem);
    
    // function supprimer li
    function deleteListItem(){
        li.classList.add("delete");
    }
}

// function ajouter une li après clique
function addListAfterClick(){
    if(inputLength() > 0){
        createListElement();
    }
}

// function addAfterKeypress
function addListAfterKeypress(event){
    if(inputLength > 0 && event.which === 13){
        createListElement();
    }
}

// ecouteurs

enterButton.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);