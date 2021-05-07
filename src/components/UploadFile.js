const UploadFile = ({ setWords }) => {

    const showFile = async (e) => {
        e.preventDefault()
        const reader = new FileReader()
        reader.onload = async (e) => { 
          const res = (e.target.result)
          //console.log(res)
          parseFile(res)
        };
        reader.readAsText(e.target.files[0])
    }

    const parseFile = (text) => {
        const wordMap = new Map();
        const cleanText = text.replace(/[0-9:?!><()♪―¿%$,.\\/"-]/g, ' ');
        const wordArray = cleanText.split(/[ \n\r\t]/);
        wordArray.forEach(word => {
            let count = wordMap.get(word.toLowerCase());
            if (count) {
                count++;
            } else {
                count = 1;
            }
            wordMap.set(word.toLowerCase(), count);
        })
        wordMap.delete('');
        
        setWords(wordMap);
    }

    return (
        <div>
            <input type="file" onChange={(e) => showFile(e)}/>
        </div>
    )
}

export default UploadFile
