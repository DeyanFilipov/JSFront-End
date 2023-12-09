function generateReport() {
     let checkBoxes = document.querySelectorAll('thead tr th input')
     let output = document.getElementById('output');
     let checkedIndexes = [];
     for(let i = 0; i < checkBoxes.length; i++){
         if(checkBoxes[i].checked){
             checkedIndexes.push(i);
         }
     }
     let titles = document.querySelectorAll('thead tr th');
     let rowsCount = document.querySelectorAll('tbody tr').length;
     let person = {};
     let persons = [];
     for(let row = 0; row < rowsCount; row++){
         for(const index of checkedIndexes){
             let key = titles[index].textContent.trim().toLowerCase();
             let value = document.querySelectorAll('tbody tr')[row].querySelectorAll('td')[index].textContent;
             person[key] = value;
         }
         persons.push(person);
         person = {};
     }
     output.innerHTML = JSON.stringify(persons);
}