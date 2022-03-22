const gridContainer = document.querySelector('.grid');
const clearBtn = document.querySelector('#clear');

function Clear(){
    const filled = document.querySelectorAll('.clicked');
    filled.forEach(btn => {
        btn.classList.remove('clicked');
    })
}

clearBtn.addEventListener('click', Clear);

for(let i = 1; i <= 16; i++){
    let row = document.createElement('div');
    row.classList.add('grid-row');
    gridContainer.appendChild(row);
    for(let j = 1; j <= 16; j++){
        let element = document.createElement('div');
        element.classList.add('grid-box');
        row.appendChild(element);
    }
}

const gridBoxes = document.querySelectorAll('.grid-box');

gridBoxes.forEach((box) =>{
    box.addEventListener('mouseover', (e) => {
    if(e.buttons == 1)
        e.target.classList.add('clicked');
})
    box.addEventListener('mousedown', (e) => {
        e.target.classList.add('clicked');
})});
