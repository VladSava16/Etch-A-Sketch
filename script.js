const gridContainer = document.querySelector('.grid');
const clearBtn = document.querySelector('#clear');

GenerateGrid(16);

let ok = 0;

clearBtn.addEventListener('click', Clear);
function Clear(){
    const boxes = document.querySelectorAll('.grid-box');
    boxes.forEach(box => {
        box.style.cssText = "background-color: white;";
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
            e.target.classList.add("clicked");
        }
    })
        box.addEventListener('mousedown', (e) => {
            colorBoxes(e);
            e.preventDefault();
            e.target.classList.add("clicked");
    })});
}

function colorBoxes(box){
    if(box.target.classList.value == "grid-box clicked"){}
    else{
        if(ok == 0){
            let randomColor = generateRandomColor();
            box.target.style["background-color"] = `#${randomColor}`;
        }
        else{
            box.target.style["background-color"] = "cyan";
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

document.getElementById('option-one').addEventListener('click', () => GenerateGrid(16));
document.getElementById('option-two').addEventListener('click', () => GenerateGrid(32));
document.getElementById('option-three').addEventListener('click', () => GenerateGrid(64));
document.getElementById('rainbow').addEventListener('click', () => {
    if(ok == 1)
        ok = 0;
    else
        ok = 1;
});



