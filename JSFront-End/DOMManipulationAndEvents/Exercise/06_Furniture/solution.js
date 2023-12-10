function solve() {
  const furnitureList = document.getElementsByTagName('textarea')[0];
  const generateBtn = document.getElementsByTagName('button')[0];

  const resultTextBox = document.getElementsByTagName('textarea')[1];
  const buyBtn = document.getElementsByTagName('button')[1];

  let table = document.querySelector('tbody');

  generateBtn.addEventListener('click', generate);
  buyBtn.addEventListener('click', buy);

  function generate() {
    let input = JSON.parse(furnitureList.value);

    function img(data) {
      let newRow = document.createElement('td');
      const image = document.createElement('img');

      image.src = data;
      newRow.appendChild(image);

      return newRow;
    }

    function paragraph(data) {
      let newRow = document.createElement('td');
      const p = document.createElement('p');

      p.textContent = data;
      newRow.appendChild(p);

      return newRow;
    }

    for (let i = 0; i < input.length; i++) {
      let newRow = document.createElement('tr');
      newRow.appendChild(img(input[i]['img']));
      newRow.appendChild(paragraph(input[i]['name']));
      newRow.appendChild(paragraph(input[i]['price']));
      newRow.appendChild(paragraph(input[i]['decFactor']));

      let td = document.createElement('td');
      let checkbox = document.createElement('input');
      checkbox.setAttribute("type", "checkbox");
      td.appendChild(checkbox);
      newRow.appendChild(td);

      table.appendChild(newRow);
    }
  }

  function buy() {
    let rows = table.querySelectorAll('tr');

    let avrDeco = 0;
    let totalSum = 0;
    let names = [];

    for (i = 0; i < rows.length; i++) {
      item = rows[i];

      if (item.children[4].children[0].checked) {
        names.push(item.children[1].textContent.trim());
        totalSum += parseFloat(item.children[2].textContent);
        avrDeco += parseFloat(item.children[3].textContent);
      }
    }

    if (names.length > 0) {
      document.querySelectorAll('textarea')[1].value = `Bought furniture: ${names.join(', ')}\nTotal price: ${totalSum.toFixed(2)}\nAverage decoration factor: ${avrDeco / names.length}`;
    }
  }
}