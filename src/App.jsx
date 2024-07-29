import { useState } from 'react';
import './App.css'
import quotes from './data/phrases.json';
import getRandomNumbers from './utils/getRandomNumbers';
import Phrase from './components/Phrase';
import Boton from './components/Boton';
import photos from './data/photos.json';

function App() {
  const indexRandom = getRandomNumbers(quotes.length);
  const [phraseSelected, setPhraseSelected] = useState(quotes[indexRandom]);
  const [bgSelected, setBgSelected] = useState(photos[getRandomNumbers(photos.length)]);

  const objStyles = {
    backgroundImage: `url(/images/fondo${bgSelected}.png)`,
  };

  return (
    <div style={objStyles} className='min-h-screen bg-cover bg-center flex justify-center items-center px-4'>
      <h1 className='absolute top-20 text-3xl uppercase font-black text-center drop-shadow-lg stroke text-white'>Galleta De La Fortuna</h1>
      <article className='max-w-[400px] bg-white p-6 rounded-xl shadow-2xl'>
        <Phrase phraseSelected={phraseSelected} />
        <Boton setPhraseSelected={setPhraseSelected} setBgSelected={setBgSelected} />
      </article>
      <footer className='absolute bottom-20 bg-indigo-950/75 p-5 rounded-lg text-white'>
        <p>{phraseSelected.author}</p>
      </footer>
    </div>
  );
}

export default App;

