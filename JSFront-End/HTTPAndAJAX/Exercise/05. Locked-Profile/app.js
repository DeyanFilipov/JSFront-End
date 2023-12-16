function lockedProfile() {
    const baseUrl = 'http://localhost:3030/jsonstore/advanced/profiles';
    const main = document.getElementById('main');
 
    main.innerHTML = '';
 
    fetch(baseUrl)
        .then(res => res.json())
        .then(data => {
            Object.values(data).forEach((profile, i) => {
                const div = document.createElement('div');
                div.classList.add('profile');
                console.log(profile);
                debugger;
 
                div.innerHTML = `
                    <img src="./iconProfile2.png" class="userIcon" />
                    <label>Lock</label>
                    <input type="radio" name="user${i + 1}Locked" value="lock" checked>
                    <label>Unlock</label>
                    <input type="radio" name="user${i + 1}Locked" value="unlock"><br>
                    <hr>
                    <label>Username</label>
                    <input type="text" name="user${i + 1}Username" value="${profile.username}" disabled readonly />
                    <div class="user${i + 1}Username" style="display: none;">
                        <hr>
                        <label>Email:</label>
                        <input type="email" name="user${i + 1}Email" value="${profile.email}" disabled readonly />
                        <label>Age:</label>
                    <input type="email" name="user${i + 1}Age" value="${profile.age}" disabled readonly />
                    </div>
                    <button>Show more</button>
                `;
 
                main.appendChild(div);
 
                const button = div.querySelector('button');
                button.addEventListener('click', onToggle);
 
            });
        });
 
    function onToggle(ev) {
        const profile = ev.target.parentElement;
        const isActive = profile.querySelector('input[type="radio"][value="unlock"]').checked;
 
        if (isActive) {
            const info = profile.querySelector('div');
            const isVisible = info.style.display == 'block';
 
            info.style.display = isVisible ? 'none' : 'block';
            ev.target.textContent = isVisible ? 'Show more' : 'Hide it';
        }
    }
}
 
window.onload = lockedProfile;