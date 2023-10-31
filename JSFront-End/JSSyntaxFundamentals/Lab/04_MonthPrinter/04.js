function printMonth(n) {
    const months = ["Error!", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    if (n < 1 || n > 12) {
        console.log(months[0]);
    } else {
        console.log(months[n]);
    }
}
printMonth(0);