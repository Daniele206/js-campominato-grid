// Element
const myGrid = document.querySelector('.my-grid');
const numCell = 100;

// Element-none

// Input

// Button
const playGameBtn = document.getElementById('paly-game-btn');

// Output

// Functions
function addCell(num){
  myGrid.innerHTML +=`
  <div class="my-cell"><p class="d-none">${num}</p></div>
  `
}

//------------------------------------------------------------------

for(let i=1; i <= numCell; i++){
  addCell(i);
}