const barWrapper = document.getElementById("bar-wrapper");

const barAmount = 100;
let orderArr = [];

for (let i = 0; i < barAmount; i++) {
    orderArr.push(i);
}
console.log(orderArr);

for (let i = 0; i < barAmount; i++) {
    let bar = document.createElement("div");
    let width = 95 / barAmount;
    bar.style.width = `${width}vw`;
    bar.style.height = `${i}vh`;
    bar.style.backgroundColor = "red";
    bar.style.outline = "1px solid black";
    bar.style.display = "inline-block";
    barWrapper.appendChild(bar);
}
