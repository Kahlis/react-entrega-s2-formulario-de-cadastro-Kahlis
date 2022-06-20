import styled from "styled-components";

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 400px;
  height: 100vh;
`;

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
  width: 400px;
  height: auto;
  background-color: #f3f3f3;
  font-family: "Inter";
  gap: 30px;
`;

export const StyledForm = styled.form`
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 350px;
  height: auto;
  justify-content: center;
  background-color: #ffffff;

  label {
    margin: 20px 0 5px 0;
    font-family: "Inter";
    text-transform: uppercase;
  }

  input {
    height: 35px;
    border: solid 1px #adadad;
    padding: 7px;
  }

  input::placeholder {
    font-family: "Inter";
  }

  input:focus {
    border-color: #00c8c8;
    box-shadow: 0 0 0 0.2rem rgba(0, 200, 170, 0.2);
    outline: none;
  }

  .error:focus {
    border-color: #c80007;
    box-shadow: 0 0 0 0.2rem rgba(200, 0, 7, 0.2);
    outline: none;
  }

  button {
    margin-top: 10px;
    height: 45px;
    background-color: red;
    outline: none;
    border: none;
    color: white;
    font-family: "Inter";
  }

  span {
    margin-top: 2px;
    color: #c80007;
    font-family: "Inter";
    font-size: 12px;
  }
`;
