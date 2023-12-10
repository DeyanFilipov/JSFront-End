function attachEventsListeners() {
    const daysBtn = document.getElementById('daysBtn');
    const hoursBtn = document.getElementById('hoursBtn');
    const minutesBtn = document.getElementById('minutesBtn');
    const secondsBtn = document.getElementById('secondsBtn');

    daysBtn.addEventListener('click', convertDays);
    hoursBtn.addEventListener('click', convertHours);
    minutesBtn.addEventListener('click', convertMinutes);
    secondsBtn.addEventListener('click', convertSeconds);

    function convertDays() {
        let daysValue = parseFloat(document.getElementById('days').value, 10);

        let hours = document.getElementById('hours');
        let hoursValue = daysValue * 24;
        hours.value = hoursValue;
        
        let minutes = document.getElementById('minutes');
        let minutesValue = hoursValue * 60;
        minutes.value = minutesValue;
        
        let seconds = document.getElementById('seconds');
        let secondsValue = minutesValue * 60;
        seconds.value = secondsValue;
    }

    function convertHours() {
        let hoursValue = parseFloat(document.getElementById('hours').value, 10);

        days = document.getElementById('days');
        let daysValue = hoursValue / 24;
        days.value = daysValue;
        
        let minutes = document.getElementById('minutes');
        let minutesValue = hoursValue * 60;
        minutes.value = minutesValue;
        
        let seconds = document.getElementById('seconds');
        let secondsValue = minutesValue * 60;
        seconds.value = secondsValue;
    }

    function convertMinutes() {
        let minutesValue = parseFloat(document.getElementById('minutes').value, 10);

        hours = document.getElementById('hours');
        let hoursValue = minutesValue / 60;
        hours.value = hoursValue;
        
        days = document.getElementById('days');
        let daysValue = hoursValue / 24;
        days.value = daysValue;
        
        let seconds = document.getElementById('seconds');
        let secondsValue = minutesValue * 60;
        seconds.value = secondsValue;
    }

    function convertSeconds() {
        let secondsValue = parseFloat(document.getElementById('seconds').value, 10);

        minutes = document.getElementById('minutes');
        let minutesValue = secondsValue / 60;
        minutes.value = minutesValue;

        hours = document.getElementById('hours');
        let hoursValue = minutesValue / 60;
        hours.value = hoursValue;
        
        days = document.getElementById('days');
        let daysValue = hoursValue / 24;
        days.value = daysValue;
    }
}