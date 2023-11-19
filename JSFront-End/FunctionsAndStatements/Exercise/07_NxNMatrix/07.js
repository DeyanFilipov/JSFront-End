function nxnMatrix(num) {
    let row = [];
    for (let i = 0; i < num; i++) {
        row.push(num);
    }

    for (let i = 0; i < num; i++) {
        console.log(row.join(' '));
    }
}
nxnMatrix(3)
nxnMatrix(7)
nxnMatrix(2)