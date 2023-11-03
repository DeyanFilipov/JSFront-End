function solve(char1, char2, char3) {
    let chars = [char1, char2, char3];
    let reversed = chars.reverse().join(' ');
    console.log(reversed);
}
solve('%','2','o')