function editElement(element, match, replacer) {
    let currentText = element.textContent;
    let newText = currentText.replace(new RegExp(match, 'g'), replacer);

    element.textContent = newText;
}