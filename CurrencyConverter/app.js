const BASE_URL =
"https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("#btn");
const fromCurr = document.querySelector("#from select");
const toCurr = document.querySelector("#to select");

for (let select of dropdowns){
    for(code in countryList){
    let newOption = document.createElement("option");
    newOption.innerText = code;
    newOption.value = code;
    if(select.name ==="from" && code === "USD"){
        newOption.selected = "selected";
    }else if(code === "INR" && select.name ==="to"){
        newOption.selected = "selected";
    }
    select.append(newOption);
}
    select.addEventListener("change",(evt)=>{
    updateFlag(evt.target);
})
}

const updateFlag =(element)=>{
    let currency = element.value;
    let countryCode = countryList[currency];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
}

btn.addEventListener("click", async (evt)=>{
    evt.preventDefault();
    let amount = document.querySelector("#amount");
    if(amount.value < 1 || amount.value === ""){
        amount.value = 1
    }
    
    let URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
    let response = await fetch(URL);
    // let data = await response.json();
    // let rate = data[toCurr.value.toLowerCase()];
    // console.log(rate)
})
