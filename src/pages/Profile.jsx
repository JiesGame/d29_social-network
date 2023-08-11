/* eslint-disable react/no-unescaped-entities */

import Cookies from 'js-cookie';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';


export const Profile = () => {
  const username = useSelector((state) => state.user.value.username);
  const email = useSelector((state) => state.user.value.email);
  const description = useSelector((state) => state.user.value.description);
  const [connected, setConnected] = useState(false)


  useEffect(() => {
    const token = Cookies.get('token')
    if(token) {
      setConnected(true);
    }
  }, [])
  // useEffect(() => {
  //   const token = Cookies.get('token')
  //   if(token) {
  //     fetch('http://localhost:8080/api/users/me', {
  //       method: 'get',
  //       headers: {
  //         'Authorization': `Bearer ${token}`,
  //         'Content-Type': 'application/json'
  //       },
  //     })
  //     .then(response => response.json())
  //     .then(data => {
  //       setInfoProfile({
  //         username: data.username,
  //         email: data.email,
  //         description: data.description,
  //         id: data.id
  //       })
  //       setConnected(true);
  //       console.log(data)
  //     })
  //   }
  // }, [])

  return (
    <>
      <h1>Profil</h1>
      {connected ? 
      <div>
        <p>Nom d'utilisateur : {username}</p>
        <p>Adresse mail : {email}</p>
        <p>Description : {description ? description : 'Vous n\'avez pas encore rempli votre description'}</p>
      </div>
      :
      <p>Vous n'êtes pas connectés</p>}
    </>
  )
}
