import { action, observable } from 'mobx';
import { createContext } from 'react';

class UserStore {
  @observable fullName = '';
  @observable password = '';
  @observable isLoging = false;

  @action authenticateUser = async () => {
    const resp = await fetch('http://localhost:4000/authenticateUser', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ fullName: this.fullName, password: this.password }),
    })
      .then((res) => {
        return res.statusText;
      })
      .catch((err) => {
        console.log('errrrrrr', err);
      });
    if (resp === 'Unauthorized') {
      this.isLoging = false;
      return resp;
    } else return (this.isLoging = true);
  };
}

export default createContext(new UserStore());
