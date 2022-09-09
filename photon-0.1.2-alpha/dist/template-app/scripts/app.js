function onClick() {
  alert('Olaaaaaaaaaa');
}

function generate() {
  const inputTxt = document.getElementById("txt");
  if (!inputTxt.value) {
    alert('Please input something');
    return;
  }
  const base64 = btoa(inputTxt.value);
  const span = document.createElement('span');
  span.innerHTML = base64;
  const body = document.getElementById('result');
  body.appendChild(span);
}

function decode() {
  const inputTxt = document.getElementById("txt");
  if (!inputTxt.value) {
    alert('Please input something');
    return;
  }
  const base64 = atob(inputTxt.value);
  const span = document.createElement('span');
  span.innerHTML = base64;
  const body = document.getElementById('result');
  body.appendChild(span);
}