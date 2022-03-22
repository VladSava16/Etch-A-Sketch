const gridContainer = document.querySelector('.grid');
const clearBtn = document.querySelector('#clear');

GenerateGrid(16);


clearBtn.addEventListener('click', Clear);
function Clear(){
    const filled = document.querySelectorAll('.clicked');
    filled.forEach(btn => {
        btn.classList.remove('clicked');
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
}

document.getElementById('option-one').addEventListener('click', () => GenerateGrid(16));
document.getElementById('option-two').addEventListener('click', () => GenerateGrid(32));
document.getElementById('option-three').addEventListener('click', () => GenerateGrid(64));

const gridBoxes = document.querySelectorAll('.grid-box');

gridBoxes.forEach((box) =>{
    box.addEventListener('mouseover', (e) => {
    if(e.buttons == 1)
        e.target.classList.add('clicked');
})
    box.addEventListener('mousedown', (e) => {
        e.target.classList.add('clicked');
})});
