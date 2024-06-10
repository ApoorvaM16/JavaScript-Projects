
let clicks = 0;
const btn = document.querySelector("#btn");
btn.addEventListener("click",()=>{
    clicks +=1;
    updateColor();
})

function updateColor(){
    console.log(clicks);
    if(clicks % 2 === 0){
        btn.classList.remove("odd");
        btn.classList.add("even");
        console.log("in", clicks)
    } else{
        btn.classList.remove("even");
        btn.classList.add("odd");
    }
    btn.innerText = clicks;
}



