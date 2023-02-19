import { useState } from "react";
import palavras from "../palavras"
import Jogo from "./Jogo";
import Letras from "./Letras";

export default function App() {
  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  
  const [digitadas, setDigitadas] = useState(alfabeto);
  const [erros, setErros] = useState(0);
  const [palavra, setPalavra] = useState([]);

  function sortearPalavra(){
    const aleatorio = Math.floor(Math.random()*palavras.length);
    setDigitadas([]);
    setErros(0);
    setPalavra( palavras[aleatorio].split('') );
  }

  return (
    <>
      <Jogo 
        digitadas={digitadas}
        erros={erros}
        palavra={palavra}
        sortearPalavra={sortearPalavra}
      />

      <Letras digitadas={digitadas} />
    </>
  )
}