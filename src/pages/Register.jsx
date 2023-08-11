/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

export const Register = () => {
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();
  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setInputs(values => ({...values, [name]: value}));
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      username: inputs.username,
      email: inputs.email,
      password: inputs.password
    };
    fetch('http://localhost:8080/api/auth/local/register', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(response => response.json())
      .then(data => Cookies.set('token', data.jwt, { expires: 7 }));
      navigate('../profile')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Username :
        <input 
          type="text" 
          name="username" 
          value={inputs.username || ""} 
          onChange={handleChange}
        />
        </label>
        <label>Email:
        <input 
          type="email" 
          name="email" 
          value={inputs.email || ""} 
          onChange={handleChange}
        />
        </label>
        <label>Password:
        <input 
          type="password" 
          name="password" 
          value={inputs.password || ""} 
          onChange={handleChange}
        />
        </label>
        <input type="submit" value="S'inscrire" />
      </form>
    </>
  )
}
