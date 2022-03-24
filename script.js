const gridContainer = document.querySelector('.grid');
const clearBtn = document.querySelector('#clear');
const colorPicker = document.getElementById('fillColor');

GenerateGrid(16);

let ok = 1;
let erase = 0;

let fillColor = "#FF0000";
colorPicker.addEventListener('change', (e) => fillColor = e.target.value);

clearBtn.addEventListener('click', Clear);
function Clear(){
    const boxes = document.querySelectorAll('.grid-box');
    boxes.forEach(box => {
        box.style.cssText = "background-color: #FFFFFB;";
        box.classList.remove("clicked");
    })
}

function GenerateGrid(x){
    gridContainer.innerHTML = '';
    for(let i = 1; i <= x; i++){
        let row = document.createElement('div');
        row.classList.add('grid-row');
        gridContainer.appendChild(row);
        for(let j = 1; j <= x; j++){
            let element = document.createElement('div');
            element.classList.add('grid-box');
            row.appendChild(element);
        }
    }
    let gridBoxes = document.querySelectorAll('.grid-box');
    gridBoxes.forEach((box) =>{
        box.addEventListener('mouseover', (e) => {
        if(e.buttons == 1){
            colorBoxes(e);
            if(erase == 0)
                e.target.classList.add("clicked");
        }
    })
        box.addEventListener('mousedown', (e) => {
            colorBoxes(e);
            e.preventDefault();
            if(erase == 0)
                e.target.classList.add("clicked");
    })});
}

function colorBoxes(box){
    if(erase == 1){
        box.target.style["background-color"] = "#FFFFFB";
        box.target.classList.remove('clicked');
    }
    else{
    if(box.target.classList.value == "grid-box clicked"){}
        else{
            if(ok == 0){
                let randomColor = generateRandomColor();
                box.target.style["background-color"] = `#${randomColor}`;
            }
            else{
                box.target.style["background-color"] = fillColor;
            }
        }
}
}

function generateRandomColor(){
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);   
    return randColor.toUpperCase();
}

document.getElementById('option-one').addEventListener('click', (e) => {GenerateGrid(16);});
document.getElementById('option-two').addEventListener('click', (e) => {GenerateGrid(32);});
document.getElementById('option-three').addEventListener('click', (e) => {GenerateGrid(64);});
document.getElementById('rainbow').addEventListener('click', (e) => {
    ok = 0;
    erase = 0;
});
document.getElementById('erase').addEventListener('click', (e) => {erase = 1;});
colorPicker.addEventListener('click', (e) => {ok = 1; erase = 0;});



