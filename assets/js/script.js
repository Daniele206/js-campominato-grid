// Element
const myGrid = document.querySelector('.my-grid');
const numCell = 100;

// Element-none

// Input

// Button
const playGameBtn = document.getElementById('play-game-btn');
const resetGameBtn = document.getElementById('reset-game-btn');

// Output

// Functions
function rNone(element){
  element.classList.remove('d-none');
  element.classList.add('d-flex');
}

function addCell(num){
  const cl = document.createElement('div');
  cl.classList.add('my-cell');
  cl.addEventListener('click', function (){
    console.log(num);
    this.classList.toggle('active');
    this.innerHTML = (this.classList.contains('active')) ? this.innerHTML = num  : this.innerHTML = '';
  });

  resetGameBtn.addEventListener('click', function(){
    cl.classList.remove('active');
    cl.innerHTML = '';
  });

  return cl;
}

//------------------------------------------------------------------

playGameBtn.addEventListener('click', function(){
  rNone(myGrid);
});

for(let i=1; i <= numCell; i++){
  const cell = addCell(i);
  myGrid.append(cell);
}
