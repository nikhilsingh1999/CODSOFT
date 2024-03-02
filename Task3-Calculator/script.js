let result = document.getElementById('result');

result.value='0';


function appendToResult(value) {
  result.value += value;
}

function clearResult() {
  result.value = '0';
}

function calculate() {
  try {
    result.value = eval(result.value);
  } catch (error) {
    result.value = 'Error';
  }
}
