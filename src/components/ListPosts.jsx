import { useState, useEffect } from "react";

export const ListPosts = () => {
  const [postsNumber, setPostsNumber] = useState('')
  const [dataPosts, setDataPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/posts/', {
      method: 'get',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(response => response.json())
    .then(data => {
      setPostsNumber(data.meta.pagination.total),
      setDataPosts(data.data.map(data => <p key={data.id}>{data.attributes.text}</p>))
    })
  }, [])

  return (
    <>
      <h2>Liste des posts</h2>
      {dataPosts}
    </>
  )
}
