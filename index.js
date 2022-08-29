const todoTitle = document.getElementById("title");
const todoDesc = document.getElementById("desc");
const todoSubmit = document.getElementById("submit");
const todoMain = document.getElementById("main");
const Alert = document.getElementById("alert");

Alert.style.display = 'none';


const makeNewTodo = (title,desc)=>{
    const li = document.createElement("li");
    const h3 = document.createElement("h3");
    h3.innerHTML = title;
    const p = document.createElement("p");
    p.innerHTML = desc;
    
    li.appendChild(h3);
    li.appendChild(p);
    
    const div = document.createElement("div");
    const delet = document.createElement("button");
    delet.innerHTML= "Delete";
    const edit = document.createElement("button");
    edit.innerText="Edit";
    edit.style.margin = "10px";
    const update = document.createElement("button");
    update.innerHTML="Update";
    
    div.appendChild(delet);
    div.appendChild(edit);
    div.appendChild(update);
    
    li.appendChild(div);
    
    todoMain.appendChild(li);
}



const lcSaved = localStorage.getItem("lcTodo");
const parseLcSaved = JSON.parse(lcSaved) || [];
let lcSave = [...parseLcSaved];

lcSave.forEach((todo) => {
  makeNewTodo(todo.title , todo.desc)
})


const createNewTodo = (event)=> {
    event.preventDefault();

   
    if (!todoTitle.value) return Alert.style.display = 'block' , 
    setTimeout(function (){
        Alert.style.display = 'none';
       },3000);
  

    const newTodo = {
        title: todoTitle.value,
        desc: todoDesc.value,
    };

    lcSave.push(newTodo);
    localStorage.setItem('lcTodo' , JSON.stringify(lcSave));

    makeNewTodo(newTodo.title , newTodo.desc)
};

todoSubmit.addEventListener('click' , createNewTodo)