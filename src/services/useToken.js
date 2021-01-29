import {useState} from 'react';

const useToken = () => {
  const getToken = () => {
    return localStorage.getItem('token');
  };
  const getUserId = () => {
    return localStorage.getItem('userId');

  }
  const [token, setToken] = useState(getToken());
  const [userId, setUserId] = useState(getUserId());

  const saveToken = (userToken) => {
    localStorage.setItem('token', userToken);
    setToken(userToken);
  };

  const saveUserId = (userId) => {
    localStorage.setItem('userId', userId);
    setUserId(userId);
  }

  const saveUserInfo = (userInfo) => {
    saveToken(userInfo.token);
    saveUserId(userInfo.userId);
  }

  const removeToken = () => {
    localStorage.removeItem('token');
  }

  return {
    setToken: saveToken,
    setUserInfo: saveUserInfo,
    setUserId: saveUserId,
    removeToken,
    token,
    userId,
  }
}

export default useToken;
