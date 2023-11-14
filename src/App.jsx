import { useState } from 'react'
import './App.css'
function double(num) {
  console.log("running double algorithm");
  // this is intentially a slower running algo.
  for (let i = 0; i <= 100000; i++) {}
  return num * 2;
}

function App() {
  const [number, setNumber] = useState(0);
  const [emojis, setEmojis] = useState({ data: [], loading: true });

  const doubledNumber = double(number);

  function handleFetchEmojis() {
    console.log("running fetch emojis");
    fetch(
      `https://emoji-api.com/categories/smileys-emotion?access_key=${import.meta.env.VITE_APP_EMOJI_API_KEY}`
    )
      .then((data) => data.json())
      .then((newData) => {
        setEmojis({ data: newData });
      });
  }
  

  return (
    <>
      <input
        type="number"
        placeholder="number"
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <div>{doubledNumber}</div>
      <div>
        {emojis.data.map((emoji) => {
          return <span key={emoji.slug}>{emoji.character}</span>;
        })}
      </div>
      <button type="button" onClick={handleFetchEmojis}>
        Get Emojis
      </button>
    </>
  );
}

export default App
