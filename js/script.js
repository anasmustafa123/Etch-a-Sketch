const container = document.createElement('div');
const body = document.querySelector('body');
container.classList.add("container");
container.style.cssText = "background:  #F8F8FF; border: 1px solid; width: 400px; height: 400px; margin: auto;";
body.appendChild(container);


//creating the 16*16 grid using div
for(let i = 0; i < 16*16; i++){
    const  div = document.createElement("div");
    div.style.cssText =" float: left; width: 25px; height: 25px;";
    div.classList.add('marker');
    container.appendChild(div);
}

//clearing the grid so the container would cover the 16*16 grid
const div = document.createElement("div");
div.style.clear = "all;"



let enteredGrid = false;


container.addEventListener('mouseenter', ()  => {
    enteredGrid = true;
    console.log("entered grid");
});

container.addEventListener('mouseleave', ()  => {
    enteredGrid = false;
    console.log("leaved the grid");
});

