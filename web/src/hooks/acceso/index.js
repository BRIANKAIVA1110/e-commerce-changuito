import { useState } from 'react';

const credentialsDB = {
 identification: 'changuito',
 password: 'changuito'
}

const useAcceso = () => {
 const [errorMsg, setErrorMsg] = useState({});

 const iniciarSesion = (identification, password) => {

  debugger;
  
  if (identification != credentialsDB.identification) {
   setErrorMsg({ name: 'identification', message: 'Invalid identification' });
  }
  else if (password != credentialsDB.password) {
   setErrorMsg({ name: 'password', message: 'Invalid password' });
  }
  else {
   setErrorMsg({});
  }
 }

 return { errorMsg, iniciarSesion }
}

export default useAcceso;