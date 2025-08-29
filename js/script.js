// =========================
// Part 1: Variables & Conditionals
// =========================
document.getElementById("checkAgeBtn").addEventListener("click", function () {
  const age = parseInt(document.getElementById("ageInput").value);
  let result = "";

  if (age >= 18) {
    result = "You are an adult.";
  } else if (age > 0) {
    result = "You are a minor.";
  } else {
    result = "Please enter a valid age.";
  }

  document.getElementById("ageResult").innerText = result;
});

// =========================
// Part 2: Functions
// =========================
function calculateSum(a, b) {
  return a + b;
}

function formatSumMessage(sum) {
  return `The sum is: ${sum}`;
}

document.getElementById("sumBtn").addEventListener("click", function () {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const sum = calculateSum(num1, num2);
  document.getElementById("sumResult").innerText = formatSumMessage(sum);
});

// =========================
// Part 3: Loops
// =========================
const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

document.getElementById("listFruitsBtn").addEventListener("click", function () {
  const fruitList = document.getElementById("fruitList");
  fruitList.innerHTML = ""; // clear previous list

  for (let i = 0; i < fruits.length; i++) {
    const li = document.createElement("li");
    li.innerText = fruits[i];
    fruitList.appendChild(li);
  }
});

// =========================
// Part 4: DOM Manipulation
// =========================

// 1. Change Text
document.getElementById("changeTextBtn").addEventListener("click", function () {
  document.getElementById("domText").innerText = "The text has been changed!";
});

// 2. Toggle Color
document
  .getElementById("toggleColorBtn")
  .addEventListener("click", function () {
    const elem = document.getElementById("colorText");
    elem.classList.toggle("red");
  });

// 3. Create Element
document
  .getElementById("createElementBtn")
  .addEventListener("click", function () {
    const newDiv = document.createElement("div");
    newDiv.innerText = `New element created at ${new Date().toLocaleTimeString()}`;
    document.getElementById("newElements").appendChild(newDiv);
  });
