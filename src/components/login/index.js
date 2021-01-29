import React, { useState, useEffect } from 'react';
import './Login.css';
import { useHistory } from "react-router-dom";
import useRestActions from "../../services/useRestActions";
import useToken from "../../services/useToken";

const Login = ({ setUserInfo }) => {
  const history = useHistory();
  const { token } = useToken();

  if(token) history.push('/');

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { postRest } = useRestActions();

  const handleSubmit = async e => {
    e.preventDefault();
    const userInfo = await postRest('http://localhost:8000/login', {
      email,
      password
    });
    setUserInfo(userInfo);
    history.push('/');
  }

  return(
      <div className="login-wrapper">
        <h1>Please Log In</h1>
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

export default Login;
