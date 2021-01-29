import React, { useState } from 'react';
import './Register.css';
import { useHistory } from "react-router-dom";

async function registerUser(credentials) {
  return fetch('http://localhost:8000/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
      .then(data => data.json())
}

const Register = ({ setUserInfo }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();

  const handleSubmit = async e => {
    e.preventDefault();
    const userInfo = await registerUser({
      email,
      password
    });
    setUserInfo(userInfo);
    history.push('/')
  }

  return(
      <div className="login-wrapper">
        <h1>Register</h1>
        <p>Please, enter an E-mail and a password</p>
        <form onSubmit={handleSubmit}>
          <label>
            <p>E-mail</p>
            <input type="text" onChange={e => setEmail(e.target.value)} />
          </label>
          <label>
            <p>Password</p>
            <input type="password" onChange={e => setPassword(e.target.value)} />
          </label>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
  )
}

export default Register;
