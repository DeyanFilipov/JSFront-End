function solve() {
  let text = document.getElementById('text').value;
  text = text.split(' ');
  let currentCase = document.getElementById('naming-convention').value;
  let result = '';
  let isValid = true;
  for (el of text) {
    if (currentCase === 'Camel Case') {
      let index = text.indexOf(el);
      let add = '';
      if (index === 0) {
        el = el.toLowerCase();
        add = el;
        result += el; 
      } else {
        el = el.toLowerCase();
        add = el.charAt(0).toUpperCase() + el.slice(1);
        result += add;
      }
    } else if (currentCase === 'Pascal Case') {
      let add = '';
      el = el.toLowerCase();
      add = el.charAt(0).toUpperCase() + el.slice(1);
      result += add;
    } else {
      isValid = false;
    }
  }
  if (isValid) {
    document.getElementById('result').textContent = result;
  } else {
    document.getElementById('result').textContent = 'Error!';
  }
}