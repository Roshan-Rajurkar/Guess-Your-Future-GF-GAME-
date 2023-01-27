// array store names which we are uploading
const array = [];

// taking names and placing them to the names section

let input_name = document.getElementById("name_entered");

// adding name when press add Name
let addName = document.getElementById("addName");
addName.addEventListener("click", placeName);

// place Name
const myName = document.getElementById("name");

function placeName() {
  console.log(input_name.value);
  let newP = document.createElement("p");
  newP.className = "name";
  newP.innerHTML = input_name.value;
  array.push(input_name.value);
  input_name.value = "";
  myName.appendChild(newP);
}

function randomIndex(number) {
  return Math.floor(Math.random() * number);
}

let place_result = document.getElementById("result");
let outputBtn = document.getElementById("generate_output");

outputBtn.addEventListener("click", function () {
  if (array.length == 0) place_result.innerHTML = "Enter names First";
  else place_result.innerHTML = array[randomIndex(array.length)];
});
