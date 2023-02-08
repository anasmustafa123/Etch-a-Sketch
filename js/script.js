
//creating the grid with default options 960px width and 960px height
createGrid("960px","960px")
//filing the grid with default options 16x16 px 
fillGrid(16);





function createGrid(width, height){
    const container = document.createElement('div');
    const body = document.querySelector('body');
    container.classList.add("container");
    container.style.cssText = `background:  #F8F8FF; border: 1px solid; width: ${width}; height: ${height}; margin: auto;`;
    body.appendChild(container);
}

function fillGrid(numOfmakers){
    const container = document.querySelector('.container');
    for(let i = 0; i < numOfmakers*numOfmakers; i++){
        const  div = document.createElement("div");
        let length = 960/numOfmakers + "px" ; //width and heigth of the grid
        div.style.cssText = `float: left; width: ${length}; height: ${length} `;
        div.classList.add('marker');
        div.style.color = "red";
        container.appendChild(div);
        div.addEventListener('mouseenter' , (e) => {
            if(clickedGrid){ //changing the color of the square when clicked inside the grid and hovered
                e.target.classList.add("changeColor");
                console.log("clicked");
            }
        });
        div.addEventListener('mousedown' , (e) => {
            e.target.classList.add("changeColor"); //changing the color of the square when clicked
            console.log("clicked");
        });
    } 
}

//clearing the grid so the container would cover the  grid
const div = document.createElement("div");
div.style.clear = "all;"

//clickedGrig is true when the pointer click any of the Grid
let clickedGrid = false;


const container = document.querySelector('.container');

container.addEventListener('mouseleave', ()  => {
    //enteredGrid = false;
    clickedGrid = false;
    console.log("leaved the grid");
});
container.addEventListener('mousedown' , () => {
    clickedGrid = true;
    console.log("clicked");
});

container.addEventListener("mouseup" , () => {
    clickedGrid = false;
    console.log("unclick")
});

function clearGrid(){
    const markers =querySelectorAll(".marker");
    markers.forEach(marker => {
        marker.classList.remove("changeColor"); 
    });
}