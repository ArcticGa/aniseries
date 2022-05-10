import React, { useState } from "react";
import AuthButton from "../atoms/Landing/AuthButton/AuthButton"
import InputForm from "../atoms/Landing/InputForm/InputForm";
import BottomCircle from "../molecules/Landing/BottomCircle";
import { GetArrowIcon, GetGoogleIcon, GetVkIcon } from '../../icons/GetIconSvg';
import useInput from "../hooks/useInput";


const Form = () => {
   const [isAuth, setIsAuth] = useState(true)

   const login = useInput('', { isEmpty: true, minLength: 5, maxLength: 25 })
   const password = useInput('', { isEmpty: true, minLength: 5 })
   const email = useInput('', { isEmpty: true, isEmail: true })

   const auth = (e) => {
      e.preventDefault()
   }

   return (
      <div className="formBlock">
         <div className="formTitles">
            <button
               className={isAuth ? 'active' : ''}
               onClick={() => setIsAuth(true)}>
               Войти
               <GetArrowIcon />
            </button>
            <button
               className={!isAuth ? 'active' : ''}
               onClick={() => setIsAuth(false)}>
               Регистрация
               <GetArrowIcon />
            </button>
         </div>
         <form onSubmit={auth}>
            <div className="form-inputs">
               <InputForm
                  name='login'
                  type='text'
                  namelabel='Логин'
                  value={login.value}
                  onChange={(e) => login.onChange(e)}
                  onBlur={(e) => login.onBlur(e)}
                  error={login.inputValue}
               />
               <InputForm
                  name='password'
                  type='password'
                  namelabel='Пароль'
                  value={password.value}
                  onChange={(e) => password.onChange(e)}
                  onBlur={(e) => password.onBlur(e)}
               />
               {!isAuth &&
                  <InputForm
                     name='email'
                     type='text'
                     namelabel='Почта'
                     value={email.value}
                     onChange={(e) => email.onChange(e)}
                     onBlur={(e) => email.onBlur(e)}
                  />
               }
            </div>
            <div className="formErrors">
               {
                  ((login.isDirty && login.isEmpty) || (password.isDirty && password.isEmpty))
                  && <div className="errorForm">* Заполнены не все поля</div>
               }
               {(login.isDirty && login.maxLengthError) && <div className="errorForm">* Логин не должен содержать 25 символов</div>}
               {(email.isDirty && email.emailError) && <div className="errorForm">* Неверный формат почты</div>}
               {
                  ((login.isDirty && login.minLengthError) || (password.isDirty && password.minLengthError))
                  && <div className="errorForm">* Логин и пароль должны иметь минимум 5 символов</div>
               }
            </div>

            {
               isAuth &&
               <div className="forgot-password">
                  <a href="#">Забыли пароль?</a>
               </div>
            }
            <div className="links">
               {
                  isAuth
                     ? <AuthButton disabled={!login.inputValue || !password.inputValue} >Войти</AuthButton>
                     : <AuthButton disabled={!login.inputValue || !password.inputValue || !email.inputValue} type='submit'>Зарегестрироваться</AuthButton>
               }
               <div className="links-icons">
                  <GetVkIcon />
                  <GetGoogleIcon />
               </div>
            </div>
         </form>
      </div>
   )
}

export default Form