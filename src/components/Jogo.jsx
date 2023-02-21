import styled from "styled-components";

const Div = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;

  img{
    width: 400px;
    height: 467px;
    margin: 59px 0 0 38px;
    object-fit: cover;
  }

  button{
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
    cursor: pointer;
  }

  div{
    height: 68px;
    font-family: 'Noto Sans', sans-serif;
    font-size: 50px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 53px;
    top: 430px;

    span{
      padding: 3px;
    }
  }

`
const Ganhou = styled.span`
  color: green;
`
const Perdeu = styled.span`
  color: red;
`

export default function Jogo({digitadas, erros, palavra, sortearPalavra, status}){

  return (
  <Div>
    <img 
      src={`./assets/forca${erros}.png`}
      alt={`forca${erros}`}
      data-test="game-image"
    />
    <button onClick={sortearPalavra} data-test="choose-word">Escolher palavra</button>
    <div data-test="word">
      {palavra.map( (letra, i) => (
        <RenderizarLetra key={i} letra={letra} />
      ))}
    </div>
  </Div>
  )

  function RenderizarLetra({letra}){
    if(status === 'ganhou'){
      return (
        <Ganhou>{digitadas.includes(letra) || status !== 'jogando' ? letra : '_'}</Ganhou>
      )
    } else if (status === 'perdeu'){
      return (
        <Perdeu>{digitadas.includes(letra) || status !== 'jogando' ? letra : '_'}</Perdeu>
      )
    } else {
      return (
        <span>{digitadas.includes(letra) || status !== 'jogando' ? letra : '_'}</span>
      )
    }
  }
}