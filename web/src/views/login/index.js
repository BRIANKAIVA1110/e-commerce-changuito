import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useCookie from '../../hooks/cookie';
import './styles.css';

export default function Login() {

 const navigate = useNavigate();
 const [errorMsg, setErrorMsg] = useState({});
 const { createCookie } = useCookie();

 const credentialsDB = {
  identification: 'changuito',
  password: 'changuito'
 }

 const handleSubmit = (event) => {

  event.preventDefault();

  const { identification, password } = document.forms[0];

  if (identification.value != credentialsDB.identification) {
   setErrorMsg({ name: 'identification', message: 'Invalid identification' });
  }
  else if (password.value != credentialsDB.password) {
   setErrorMsg({ name: 'password', message: 'Invalid password' });
  }

  else {
   setErrorMsg({});
   createCookie('username', identification.value);
   navigate(`/`);
   return;
  }
 }

 const renderErrorMsg = (name) =>

  name === errorMsg.name && (
   <span>{errorMsg.message}</span>
  )

 return (
  <>
   <div className="login-main">
    <div className="login-form">
     <form onSubmit={handleSubmit}>
      <label>E-mail, teléfono o usuario</label>
      <input type="text" name="identification" required />
      {renderErrorMsg('identification')}
      <label>Contraseña</label>
      <input type="password" name="password" required />
      {renderErrorMsg('password')}
      <input type="submit" value="LogIn" />
     </form>
    </div>
   </div>
  </>
 )
}