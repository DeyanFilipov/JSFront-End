function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let rows = Array.from(document.querySelectorAll('tbody tr'));
      let input = document.getElementById('searchField');

      let cols = [];
      for (const el of rows) {
         el.classList.remove('select');
         if (input.value !== '' && el.innerHTML.includes(input.value)) {
            el.className = 'select'
         }
      }
   }
}