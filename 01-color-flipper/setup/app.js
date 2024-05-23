const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const button = document.querySelector("#btn");
const body = document.querySelector("body");
const color = document.querySelector(".color");

button.addEventListener("click", (e) => {
  console.log("click");
  const getRandomNo = Math.floor(Math.random() * colors.length);
  console.log(getRandomNo);
  document.body.style.backgroundColor = colors[getRandomNo];
  color.textContent = colors[getRandomNo];
});
