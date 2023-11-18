function login(input) {
    const username = input[0];
    const correctPassword = username.split('').reverse().join('');
    let failedAttempts = 0;

    for (let i = 1; i < input.length; i++) {
        const password = input[i];
        if (password === correctPassword) {
            console.log(`User ${username} logged in.`);
            return;
        } else {
            failedAttempts++;
            if (failedAttempts === 4) {
                console.log(`User ${username} blocked!`);
                return;
            } else {
                console.log("Incorrect password. Try again.")
            }
        }
    }
}
const input = ['Acer','login','go','let me in','recA'];
const input = ['momo','omom'];
const input = ['sunny','rainy','cloudy','sunny','not sunny'];
login(input);