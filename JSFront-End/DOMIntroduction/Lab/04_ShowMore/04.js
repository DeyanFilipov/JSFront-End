function showText() {
    let textElement = document.getElementById('text');

    var moreLink = document.getElementById('more');

    if (textElement.style.display === 'none' || textElement.style.display === '') {
        textElement.style.display = 'inline';
        moreLink.style.display = 'none';
    } else {
        textElement.style.display = 'none';
        moreLink.style.display = 'inline';
    }
}