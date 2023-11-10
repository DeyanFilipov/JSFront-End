function reveal(string, template) {
    const words = string.split(', ');
    const text = template.split(' ');

    for (let i = 0; i < text.length; i++) {
        if (text[i][0] === '*') {
            const lenOfEl = text[i].length;

            for (let j = 0; j < words.length; j++) {
                if (words[j].length === lenOfEl) {
                    text[i] = words[j];
                    break;
                }
            }  
        }
    }
    console.log(text.join(' '));
}
reveal('great', 'softuni is ***** place for learning new programming languages');
reveal('great, learning', 'softuni is ***** place for ******** new programming languages');