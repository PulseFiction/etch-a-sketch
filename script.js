// Globals
const container = document.querySelector(".container");
const btn = document.querySelector(".clear");


function sketch(){

    for (let i = 0 ; i < 256 ; i++){
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);

        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = '#646464'
        })
    }
    
    function reset(squares) {
        container.innerHTML = ''
        squares = prompt('Please enter how many squares you would like:')
        if (squares > 100) {
            squares = prompt('Please enter less than 100')
        } 
        

        
        
        
        
        let formula = ((squares * 20) / 16) + 'rem'
        container.style.width = formula
        container.style.height = formula
        
        for (let i = 0 ; i < squares ** 2 ; i++){
            const square = document.createElement('div');
            
            square.classList.add('square');
        //    square.style.width = (40 * squares) / 
         //   square.style.height =
            container.appendChild(square);
            
            square.addEventListener('mouseover', () => {
            square.style.backgroundColor = '#646464'
            });
        };

    }

    btn.addEventListener('click', reset)
    
}




sketch()
/* 
function etchSketch(squares) {
  for (let i = 0; i < 256; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
    
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "#fff";
    });

  };
  btn.addEventListener('click', () => {
    container.removeChild(square);
    squares = prompt('Please enter how many squares you want in the grid.')
    if (squares > 100){
        prompt('Please enter a number lower than 100')
    } 
    
    for (let i = 0; i < squares ; i++){
        const square = document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);
    }

})
  
};
etchSketch();




*/

// Set for loop to < user prompt, set user prompt as default 256?

/* Original Code
for (let i = 0 ; i < 256 ; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);




    function drawSquare() {
        square.style.backgroundColor = '#fff'
    };

    function changeSquares(){
        container.removeChild(square);
        let numSquares = prompt('Please choose how many squares you would like in the grid:')
        if (numSquares > 100) {
            numSquares = prompt('Please choose 100 or less (This is for performance issues)')
        }

    };

    btn.addEventListener('click', changeSquares);
    square.addEventListener('mouseover', drawSquare);
}
*/
