import { useState } from "react";

type Props = {
  quotes: string[];
  showToast: () => void;
};

const Quotes = ({ quotes, showToast }: Props) => {
  const [randomIndex, setRandomIndex] = useState<number | null>(null);
  const [adviceNumber, setAdviceNumber] = useState(1);

  const getRandomQuote = () => {
    const randomQuote = Math.floor(Math.random() * quotes.length);
    setRandomIndex(randomQuote);

    // adviesnummer oplopend:
    if (randomIndex !== null) {
      setAdviceNumber((before) => before + 1);
    }
  };

  const writeTextInClipboard = () => {
    if (randomIndex !== null) {
      const quoteText = quotes[randomIndex];
      navigator.clipboard
        .writeText(quoteText)
        .then(() => {
          console.log("Text copied to clipboard");
          showToast();
        })
        .catch((err) => {
          console.error("Failed to copy text: ", err);
        });
    }
  };

  return (
    <div className="quotes-container">
      {randomIndex !== null ? (
        <>
          <p className="advice-number">Advice #{adviceNumber}</p>
          <h1 className="quote">{quotes[randomIndex]}</h1>
        </>
      ) : (
        <p className="advice-number"></p>
      )}
      <hr />
      <div className="button-container">
        <button className="button" onClick={getRandomQuote}>
          <i className="icon-dice"></i>
        </button>
        <button className="button" onClick={writeTextInClipboard}>
          <i className="icon-file_copy"></i>
        </button>
      </div>
    </div>
  );
};

export default Quotes;

//   quotes: string[];
// };
// const Quotes = ({ quotes }: Props) => {
//   const [randomIndex, setRandomIndex] = useState<number | null>(null); //(null) waard evan useState begint met een null(leeg). dus de huidige(of oude) waarde = randomIndex is van type null| OF number. daarna wordt er met setRandomIndex de number geHERrenderd.
//   //bij het klikken op de button, gaat getRandomQuote een index kiezen uit de quoteList[] (die als Props werd meegegevn van de parent App.tsx), en setRnadomIndex slaagt de nieuwe index op in de STATE.
//   const getRandomQuote = () => {
//     const randomQuote = Math.floor(Math.random() * quotes.length);
//     setRandomIndex(randomQuote);
//   };

//   return (
//     <div>
//       <button onClick={getRandomQuote}>
//         <i className="icon-dice"></i>
//       </button>
//       {randomIndex !== null && ( // Als randomIndex niet null is, toon de quote.
//         <div>
//           <p>Advice #{randomIndex + 1}</p>
//           <h1>{quotes[randomIndex]}</h1>{" "}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Quotes;

//   ander vb: useState("") de huidige waarde(begin met lege string)

//met props, zonder random quotes en zonder state(zonder geheugen):

// // 1. specifieer altijd eerst welk type data(Types) dat wordt verwacht!(= PROPS meegegeven van parent:App naar quotes(of eender welker) component)
// type Props = {
//   quotes: string[];
// };

// // 2. Maak de fucntie, de component 'quotes' die je hierboven hebt gemaakt, wordt nu gedefineeerd als Props(:Props)=>
// const Quotes = ({ quotes }: Props) => {

//   {
//     /* 3. key gebruiken, wat is er verandert?(react principle, niet alles renderen maar enkel wat er juist is verandert)*/
//   }
//   return (
//     <div>
//       {/* gebruik {} voor het uitvoeren v. JS, anders wordt het aanzien als een gewone html  */}
//       {quotes.map((quote, index) => (
//         <div key={index}>
//           <p>Advice #{index + 1}</p>
//           <h1>{quote}</h1>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Quotes;

// function quotes() {
//     return (........);} instead=>

// const Quotes = () => {
//   const getRandomQuote = () => [
//     "The only way to do great work is to love what you do.",
//     "Success is not the key to happiness. Happiness is the key to success.",
//     "Believe you can and you're halfway there.",
//     "Life is what happens when you're busy making other plans.",
//     "It always seems impossible until it's done.",
//   ];

//   const randomIndex = Math.floor(Math.random() * getRandomQuote().length);
//   const randomQuote = getRandomQuote()[randomIndex];

//   return (
//     <div>
//       <p>Advice #{randomIndex + 1}</p>
//       <h1>{randomQuote}</h1>
//     </div>
//   );
// };

// export default Quotes;
