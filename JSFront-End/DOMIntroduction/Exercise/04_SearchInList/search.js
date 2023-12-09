function search() {
   let towns = document.getElementById('towns');
   let inputText = document.getElementById('searchText').value.toLowerCase();
   let occurrences = 0;

   for (let i = 0; i < towns.children.length; i++) {
      let listItem = towns.children[i];
      let listItemText = listItem.textContent.toLowerCase();
      let match = listItemText.includes(inputText);

      listItem.style.fontWeight = match ? 'bold' : 'normal';
      listItem.style.textDecoration = match ? 'underline' : 'none';

      occurrences += match ? 1 : 0;
   }
   let resultDiv = document.getElementById('result');
   resultDiv.textContent = occurrences > 0 ? `${occurrences} match${occurrences > 1 ? 'es' : ''} found` : '';
}
