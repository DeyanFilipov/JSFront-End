function meetings(appointments) {
    var successfulMeetings = {};
    var conflictMeetings = [];

    appointments.forEach(appointment => {
        var[weekday, person] = appointment.split(' ');

        if (successfulMeetings[weekday]) {
            conflictMeetings.push({ weekday, person});
            console.log(`Conflict on ${weekday}!`);
        } else {
            successfulMeetings[weekday] = person;
            console.log(`Scheduled for ${weekday}`);
        }
    });

    for (var day in successfulMeetings) {
        console.log(`${day} -> ${successfulMeetings[day]}`);
    }
}
meetings(['Monday Peter', 'Wednesday Bill', 'Monday Tim', 'Friday Tim'])
meetings(['Friday Bob', 'Saturday Ted', 'Monday Bill', 'Monday John', 'Wednesday George'])