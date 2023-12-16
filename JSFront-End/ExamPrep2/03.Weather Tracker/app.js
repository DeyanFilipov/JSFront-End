let baseUrl = 'http://localhost:3030/jsonstore/tasks'

// extracting the elements
let loadButton = document.getElementById('load-history')
let locationElement = document.getElementById('location')
let temperature = document.getElementById('temperature')
let date = document.getElementById('date')
let addWeatherButton = document.getElementById('add-weather')
let editWeatherButton = document.getElementById('edit-weather')
let divList = document.getElementById('list')
let currentWeatherId = null // will be for Edit Vacation header to store the id of the current weather for the PUT request
loadButton.addEventListener('click', loadWeather)

// function for loading the weather
async function loadWeather() {
    // clearing the list item so the elements don't duplicate when the button is clicked
    divList.innerHTML = '';

    // fetchiung the data    
    let response = await fetch(baseUrl);
    let data = await response.json();
    let dataValues = Object.values(data);

    // looping through the fetched data
    for (const element of dataValues) {

        // extracting the current element
        let currentLocation = element.location;
        let currentTemperature = element.temperature;
        let currentDate = element.date;
        let currentId = element._id;

        // creating the elements to be filled with the fetched data after that

        let divContainer = document.createElement('div');
        divContainer.className = 'container';

        let h2Location = document.createElement('h2');
        let h3Date = document.createElement('h3');
        let h3Temperature = document.createElement('h3');
        h3Temperature.id = 'celsius';

        let divButtonsContainer = document.createElement('div');
        divButtonsContainer.id = 'buttons-container';

        let changeButton = document.createElement('button');
        changeButton.textContent = 'Change';
        changeButton.className = 'change-btn';

        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-btn';

        // appending the elements to its consequent parents
        divList.appendChild(divContainer);
        divContainer.appendChild(h2Location);
        divContainer.appendChild(h3Date);
        divContainer.appendChild(h3Temperature);
        divContainer.appendChild(divButtonsContainer);
        divButtonsContainer.appendChild(changeButton);
        divButtonsContainer.appendChild(deleteButton);

        // adding the feteched data to the created elements
        h2Location.textContent = currentLocation;
        h3Date.textContent = currentDate;
        h3Temperature.textContent = currentTemperature;

        // adding the event listener the change button
        changeButton.addEventListener('click', async () => {
            // filling the input fields with the current values
            document.getElementById('location').value = currentLocation;
            document.getElementById('temperature').value = currentTemperature;
            document.getElementById('date').value = currentDate;
            // removing the current element
            divContainer.remove();
            // disabling the add button
            addWeatherButton.disabled = true;
            // enabling the edit button
            editWeatherButton.disabled = false;
            // storing the current id
            currentWeatherId = currentId;
        })

        // adding the event listener to the delete button
        deleteButton.addEventListener('click', () => {
            // deletinng the current element
            divContainer.remove();
            // deleting the current element from the database
            fetch(`${baseUrl}/${currentId}`, {
                method: 'DELETE'
            });
            // reloading the weather
            loadWeather();
        })

    }
}


// function for adding the weather
addWeatherButton.addEventListener('click', addWeather)
function addWeather() {
    let currentLocation = locationElement.value;
    let currentTemperature = temperature.value;
    let currentDate = date.value;

    // checking if the input fields are empty
    if (currentLocation == '' || currentTemperature == '' || currentDate == '') {
        return;
    }

    // creating the object with the values from the inpurt fields
    let obj = {
        location: currentLocation,
        temperature: currentTemperature,
        date: currentDate
    }

    // POST request 
    fetch(baseUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
    })

    // clearing the input fields
    locationElement.value = '';
    temperature.value = '';
    date.value = '';

    // reloading the weather list
    loadWeather();

}


// function for editing the weather
editWeatherButton.addEventListener('click', async (e) => {
    e.preventDefault();
    // extracting the updated values from the input fields
    let currentlocation = document.getElementById('location').value;
    let currentTemperature = document.getElementById('temperature').value;
    let currentDate = document.getElementById('date').value;
    let currentId = currentWeatherId;

    // creating the object with the updated values
    let obj = {
        location: currentlocation,
        temperature: currentTemperature,
        date: currentDate,
        _id: currentId,
    }
    // PUT request for the updated values
    await fetch(`${baseUrl}/${currentId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
    })
    // clearing the input fields
    document.getElementById('location').value = '';
    document.getElementById('temperature').value = '';
    document.getElementById('date').value = '';

    // reloading the weather
    loadWeather();

    // enabling the add button
    addWeatherButton.disabled = false;

    // disabling the edit button
    editWeatherButton.disabled = true;
})