function encodeAndDecodeMessages() {
    const encodeText = document.getElementsByTagName('textarea')[0];
    const encodeBtn = document.getElementsByTagName('button')[0];

    const decodeText = document.getElementsByTagName('textarea')[1];
    const decodeBtn = document.getElementsByTagName('button')[1];

    encodeBtn.addEventListener('click', encode);
    decodeBtn.addEventListener('click', decode);
    
    function encode() {
        let text = encodeText.value;
        let newMessage = '';

        for (let index = 0; index < text.length; index++) {
            let charCode = text.charCodeAt(index);
            
            let newChar = String.fromCharCode(charCode + 1);

            newMessage += newChar;
        }

        decodeText.value = newMessage;

        encodeText.value = '';

        document.getElementsByTagName('button')[1].disabled = false;
    }

    function decode() {
        let text = decodeText.value;
        let newMessage = '';

        for (let index = 0; index < text.length; index++) {
            let charCode = text.charCodeAt(index);

            let newChar = String.fromCharCode(charCode - 1);

            newMessage += newChar;
        }

        decodeText.value = newMessage;

        document.getElementsByTagName('button')[1].disabled = true;
    }
}