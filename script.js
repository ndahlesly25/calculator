const display = document.getElementById("display");

function appendValue(value) {
  if (value === '^') {
    display.value += '**'; // JS power operator
  } else {
    display.value += value;
  }
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    let result = display.value
      .replace(/√/g, 'Math.sqrt')
      .replace(/sin/g, 'Math.sin')
      .replace(/cos/g, 'Math.cos')
      .replace(/tan/g, 'Math.tan')
      .replace(/log/g, 'Math.log10')
      .replace(/ln/g, 'Math.log');

    if (result.includes('!')) {
      result = handleFactorial(result);
    }

    display.value = eval(result);
  } catch (e) {
    display.value = "Error";
  }
}

function handleFactorial(exp) {
  return exp.replace(/(\d+)!/g, (match, n) => {
    return factorial(parseInt(n));
  });
}

function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}
