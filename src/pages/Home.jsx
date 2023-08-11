/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import Cookies from 'js-cookie';
import { useSelector } from "react-redux";

export const Home = () => {
  const [message, setMessage] = useState('');
  const userId = useSelector((state) => state.user.value.id)

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = Cookies.get('token');
    const objectData = {
      "data": {
        "text": message,
        "user": userId
    }}
    fetch('http://localhost:8080/api/posts', {
      method: 'post',
      headers:{
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`, 
      },
      body: JSON.stringify(objectData)
    })
    .then(response => response.json())
    .then(console.log('Le post a bien été enregistré !'))
  };

  const handleChange = (e) => {
    e.preventDefault();
    setMessage(e.target.value);
  };

  return (
    <>
      <div>Home</div>
      <p>
        Welcome on My Social Network. This website is a training to React, global state handling and tokens. Here, authentification and routing will be used to create a small social media website.
      </p>
      <form onSubmit={handleSubmit}>
        <label>Message :
        <textarea 
          rows='3' 
          name="message" 
          value={message || ""} 
          onChange={handleChange}
        />
        </label>
        <input type="submit" value="Poster" />
      </form>
    </>
  )
}
