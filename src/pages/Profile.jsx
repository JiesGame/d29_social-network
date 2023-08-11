/* eslint-disable react/no-unescaped-entities */

import Cookies from 'js-cookie';
import { useState, useEffect } from 'react';

export const Profile = () => {
  const [connected, setConnected] = useState(false)
  const [infoProfile, setInfoProfile] = useState({
    username: '',
    email: '',
    description: '',
    id: ''
  })

  useEffect(() => {
    const token = Cookies.get('token')
    if(token) {
      fetch('http://localhost:8080/api/users/me', {
        method: 'get',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
      })
      .then(response => response.json())
      .then(data => {
        setInfoProfile({
          username: data.username,
          email: data.email,
          description: data.description,
          id: data.id
        })
        setConnected(true);
        console.log(data)
      })
    }
  }, [])

  return (
    <>
      <h1>Profil</h1>
      {connected ? 
      <div>
        <p>Nom d'utilisateur : {infoProfile.username}</p>
        <p>Adresse mail : {infoProfile.email}</p>
        <p>Description : {infoProfile.description ? infoProfile.description : 'Vous n\'avez pas encore rempli votre description'}</p>
      </div>
      :
      <p>Vous n'êtes pas connectés</p>}
    </>
  )
}
