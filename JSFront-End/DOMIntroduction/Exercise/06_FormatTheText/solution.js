function solve() {
  let inputArr = document.getElementById('input').value.split('.');

  let formatedInput = inputArr.filter(w => w.trim()).map(w => w + '.');

  let output = document.getElementById('output');

  output.textContent = '';

  while (formatedInput.length > 0) {
    let text = formatedInput.splice(0, 3);
    let p = document.createElement('p');

    p.textContent = text.join('');

    output.appendChild(p);
  }
}