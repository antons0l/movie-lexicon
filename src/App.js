
import Dictionary from './components/Dictionary';
import UploadFile from './components/UploadFile';
import { useState } from 'react';

function App() {
  const [words, setWords] = useState(new Map());
    
  return (
  <div className='container'>
    <UploadFile setWords={setWords}/>
    <Dictionary words={words} />
  </div>
  )
}

export default App;