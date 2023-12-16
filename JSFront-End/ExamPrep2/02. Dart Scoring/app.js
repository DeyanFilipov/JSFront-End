window.addEventListener("load", solve);

function solve() {
  let name = document.getElementById('player');
  let score = document.getElementById('score');
  let round = document.getElementById('round');
  let addButton = document.getElementById('add-btn');
  let sureList = document.getElementById('sure-list');
  let scoreboardList = document.getElementById('scoreboard-list');
  let clearButton = document.getElementById('.clear');

  addButton.addEventListener('click', addPlayer);

  function addPlayer(e) {
    if (name.value === '' || score.value === '' || round.value === '') {
      return;
    }
    let li = document.createElement('li');
    li.className = 'dart-item';

    let article = document.createElement('article');

    let pName = document.createElement('p');
    let pScore = document.createElement('p');
    let pRound = document.createElement('p');

    let editButton = document.createElement('button');
    editButton.className = 'btn edit';
    editButton.textContent = 'edit';

    let okButton = document.createElement('button');
    okButton.className = 'btn ok';
    okButton.textContent = 'ok';

    pName.textContent = name.value;
    pScore.textContent = `Score: ${score.value}`;
    pRound.textContent = `Round: ${round.value}`;

    article.appendChild(pName);
    article.appendChild(pScore);
    article.appendChild(pRound);
    li.appendChild(article);
    li.appendChild(editButton);
    li.appendChild(okButton);

    sureList.appendChild(li);

    name.value = '';
    score.value = '';
    round.value = '';

    addButton.disabled = true;

    editButton.addEventListener('click', editPlayer);
    okButton.addEventListener('click', okPlayer);

    function editPlayer(e) {
      addButton.disabled = false;
      name.value = pName.textContent;
      score.value = pScore.textContent.split(' ')[1];
      round.value = pRound.textContent.split(' ')[1];

      sureList.removeChild(li);
    }
    function okPlayer(e) {
      scoreboardList.appendChild(li);

      li.removeChild(editButton);
      li.removeChild(okButton);

      addButton.disabled = false;
    }
    clearButton.addEventListener('click', clearScoreboard);

    function clearScoreboard(e) {
      scoreboardList.innerHTML = '';
    }
  }
}
