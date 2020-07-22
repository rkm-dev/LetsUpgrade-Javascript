
// Q1

var colors = ['green', 'orange', 'blue', 'red', 'violet', 'cyan', 'bluegreen', 'greenyellow']; 
var active = 0;
let interval = ()=>{
  setInterval(()=>{
    document.querySelector('body').style.background = colors[active];
    active++;
    if (active == colors.length) 
        active = 0;
  }, 5000);
}
interval();

//-----------------------------------------------------------------------------------------------

// Q2

input = document.getElementById('ghost-input');

input.addEventListener("change", numChange);

function numChange(){
  let n=1;
  n = input.value;

  let table_panel = document.getElementById('table-panel');
  table_panel.innerHTML = '';
  table_panel.classList.remove('hidden');
  for(let i=1;i<=10;i++) {
    table_panel.innerHTML += `${n} x ${i} = ${n*i} <br><br>`  
  }
}

//------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------