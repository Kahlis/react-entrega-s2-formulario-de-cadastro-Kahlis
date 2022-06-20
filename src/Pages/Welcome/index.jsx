import React from "react";
import { useHistory } from "react-router-dom";
import { WelcomeDiv } from "./style";

function Welcome({ name }) {
  const history = useHistory();
  const backToHome = () => {
    history.push("/");
  };
  return (
    <WelcomeDiv>
      <h1>Bem vindo, {name}</h1>
      <button onClick={backToHome}>Voltar ao cadastro</button>
    </WelcomeDiv>
  );
}

export default Welcome;
