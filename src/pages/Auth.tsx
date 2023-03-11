import {useState} from 'react'
import styled from 'styled-components'
import {Form, Field} from 'react-final-form'
import Styles from "../style/StyleAuth";
import { USER, PASSWORD, setDefaultPassword, setDefaultUser} from '../localStorage';
import Main from './Main';
import logo from '../assets/logo-auth.svg'

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
const onSubmit = async () => {
  await sleep(1);
};

const FormWrapper = styled.div`
display: flex;
justify-content: center;
padding: 5%

`

function Auth() {
    const [login, setLogin] = useState<string | null>('')
    const [password, setPassword] = useState<string | number>('')
    const [isAuth, setIsAuth] = useState<boolean>(false)
    const login1: string = login as string
    const password1: string = password as string
    
    const comparedValue = () => {
        if((USER === login) && (PASSWORD === password)){
            return setIsAuth(true)    
        }
        else {
          setIsAuth(false)
          alert('Неверно введены данные')
          setDefaultUser()
          setDefaultPassword()
        }   
    } 
  return (
    <FormWrapper>
      {isAuth !== true ? <Styles>
       <div> <img style={{marginLeft: '30%'}} src={logo} alt="logo" /></div>
    <Form
      onSubmit={onSubmit}
      initialValues={{ stooge: 'larry', employed: false }}
      render={({ handleSubmit}) => (
        <form onSubmit={handleSubmit}>
             <label>Имя пользователя или e-mail</label>
             <Field<string> name="login">
            {({ input }) => (
              <div>
                <input {...input} type="text" value={login1} onChange={event => setLogin(event.target.value)} />
              </div>
            )}
          </Field>
          <label>Пароль</label>
          <Field<string> name="password">
            {({ input }) => (
              <div>
                <input {...input} type="text" value={password1} onChange={event => setPassword(event.target.value)}/>
              </div>
            )}
          </Field>
          <div className="buttons">
          <Field<boolean> name="employed" component="input" type="checkbox" />
            <label>Запомнить меня</label>
             <button type="submit" onClick={() => comparedValue()}>
              Войти 
            </button>
          </div>
        </form>
      )}  
    /><button type='submit'>Забыли пароль?</button>
  </Styles> : <Main/>}
  </FormWrapper>
  )
}
export default Auth





