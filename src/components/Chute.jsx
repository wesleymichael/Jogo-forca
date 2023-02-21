import styled from "styled-components";

const Div = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  max-width: 700px;
  font-size: 20px;

  input{
    width: 55%;
    border: 1px solid #CCCCCC;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
    border-radius: 3px;
    height: 40px;
    font-size: 18px;
    padding-left: 10px;
  }

  button{
    width: 100px;
    height: 40px;
    background: #E1ECF4;
    border: 1px solid #7AA7C7;
    border-radius: 5px;
    padding-left: 5px;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #3C76A1;
    cursor: pointer;

    :disabled{
      cursor: auto;
      background: #9FAAB5;
      color: #798A9F;
    }
  }

`


export default function Chute({chute, setChute, palavra, status, setStatus, setErros}){
  
  function chutar(){
    if(chute.toLowerCase() === palavra.join("")){
      setStatus('ganhou');
    } else {
      setStatus('perdeu');
      setErros(6);
    }
    setChute('');
  }

  return(
    <Div>
      <span>Ja sei a palavra!</span>
      <input value={chute} onChange={e => setChute(e.target.value)} data-test="guess-input" />
      <button onClick={chutar} disabled={status !=='jogando'} data-test="guess-button" >Chutar</button>
    </Div>
  )
}