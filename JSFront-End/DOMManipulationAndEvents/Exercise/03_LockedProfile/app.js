function lockedProfile() {
    let buttons = document.querySelectorAll(' .profile button');

    for (let button of buttons) {
        button.addEventListener('click', function() {
            let user1LockStatus = document.querySelector('input[name="user1Locked"]:checked').value;
            let user2LockStatus = document.querySelector('input[name="user2Locked"]:checked').value;
            let user3LockStatus = document.querySelector('input[name="user3Locked"]:checked').value;

            let user1Div = document.getElementById('user1HiddenFields');
            let user2Div = document.getElementById('user2HiddenFields');
            let user3Div = document.getElementById('user3HiddenFields');

            if (user1LockStatus === 'unlock') {
                if (button.textContent === 'Show more') {
                    user1Div.style.display = 'block';
                    button.textContent = 'Hide it';
                } else {
                    user1Div.style.display = 'none';
                    button.textContent = 'Show more';
                }
            } else if (user2LockStatus === 'unlock') {
                if (button.textContent === 'Show more') {
                    user2Div.style.display = 'block';
                    button.textContent = 'Hide it';
                } else {
                    user2Div.style.display = 'none';
                    button.textContent = 'Show more';
                }
            } else if (user3LockStatus === 'unlock') {
                if (button.textContent === 'Show more') {
                    user3Div.style.display = 'block';
                    button.textContent = 'Hide it';
                } else {
                    user3Div.style.display = 'none';
                    button.textContent = 'Show more';
                }
            }
        });
    }
}