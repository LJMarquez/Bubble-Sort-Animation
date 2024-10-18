const barWrapper = document.getElementById("bar-wrapper");
const popAudio = document.getElementById("pop-audio");

const barAmount = 100;
const time = 50;
let orderArr = [];

for (let i = 0; i < barAmount; i++) {
  orderArr.push(i);
}

for (let i = 0; i < barAmount; i++) {
  let bar = document.createElement("div");
  let width = 95 / barAmount;
  bar.style.width = `${width}vw`;
  bar.style.backgroundColor = "white";
  bar.classList.add("bar");
  let randomIndex = Math.floor(Math.random() * orderArr.length);
  let randomOrder = orderArr[randomIndex];
  orderArr.splice(randomIndex, 1);
  bar.style.order = `${i}`;
  bar.id = `${randomOrder}`;
  bar.style.height = `${randomOrder}vh`;
  barWrapper.appendChild(bar);
}

let barsArray = Array.from(document.querySelectorAll(".bar"));
// console.log(barsArray);

function sortBars() {
  let sortedArr = [...barsArray];
  let n = sortedArr.length;

  for (let i = 0; i < n - 1; i++) {
    let isSwapped = false;
    setTimeout(() => {
      for (let j = 0; j < n - i - 1; j++) {
        setTimeout(() => {
          sortedArr.forEach((bar) => {
            if (bar.style.backgroundColor !== "lightgreen") {
              bar.style.backgroundColor = "white";
            }
          });
          if (parseInt(sortedArr[j].id) > parseInt(sortedArr[j + 1].id)) {
            // Swap the elements
            let temp = sortedArr[j];
            sortedArr[j] = sortedArr[j + 1];
            sortedArr[j + 1] = temp;
            let bigBar = document.getElementById(`${sortedArr[j].id}`);
            let smallBar = document.getElementById(`${sortedArr[j + 1].id}`);
            smallBar.style.backgroundColor = "white";
            let bigBarOrder = bigBar.style.order;
            bigBar.style.order = smallBar.style.order;
            smallBar.style.order = bigBarOrder;
            smallBar.style.backgroundColor = "red";
            let audio = document.createElement("audio");
            audio.style.display = "none";
            audio.src = "pop.mp3";
            // audio.preservesPitch = true;
            // let pitch = 1 + (j / n);
            // audio.playbackRate = pitch;
            audio.play();
            setTimeout(() => {
              audio.remove();
            }, 500)

            isSwapped = true;
          }
          if (j === n - i - 2) {
            document.getElementById(`${sortedArr[j + 1].id}`).style.backgroundColor = "lightgreen";
            console.log("reached end");
          }
        }, j * time);


        setTimeout(() => {
          if (!isSwapped) {
            return;
            // return sortedArr;
          }

        }, (n - i - 1) * time);
      }
    }, i * (n - 1) * time);
  }
}

// console.log(sortBars(barsArray));