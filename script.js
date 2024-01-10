let input1 = document.querySelector("#inputForHeight")
let input2 = document.querySelector("#inputForWeight")

let calculate = document.querySelector("#calculate")
let BMI = document.querySelector("#bmi")

let lightmode = document.querySelector("#lightmode");
let darkmode = document.querySelector("#darkmode");


lightmode.addEventListener("click", () => {
    document.querySelector('body').style.backgroundColor = "white"
    document.querySelector('body').style.color = "black"
})

darkmode.addEventListener("click", () => {
    document.querySelector('body').style.backgroundColor = "black"
    document.querySelector('body').style.color = "white"
})

calculate.addEventListener('click', () => {
    let height = input1.value / 100;
    let weight = input2.value;
    let result = ((weight / (height)**2)).toFixed(2);

    if (input1.value === "" || input2.value === "") {
        BMI.innerHTML = "Please Enter the value in correct format";
    } else {
        BMI.innerHTML = "Your BMI is: " + result;
    }
});