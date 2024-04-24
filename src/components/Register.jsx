import { useState } from "react"
import { Logo } from "./Logo"
import { Input } from "./Input"
import {
  passwordValidationMessage,
  usernameValidationMessage,
  validatePasswordConfirm,
  emailValidationMessage,
  validateEmail,
  validatePassword,
  validateUsername,
  passwordConfirmMessage
} from '../shared/validators'

import { useRegister } from "../shared/hooks/useRegister"

export const Register = ({ switchAuthHandler }) => {
  const { register, isLoading } = useRegister()
  const [formState, setFormState] = useState({
    email: {
      value: '',
      isValid: false,
      showError: false
    },
    username: {
      value: '',
      isValid: false,
      showError: false
    },
    passwordConfir: {
      value: '',
      isValid: false,
      showError: false
    },
    password: {
      value: '',
      isValid: false,
      showError: false
    }
  })
  const handleInputValueChange = (value, field) => {
    setFormState((prevState) => ({
      ...prevState,
      [field]: {
        ...prevState[field],
        value
      }
    }))
  }

  const handleInputValidationOnBlur = (value, field) => {
    let isValid = false
    switch (field) {
      case 'email':
        isValid = validateEmail(value);
        break;
      case 'password':
        isValid = validatePassword(value);
        break;
      case 'passwordConfir':
        isValid = validatePasswordConfirm(formState.password.value,value);
        break;
      case 'username':
        isValid = validateUsername(value);
        break;
      default:
        break;
    }
    setFormState((prevState) => ({
      ...prevState,
      [field]: {
        ...prevState[field],
        isValid,
        showError: !isValid
      }
    }))
  }

  const handleRegister = (event) => {
    event.preventDefault()
    register(formState.email.value, formState.password.value, formState.passwordConfir.value, formState.username.value)
  }

  const isSubmitButtonDisabled = 
    isLoading 
    || !formState.password.isValid 
    || !formState.email.isValid 
    || !formState.passwordConfir.isValid
    || !formState.username.isValid
  return (
    <div className="register-container">
      <Logo text={'Register Kinal Twitch'} />
      <form className="auth-form">
        <Input
          field='email'
          label='Email'
          value={formState.email.value}
          onChangeHandler={handleInputValueChange}
          type='text'
          onBlurHandler={handleInputValidationOnBlur}
          showErrorMessage={formState.email.showError}
          validationMessage={emailValidationMessage}
        />
        <Input
          field='username'
          label='Username'
          value={formState.username.value}
          onChangeHandler={handleInputValueChange}
          type='text'
          onBlurHandler={handleInputValidationOnBlur}
          showErrorMessage={formState.username.showError}
          validationMessage={usernameValidationMessage}
        />
        <Input
          field='password'
          label='Password'
          value={formState.password.value}
          onChangeHandler={handleInputValueChange}
          type='password'
          onBlurHandler={handleInputValidationOnBlur}
          showErrorMessage={formState.password.showError}
          validationMessage={passwordValidationMessage}
        />
        <Input
          field='passwordConfir'
          label='PasswordConfir'
          value={formState.passwordConfir.value}
          onChangeHandler={handleInputValueChange}
          type='password'
          onBlurHandler={handleInputValidationOnBlur}
          showErrorMessage={formState.passwordConfir.showError}
          validationMessage={passwordConfirmMessage}
        />
        <button onClick={handleRegister} disabled={isSubmitButtonDisabled}>
          Register
        </button>
      </form>
      <span onClick={switchAuthHandler} className="auth-form-switch-label">
        Inicia sesión con tu cuenta.
      </span>
    </div>

  )
}
