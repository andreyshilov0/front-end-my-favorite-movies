import styled, { css } from "styled-components";



const btn = (light: string, dark: string) => css`
  white-space: nowrap;
  display: inline-block;
  border-radius: 5px;
  padding: 5px 15px;
  margin-left: 25px;
  font-size: 20px;
  color: white;
  &:visited {
    color: white;
  }
  background-image: linear-gradient(${light}, ${dark});
  border: 1px solid ${dark};
`;

const btnSec = (light: string, dark: string) => css`
  white-space: nowrap;
  display: inline-block;
  border-radius: 12px;
  padding: 5px 10px;
  margin-left: 10px;
  font-size: 15px;
  color: white;
  &:visited {
    color: white;
  }
  background-image: linear-gradient(${light}, ${dark});
  border: 1px solid ${dark};
`;

const btnPrimary = btn("#4f93ce", "#285f8f");
const btnSecondary = btnSec("#4f93ce", "#285f8f")

export default styled.div`
  font-family: sans-serif;

  form {
    max-width: 500px;
    margin: 10px auto;
    border: 1px solid #ccc;
    padding: 30px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    
    & > div {
      display: flex;
      flex-flow: row nowrap;
      line-height: 2em;
      margin-bot: 10px
      
      & > label {
        color: #333;
        width: 10px;
        font-size: 1em;
        line-height: 32px;
      }
      & > input,
      & > select,
      & > textarea {
        flex: 1;
        font-size: 1em;
        width: 75px;
        border: 1px solid #ccc;
        border-radius: 3px;
        height: 37px;
        margin-bottom: 15px
      }
      & > input[type="checkbox"] {   
        margin-top: 7px;  
        height: 18px;
        
      }
      & > div {
        margin-left: 16px;
        & > label {
          display: block;
          & > input {
            margin-right: 3px;
            
          }
        }
      }
    }
    & > .buttons {
      display: flex;
      flex-flow: row nowrap;
      justify-content: right;
      margin-top: 20px;
      
    }
    button {
      
      &[type="submit"] {
        ${btnPrimary};
      }
      
    }
    
  }
  button {
      
    &[type="submit"] {
      ${btnSecondary};
    }
`;


