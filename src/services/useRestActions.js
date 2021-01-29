import useToken from './useToken';

const useRestActions = () => {
  const {token} = useToken();

  const getRest = (url) => {
    return fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token ? 'Bearer ' + token : '',
      },
    }).then(data => data.json());
  };
  const postRest = (url, payload) => {
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token ? 'Bearer ' + token : '',
      },
      body: JSON.stringify(payload),
    }).then(data => data.json());
  };
  const putRest = (url, payload) => {
    return fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token ? 'Bearer ' + token : '',
      },
      body: JSON.stringify(payload),
    }).then(data => data.json());
  };
  const deleteRest = (url) => {
    return fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token ? 'Bearer ' + token : '',
      },
    }).then(data => data.json());
  };

  return {
    getRest,
    postRest,
    putRest,
    deleteRest,
  }
}

export default useRestActions;
