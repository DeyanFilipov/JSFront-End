function sumTable() {
    let table = document.querySelector('table');

    if (!table) {
        console.error('Table not found.');
        return;
    }
    let rows = table.querySelectorAll('tbody tr');

    let totalSum = 0;

    for (let i = 0; i < rows.length - 1; i++) {
        let value = parseFloat(rows[i].lastElementChild.textContent);

        if (!isNaN(value)) {
            totalSum += value;
        }
    }
    document.getElementById('sum').textContent = totalSum.toFixed(2);
}