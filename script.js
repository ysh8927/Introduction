const resultField = document.getElementById('result');

function add(val) {
  resultField.value += val;
}

function clearRes() {
  resultField.value = "";
}

function solve() {
  try {
    resultField.value = eval(resultField.value);
  } catch {
    resultField.value = "Error";
  }
}