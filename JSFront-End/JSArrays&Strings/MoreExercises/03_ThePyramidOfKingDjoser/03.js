function pyramid(base, increment) {
    let stoneRequired = 0;
    let marbelRequired = 0;
    let lapisLazuliRequired = 0;
    let goldRequired = 0;
    let level = 0;

    while (true) {
        if (base - 2 <= 0) {
            break;
        }
        level++;
        let stoneCount = ((base - 2) * (base - 2)) * increment;
        let lapisLazuli = 0;
        let marbelCount = 0;
        if (level % 5 === 0) {
            lapisLazuli = ((base * 4) - 4) * increment;
        }
        else {
            marbelCount = ((base * 4) - 4) * increment;
        }

        stoneRequired += stoneCount;
        marbelRequired += marbelCount;
        lapisLazuliRequired += lapisLazuli;
        base -= 2;
    }

    goldRequired += base * base * increment;
    level++;

    console.log(`Stone required: ${Math.ceil(stoneRequired)}`);
    console.log(`Marble required: ${Math.ceil(marbelRequired)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuliRequired)}`);
    console.log(`Gold required: ${Math.ceil(goldRequired)}`);
    console.log(`Final pyramid height: ${Math.floor(level * increment)}`);
}

pyramid(11, 1);
pyramid(11, 0.75);
pyramid(12, 1);
pyramid(23, 0.5);