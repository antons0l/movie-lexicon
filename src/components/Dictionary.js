import React from 'react';
import Word from './Word';

const Dictionary = ({ words }) => {
    return (
        <>
        <div>Dictionary size is {words.size} words.</div>
        {            
            //Array.from(words.keys()).sort().map((key) => <Word key={key} word={key} count={words.get(key)} />) 
            //Array.from(words.keys()).map((key) => <Word key={key} word={key} count={words.get(key)} />) 
            Array.from(new Map([...words].sort((a, b) => { if (a[1] > b[1]) { return -1; } else { return 1; }})).keys()).map((key) => <Word key={key} word={key} count={words.get(key)} />) 
        } </>
    )
}

export default Dictionary