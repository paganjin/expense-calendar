import { useState } from 'react';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('')
  const [enteredEmail, setEnteredEmail] = useState('')
  const [enteredNameTouched, setEnteredNameTouched] = useState(false)
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false)

  const enteredNameIsValid = enteredName.trim() !== ''
  const enteredEmailIsValid = enteredEmail.trim().includes('@')
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched


  let formIsValid = false

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true
  }

  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value)
  }

  const emailInputChangeHandler = event => {
    setEnteredEmail(event.target.value)
  }

  const nameInputBlurHandler = event => {
    setEnteredNameTouched(true)
  }

  const emailInputBlurHandler = event => {
    setEnteredEmailTouched(true)
  }

  const formSubmitHandler = event => {
    event.preventDefault()

    setEnteredNameTouched(true)
    setEnteredEmailTouched(true)

    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return
    }

    setEnteredName('')
    setEnteredEmail('')
    setEnteredNameTouched(false)
    setEnteredEmailTouched(false)
  }

  const nameInputClasses = nameInputIsInvalid 
    ? 'form-control invalid' 
    : 'form-control'

  const emailInputClasses = emailInputIsInvalid 
  ? 'form-control invalid' 
  : 'form-control'

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
          type='text' 
          id='name' 
          value={enteredName}
          onBlur={nameInputBlurHandler}
          onChange={nameInputChangeHandler}
        />
        {nameInputIsInvalid && <p className='error-text'>Name must not be empty.</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='name'>Your Email</label>
        <input 
          type='text' 
          id='email' 
          value={enteredEmail}
          onBlur={emailInputBlurHandler}
          onChange={emailInputChangeHandler}
        />
        {emailInputIsInvalid && <p className='error-text'>Email must includes '@'.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
