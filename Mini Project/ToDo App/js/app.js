var colors = ['#FFFAFA', '#F0FFF0', '#F5F5F5', '#DCDCDC', '#D3D3D3', '#C0C0C0', '#A9A9A9', '#808080', '#778899', '#708090']; 
var active = 0;
let interval = ()=> {
  setInterval(()=> {
    document.querySelector('body').style.background = colors[active];
    active++;
    if (active == colors.length) 
        active = 0;
  }, 900);
}
interval();


// Show todays date
const dateElement = document.getElementById("date");
const options = {weekday : "long", month:"short", day:"numeric"};
const today = new Date();
dateElement.innerHTML = today.toLocaleDateString("en-US", options);


// addToDO
const addInput = document.getElementById("addToDO");
const toDoList = document.getElementById("toDoList");

let list, id;

const strike = "strike"

// get list from localstorage
let data = localStorage.getItem("ToDoList");

let addToDo = (toDo, id, done=false, trash=false) => {
    if(trash) { 
        return; 
    }
    const DONE = done ? "checked" : " ";
    const strike = done ? "strike" : " ";
    
    const item = `<li class="item">
                    <input type="checkbox" name="done" value="" ${DONE}>
                    <label for="${id}" name="done">
                        <p class="text ${strike}" name="done" >${toDo}</p>
                    </label>
                    <i class="fa fa-calendar-minus-o del" name="delete" id="${id}"></i>  
                  </li>
                `; 
    toDoList.insertAdjacentHTML("beforeend", item);
}


// pass the elements to the user's interface
let loadList = (arr) => {
    arr.forEach((elem) => {
        addToDo(elem.name, elem.id, elem.done, elem.trash);
        console.log(`${addToDo}    
        `);
    });
}

// check for the list
if(data) {
    list = JSON.parse(data);
    id = list.length; 
    loadList(list); 
}else {
    list = [];
    id = 0;
}


// add an item to the list
document.addEventListener("keyup",function(even) { 
    if(event.keyCode == 13) {
        const toDo = addInput.value;
        console.log(toDo);
        
        if(toDo) {
            addToDo(toDo, id, false, false);
            list.push({
                name : toDo,
                id : id,
                done : false,
                trash : false
            });

            localStorage.setItem("ToDoList", JSON.stringify(list));
            id++;
        }
        addInput.value = "";
    }
});


function doneToDo(elem,id) {
    elem.querySelector('input').toggleAttribute('checked');

    if(elem.querySelectorAll('input[type="checkbox"]:checked').length==1) {
        elem.querySelector(".text").classList.toggle(strike);
    }else{
        elem.querySelector(".text").classList.toggle(strike);
    }
    
    list[id].done = list[id].done ? false : true;
    console.log(list);
}

function deleteToDo(elem,id) {
    elem.parentNode.removeChild(elem);
    console.log(id)
    
    list[id].trash = true;
}


toDoList.addEventListener("click", (e) => {
    const elem = e.target; // return the clicked element inside list
    const elemVal = elem.attributes.name.value; // done or delete
    let elemParent = elem.parentNode;
    let id = elem.parentNode.childNodes[5].id;

    if(elemVal == "done"){
        doneToDo(elemParent,id);
    }else if(elemVal == "delete"){
        deleteToDo(elemParent,id);
    }
    
    // add item to localstorage
    localStorage.setItem("ToDoList", JSON.stringify(list));
});