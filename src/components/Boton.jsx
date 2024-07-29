import getRandomNumbers from "../utils/getRandomNumbers"
import quotes from '../data/phrases.json'
import photos from '../data/photos.json'

const Boton = ({ setPhraseSelected, setBgSelected }) => {
    const changePhrase = () => {
        const indexRandom = getRandomNumbers(quotes.length);
        const phraseRandom = quotes[indexRandom]
        setPhraseSelected(phraseRandom);
        setBgSelected(photos[getRandomNumbers(photos.length)])
    };
    return <button className="hover:scale-125 transition-transform cursor-pointer ml-auto block bg-indigo-800 py-2 px-4 rounded-xl" onClick={changePhrase}>Probar suerte</button>;
};

export default Boton;
