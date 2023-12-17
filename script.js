const resultOFCalculationsContainer = document.getElementById("scriptresult");

const calculationResult = document.createElement("a");

resultOFCalculationsContainer.appendChild(calculationResult);

let result = 0;

Array.prototype.pow = function (numberDegree) {
  this.forEach((element, index, array) => {
    array[index] = Math.pow(element, numberDegree);
  });
};

const arr = [1, 2, 3];

arr.pow(2);

console.log(arr);

result = arr.toString();

calculationResult.textContent = result;

Function.prototype.defer = function (n) {
  setTimeout(() => {
    this();
  }, n);
};

function a() {
  alert("test");
}

a.defer(1000);
