

let input = prompt("Enter your name");
let h;
input ? h=input : h="User";
document.getElementById("nameBox").innerHTML = `Welcome ${h}`;

const ctime = document.getElementById('timeBox');
setInterval(()=>{
    let date = new Date();
    let time = date.toLocaleTimeString();
    ctime.innerText = time;
},1000)


let togBtn = document.getElementById('btn')

togBtn.addEventListener("click", ()=>{
    let elem = document.body;
    elem.classList.toggle("dark-mode");
    togBtn.classList.toggle("btn-color");
    togBtn.value == "Dark Mode" ? togBtn.value="Light Mode" : togBtn.value="Dark Mode";
});
