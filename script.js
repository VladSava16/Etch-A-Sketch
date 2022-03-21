const gridContainer = document.querySelector('.grid');

for(let i = 1; i <= 16; i++)
    for(let j = 1; j <= 16; j++){
        let element = document.createElement('div');
        element.classList.add('grid-box');
        gridContainer.appendChild(element);
    }
