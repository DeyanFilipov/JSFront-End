const loadButton = document.getElementById('load-vacations');

const baseUrl = 'http://localhost:3030/jsonstore/tasks'

const divList = document.getElementById('list');

addVacationButton = document.getElementById('add-vacation');
editVacationButton = document.getElementById('edit-vacation');
let currentVacationId = null;
doneVacationButton = document.getElementsByClassName('done-btn');
loadButton.addEventListener('click', renderVacations)


async function renderVacations() {
    divList.innerHTML = '';
    data = await fetch(baseUrl);
    response = await data.json();

    results = Object.values(response);

    results.forEach(element => {
        name = element.name;
        date = element.date;
        day = element.days;

        const divContainer = document.createElement('div');
        divContainer.className = 'container';

        const h2 = document.createElement('h2');
        h2.textContent = name;

        const h3Date = document.createElement('h3');
        h3Date.textContent = date;

        const h3Days = document.createElement('h3');
        h3Days.textContent = day;

        const buttonChange = document.createElement('button');
        buttonChange.textContent = 'Change';
        buttonChange.className = 'change-btn';

        buttonChange.addEventListener('click', async () => {
            document.getElementById('name').value = element.name;
            document.getElementById('num-days').value = element.days;
            document.getElementById('from-date').value = element.date;

            divContainer.remove();
            addVacationButton.disabled = true;
            editVacationButton.disabled = false;

            currentVacationId = element._id;  
        })


        const buttonDone = document.createElement('button');
        buttonDone.className = 'done-btn';
        buttonDone.textContent = 'Done';

        buttonDone.addEventListener('click', () => {
            fetch(`${baseUrl}/${element._id}`, {
                method: 'DELETE'
            });
            renderVacations();
        })


        divContainer.appendChild(h2);
        divContainer.appendChild(h3Date);
        divContainer.appendChild(h3Days);
        divContainer.appendChild(buttonChange);
        divContainer.appendChild(buttonDone);

        divList.appendChild(divContainer);



    });


}

addVacationButton.addEventListener('click', async (e) => {
    e.preventDefault();
    let name = document.getElementById('name').value;
    let days = document.getElementById('num-days').value;
    let date = document.getElementById('from-date').value;

    let obj = { name, days, date };

    await fetch(baseUrl, {
        method: 'POST',
        body: JSON.stringify(obj)
    });

    document.getElementById('name').value = '';
    document.getElementById('num-days').value = '';
    document.getElementById('from-date').value = '';

    renderVacations();

})

editVacationButton.addEventListener('click', async (e) => {
    e.preventDefault();
    let name = document.getElementById('name').value;
    let days = document.getElementById('num-days').value;
    let date = document.getElementById('from-date').value;
    let _id = currentVacationId;
    let obj = { name, days, date, _id };


    if (currentVacationId) {
        await fetch(`${baseUrl}/${currentVacationId}`, {
            method: 'PUT',
            body: JSON.stringify(obj)
        });

        document.getElementById('name').value = '';
        document.getElementById('num-days').value = '';
        document.getElementById('from-date').value = '';

        renderVacations();

        addVacationButton.disabled = false;
        editVacationButton.disabled = true;

        currentVacationId = null;
    }
})