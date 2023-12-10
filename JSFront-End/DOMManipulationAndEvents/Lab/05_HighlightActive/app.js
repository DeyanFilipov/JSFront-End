function focused() {
    const fields = Array.from(document.getElementsByTagName('input'));

    for (const field of fields) {
        field.addEventListener('focus', onFocus);
        field.addEventListener('blur', onBlur);
    }

    function onFocus(event) {
        const divParentElement = event.currentTarget.parentNode;

        divParentElement.classList.add('focused');
    }

    function onBlur(event) {
        const divParentElement = event.currentTarget.parentNode;

        divParentElement.classList.remove('focused');
    }
}