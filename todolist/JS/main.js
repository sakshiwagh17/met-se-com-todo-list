let todobutton=document.querySelector(".todobtn");
let loginpop=document.querySelector(".login-page");
let savebutton=document.querySelector(".save");

//for remove and add pop form

todobutton.addEventListener("click",()=>{
    loginpop.classList.remove("d-none");
});
let tname=document.querySelector("#tname");
let tdescription=document.querySelector("#tdescription");
let opt=document.querySelector("#opt");

savebutton.addEventListener("click",()=>{
    //for saving data on local storage
    let newtodo={
        tname:tname.value,
        tdescription:tdescription.value,
        opt:opt.value
    }
    console.log(newtodo);
    let todolist=localStorage.getItem("user");
    todolist = todolist === null ? [] : JSON.parse(todolist);
    console.log(todolist);
    localStorage.setItem("todolist",JSON.stringify(todolist));

    console.log(todolist);
    console.log(newtodo);

    


    loginpop.classList.add("d-none");
});

