import React, { useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import './css/login.css';

const Login = () => {
  const [userName, setUser] = useState('')
  const [userError, setUserError] = useState('')
  const navigate = useNavigate(); 

  const onButtonClick = () => {
    setUserError('')
  
    if ('' === userName) {
      setUserError('Please enter your username')
      return
    }
    navigate("/AddItems"); 
  }

  useEffect(() => {
    let clientData = {clientId: userName, damaged: false, items: []}
    localStorage.setItem('clientJSON', JSON.stringify(clientData));
  }, [userName]);
  
  return (
    <div className={'mainContainer'}>
      <div className={'titleContainer'}>
        <div>Login</div>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={userName}
          placeholder="Enter your username here"
          onChange={(ev) => setUser(ev.target.value)}
          className={'inputBox'}
        />
        <label className="errorLabel">{userError}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input className={'inputButton'} type="button" onClick={onButtonClick} value={'Log in'} />
      </div>
    </div>
  )
}

export default Login