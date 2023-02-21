import { useState } from "react";
import palavras from "../palavras"
import { GlobalStyled } from "../styles/GlobalStyled";
import Jogo from "./Jogo";
import Letras from "./Letras";


export default function App() {
  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  
  const [digitadas, setDigitadas] = useState(alfabeto);
  const [erros, setErros] = useState(0);
  const [palavra, setPalavra] = useState([]);
  const [faltaAcertar, setFaltaAcertar] = useState(0);
  const [status, setStatus] = useState('');

  function sortearPalavra(){
    const aleatorio = Math.floor(Math.random()*palavras.length);
    setDigitadas([]);
    setErros(0);
    setStatus('jogando');
    const arrayPalavra = palavras[aleatorio].split('');
    setPalavra(arrayPalavra);
    totalAcertos(arrayPalavra);
  }

  function totalAcertos(palavra){
    const letrasSemRepeticao = palavra.filter( (letra, i) => {
      return palavra.indexOf(letra) === i;
    });
    setFaltaAcertar( letrasSemRepeticao.length );
  }

  return (
    <>
      <GlobalStyled />
      <Jogo 
        digitadas={digitadas}
        erros={erros}
        palavra={palavra}
        sortearPalavra={sortearPalavra}
        status={status}
      />
      <Letras 
        digitadas={digitadas} 
        setDigitadas={setDigitadas}
        palavra={palavra}
        erros={erros}
        setErros={setErros}
        status={status}
        setStatus={setStatus}
        faltaAcertar={faltaAcertar}
        setFaltaAcertar={setFaltaAcertar}
      />
    </>
  )
}