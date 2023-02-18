import styled from "styled-components";
import forca from "../imagensForca";


const Image = styled.img`
  width: 400px;
  height: 467px;
  margin: 59px 0 0 38px;
  object-fit: cover;
`;
const Button = styled.button`
  width: 200px;
  height: 60px;
  background: #27AE60;
  border-radius: 8px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 20px;
  color: #FFFFFF;
  position: absolute;
  top: 90px;
  right: 60px;
`;
const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 50px auto;
  max-width: 700px;

  button{
    width: 40px;
    height: 40px;
    background: #E1ECF4;
    border: 1px solid #7AA7C7;
    border-radius: 3px;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 6px;
    color: #39739D;
    text-transform: uppercase;
    cursor: pointer;

    :disabled{
      background: #9FAAB5;
      color: #798A9F;
      cursor: auto;
    }
  }
` ;
const Letra = styled.button`
  width: 40px;
  height: 40px;
  background: #9FAAB5;
  border: 1px solid #7AA7C7;
  border-radius: 3px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #798A9F;
  text-transform: uppercase;
`;

const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


export default function Jogo(props){
  const erro = 0;
  const digitadas = ['a', 'm', 'e', 'n', 'h'];

  return (
  <>
    <Image 
      src={`./assets/forca${erro}.png`}
      alt={`forca${erro}`}
    />
    <Button>Escolher palavra</Button>
    <Div>
      {alfabeto.map( letra => (
        <button disabled={digitadas.includes(letra)}>{letra}</button>
      ))}
    </Div>
  </>
  )
}