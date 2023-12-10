function create(words) {
   for (const word of words) {
      let newDiv = document.createElement('div');

      let newP = document.createElement('p');

      newP.textContent = word;

      newP.style.display = 'none';

      newDiv.appendChild(newP);

      document.getElementById('content').appendChild(newDiv);

      newDiv.addEventListener('click', function() {
         if (newP.style.display === 'none') {
            newP.style.display = 'block';
         } else {
            newP.style.display = 'none';
         }
      });
   }
}