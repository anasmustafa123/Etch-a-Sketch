let defaultNumOfmarkers = 16;
let defaultcolor = "#000000";
let colorMode = 'default';

//filing the grid with default options 16x16 px 
fillGrid(defaultNumOfmarkers);

//fuction for filling the grid with default options
function fillGrid(numOfmarkers){
    const container = document.querySelector('.gridContainer');
    for(let i = 0; i < numOfmarkers*numOfmarkers; i++){
        const  div = document.createElement("div");
        let width = 600/numOfmarkers + "px" ; //width the grid
        let height = 500/numOfmarkers + "px"; //height of the grid
        div.style.cssText = `float: left; width: ${width}; height: ${height} `;
        div.classList.add('marker');
        div.style.color = "red";
        container.appendChild(div);
        div.addEventListener('mouseenter' , (e) => {
            if(clickedGrid){ //changing the color of the square when clicked inside the grid and hovered
                if(colorMode === 'default'){
                    e.target.style.backgroundColor = defaultColor;
                    e.target.classList.add("changeColor");
                    console.log("clicked");
                }else if(colorMode == 'random'){
                    e.target.style.backgroundColor = getRandomColor();
                }else if(colorMode == 'random'){
                    //e.target.style.backgroundColor = getRandomColor();
                }
               
            }
        });
        div.addEventListener('mousedown' , (e) => {
            e.target.classList.add("changeColor"); //changing the color of the square when clicked
            console.log("clicked");
        });
    } 
}

//setting the clearing button
const clearGrid = document.getElementById('clearGrid');
console.log(clearGrid.style);
clearGrid.addEventListener('click', clearAll);

//setting the input slider
const slider  = document.querySelector('input');
const range  = document.querySelector('.range');
range.textContent = "16x16";
slider.addEventListener('input', () => {
    console.log(slider.value);
    range.textContent = slider.value  +"x"+ slider.value; 
    removeAll(document.querySelectorAll('.marker'));
    fillGrid(slider.value);
});


//clearing the grid so the container would cover the  grid
const div = document.createElement("div");
div.style.clear = "all;"

//clickedGrig is true when the pointer click any of the Grid
let clickedGrid = false;


const container = document.querySelector('.gridContainer');
const randomColor = document.querySelector('.random-color');
const modernColor = document.querySelector('.modern-color');
const defaultColor = document.querySelector('.default-color');

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
    console.log("unclicked")
});
randomColor.addEventListener('click', () => { //change the color-mode to random
    colorMode = 'random';
})
modernColor.addEventListener('click', () => { 
    colorMode = 'modern';
});
defaultColor.addEventListener('click', () => {
    colorMode = 'default';
});
function clearAll(){
    const markers =document.querySelectorAll(".marker");
    markers.forEach(marker => {
        marker.classList.remove("changeColor"); 
    });
}


//function to remove all element from a nodeList
function removeAll(nodeList) {
    for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].remove();
    }
}

//function to return random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}