let defaultNumOfmarkers = 16;
let default_color = "#000000";
let colorMode = 'default';
let defaultGridBackgroundColor = "white";
let clickedGrid = false; //clickedGrig is true when the pointer click any of the Grid

const container = document.querySelector('.gridContainer');
const randomColor = document.querySelector('.random-color');
const modernColor = document.querySelector('.modern-color');
const defaultColor = document.querySelector('.default-color');
const slider  = document.querySelector('input');
const range  = document.querySelector('.range');
const clearGrid = document.getElementById('clearGrid');

//because it wouldn't count as mouserelease if it happened outside of the grid 
container.addEventListener('mouseleave', ()  => {
    clickedGrid = false;
});
container.addEventListener('mousedown' , () => {
    clickedGrid = true;
});

container.addEventListener("mouseup" , () => {
    clickedGrid = false;
});

//changing the modes
randomColor.addEventListener('click', () => { 
    colorMode = 'random';
})
modernColor.addEventListener('click', () => { 
    colorMode = 'modern';
});
defaultColor.addEventListener('click', () => {
    colorMode = 'default';
});

//filing the grid with default options 16x16 px 
fillGrid(defaultNumOfmarkers);

//setting the clearing button
clearGrid.addEventListener('click', clearAll);

//setting the input slider
range.textContent = "16x16";
slider.addEventListener('input', () => {
    range.textContent = slider.value  +"x"+ slider.value; 
});
slider.addEventListener('change', () => {
    console.log("asfd");
    removeAll();
    fillGrid(slider.value);
});

//clearing the grid so the container would cover the  grid
const div = document.createElement("div");
div.style.clear = "all";

//function for filling the grid with default options
function fillGrid(numOfmarkers){
    let width = container.clientWidth/numOfmarkers + "px" ; //width the grid
    let height = container.clientHeight/numOfmarkers + "px"; //height of the grid
for(let i = 0; i < numOfmarkers*numOfmarkers; i++){
    const  div = document.createElement("div");

    div.style.cssText = `float: left; width: ${width}; height: ${height} `;
    div.classList.add('marker');
    container.appendChild(div);
    isDrawing(div);    
} 
}

//function for clearing the grid
function clearAll(){
    const markers =document.querySelectorAll(".marker");
    markers.forEach(marker => {
       marker.style.backgroundColor = defaultGridBackgroundColor;
    });
}

//function to remove all element from a nodeList
function removeAll(nodeList) {
    container.innerHTML = '';
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
//return random version of grey color
function getModernColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    let portion=  "" ;
    for (let i = 0; i < 2; i++) {
        portion += letters[Math.floor(Math.random() * 16)];
    }
    color = color  + portion + portion+ portion;
    return color;
}

//change color based on the current mode 
function changeColor(e){
    if(colorMode == 'default'){
        e.target.style.backgroundColor = default_color;
    }else if(colorMode == 'random'){
        e.target.style.backgroundColor = getRandomColor();
    }else if(colorMode == 'modern'){
        e.target.style.backgroundColor = getModernColor();
    }  
}

function isDrawing(div){
    //prevent grapping the divs 
    div.addEventListener('dragstart', (e) => {
        e.preventDefault();
    });

    div.addEventListener('mouseenter' , (e) => {
        if(clickedGrid){ //changing the color of the square when clicked inside the grid and hovered
            changeColor(e);      
        }
    });
    div.addEventListener('mousedown' , (e) => {
        changeColor(e);
    });
}