const barWrapper = document.getElementById("bar-wrapper");

const barAmount = 100;
let orderArr = [];

for (let i = 0; i < barAmount; i++) {
  orderArr.push(i);
}

for (let i = 0; i < barAmount; i++) {
  let bar = document.createElement("div");
  let width = 95 / barAmount;
  bar.style.width = `${width}vw`;
  bar.style.height = `${i}vh`;
  bar.style.backgroundColor = "red";
  bar.classList.add("bar");
  let randomIndex = Math.floor(Math.random() * orderArr.length);
  let randomOrder = orderArr[randomIndex];
  orderArr.splice(randomIndex, 1);
  bar.style.order = `${randomOrder}`;
  bar.id = `${randomOrder}`;
  barWrapper.appendChild(bar);
}

let barsArray = Array.from(document.querySelectorAll(".bar"));

function sortBars() {
  let sortedArr = [...barsArray];
  let n = sortedArr.length;

  for (let i = 0; i < n - 1; i++) {
    let isSwapped = false;

    (function swapBars(i) {
      let j = 0;

      function innerSwap() {
        if (j < n - i - 1) {
          let currentBar = sortedArr[j];
          let nextBar = sortedArr[j + 1];

          // Set the color of the moving bar to blue
          currentBar.style.backgroundColor = "blue";

          if (parseInt(currentBar.id) > parseInt(nextBar.id)) {
            // Swap the elements
            let temp = sortedArr[j];
            sortedArr[j] = sortedArr[j + 1];
            sortedArr[j + 1] = temp;

            // Update their order
            let bigBar = document.getElementById(`${sortedArr[j].id}`);
            let bigBarOrder = bigBar.style.order;
            bigBarOrder++;
            bigBar.style.order = `${bigBarOrder}`;
            let smallBar = document.getElementById(`${sortedArr[j + 1].id}`);
            let smallBarOrder = smallBar.style.order;
            smallBarOrder--;
            smallBar.style.order = `${smallBarOrder}`;

            isSwapped = true;
          }

          // Move to the next pair
          j++;
          setTimeout(innerSwap, 200);
        } else {
          // Reset the color of the bars and check if any swaps occurred
          for (let k = 0; k < sortedArr.length; k++) {
            sortedArr[k].style.backgroundColor = "red"; // Reset color
          }

          // If no swapping occurred, the array is sorted
          if (!isSwapped) {
            console.log("Array is sorted, exiting early.");
            return;
          }

          // Call the next iteration for the next i
          swapBars(i + 1);
        }
      }

      // Start the first inner swap
      innerSwap();
    })(i);
  }

  // Final color change for the last bar
  setTimeout(() => {
    let biggestBar = sortedArr[n - 1];
    biggestBar.style.backgroundColor = "green";
  }, (n - 1) * 200);
}

// Call the sorting function
// sortBars();
