import { useForm } from "react-hook-form";
import {
  Background,
  FlexContainer,
  StyledContainer,
  StyledForm,
  StyledLabel,
} from "./style";
import React from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";

function SignUp({ setName }) {
  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Campo obrigatório")
      .min(3, "Insira ao menos 3 characteres"),
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
        "A senha deve conter ao menos uma letra minúscula, maiúscula, um número e ao mínimo 8 characteres"
      ),
    confirmPassword: yup
      .string()
      .required("Campo obrigatório")
      .oneOf([yup.ref("password")], "As senhas devem ser iguais"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory();

  const signUp = (data) => {
    setName(data["name"]);
    history.push("/welcome");
  };

  return (
    <FlexContainer>
      <Background>
        <h1>Cadastro</h1>
        <StyledForm onSubmit={handleSubmit(signUp)}>
          <label>Nome</label>
          <input
            className={errors?.name?.message.trim() !== "" ? "error" : ""}
            type="text"
            placeholder="Insira seu nome completo"
            {...register("name")}
          ></input>
          <span>{errors?.name?.message}</span>
          <label>Email</label>
          <input
            className={errors?.email?.message.trim() !== "" ? "error" : ""}
            type="text"
            placeholder="Insira seu email"
            {...register("email")}
          ></input>
          <span>{errors?.email?.message}</span>
          <label>Senha</label>
          <input
            className={errors?.password?.message !== "" ? "error" : ""}
            type="password"
            placeholder="Insira a senha"
            {...register("password")}
          ></input>
          <span>{errors?.password?.message}</span>
          <label>Confirmar senha</label>
          <input
            className={errors?.confirmPassword?.message !== "" ? "error" : ""}
            type="password"
            placeholder="Digite novamente"
            {...register("confirmPassword")}
          ></input>
          <span>{errors?.confirmPassword?.message}</span>
          <button>Cadastrar</button>
        </StyledForm>
      </Background>
    </FlexContainer>
  );
}

export default SignUp;
