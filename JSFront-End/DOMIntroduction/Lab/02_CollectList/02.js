function extractText() {
    let itemList = document.getElementById('items');
    let resultTextArea = document.getElementById('result');

    for (let i = 0; i < itemList.children.length; i++) {
        let listItem = itemList.children[i];

        resultTextArea.value += listItem.textContent.trim() + '\n';
    }
}