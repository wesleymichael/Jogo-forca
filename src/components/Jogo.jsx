import styled from "styled-components";

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
  cursor: pointer;
`;
const Palavra = styled.div`
  height: 68px;
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
`
const Ganhou = styled.span`
  color: green;
`
const Perdeu = styled.span`
  color: red;
`


export default function Jogo({digitadas, erros, palavra, sortearPalavra, status}){

  return (
  <>
    <Image 
      src={`./assets/forca${erros}.png`}
      alt={`forca${erros}`}
    />
    <Button onClick={sortearPalavra}>Escolher palavra</Button>
    <Palavra>
      {palavra.map( (letra) => (
        <RenderizarLetra letra={letra} />
      ))}
    </Palavra>
  </>
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