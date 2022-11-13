import React, { useState } from 'react';
import './styles.css';

export default function Register() {
 const [error, setError] = useState({});

 const handleSubmit = (event) => {

  const { name, lastname, user, email } = document.forms[0];

  if (name.value.length == 0) {
   setError({ name: 'name', message: 'invàlid parameter name' });

  } else if (lastname.value.length == 0) {
   setError({ name: 'lastname', message: 'invàlid parameter lastname' });
  } else if (user.value.length == 0) {
   setError({ name: 'user', message: 'invàlid parameter user' });
  } else if (email.value.length == 0) {
   setError({ name: 'email', message: 'invàlid parameter email' });
  } else {
   setError({})
   // do registration
  }

  event.preventDefault();
 }

 const renderErrorMsg = (name) => {
  return (
   name === error.name && (
    <span>{error.message}</span>
   )
  )
 }
 return (
  <>
   <div className="register-main">
    <div className="register-form">
     <form onSubmit={handleSubmit}>
      <label>Nombre</label>
      <input type="text" name="name" />
      {renderErrorMsg('name')}
      <label>Apellido</label>
      <input type="text" name="lastname" />
      {renderErrorMsg('lastname')}
      <label>Usuario</label>
      <input type="text" name="user" />
      {renderErrorMsg('user')}
      <label>E-mail</label>
      <input type="email" name="email" />
      {renderErrorMsg('email')}
      <input type="submit" value="Crear" />
     </form>
    </div>
   </div>
  </>
 )
}