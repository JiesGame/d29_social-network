import { useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { changeProfile } from '../store';
import { useDispatch } from 'react-redux';


export const Login = () => {
  const [login, setLogin] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setLogin(values => ({...values, [name]: value}));
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      identifier: login.identifier,
      password: login.password
    };
    fetch('http://localhost:8080/api/auth/local', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(response => response.json())
    .then(data => {
      Cookies.set('token', data.jwt, { expires: 7 })
      Cookies.set('username', data.user.username, { expires: 7 })
      Cookies.set('email', data.user.email, { expires: 7 })
      Cookies.set('description', data.user.description, { expires: 7 })
      Cookies.set('id', data.user.id, { expires: 7 })
      dispatch(
        changeProfile({
          username: data.user.username,
          email: data.user.email,
          description: data.user.description,
          id: data.user.id
        })
      );
    });
    navigate('../');
    console.log('Connexion réussie !')
  }
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Login (email or username) :
        <input 
          type="text" 
          name="identifier" 
          value={login.identifier || ""} 
          onChange={handleChange}
        />
        </label>
        <label>Password:
        <input 
          type="password" 
          name="password" 
          value={login.password || ""} 
          onChange={handleChange}
        />
        </label>
        <input type="submit" value="Se connecter" />
      </form>
    </>
  )
}
