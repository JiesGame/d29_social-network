/* eslint-disable react/no-unescaped-entities */
import { useSelector } from "react-redux";
import { NewPosts } from "../components/NewPosts";
import { ListPosts } from '../components/ListPosts';

export const Home = () => {
  const userId = useSelector((state) => state.user.value.id);

  return (
    <>
      <p>
        Welcome on My Social Network. This website is a training to React, global state handling and tokens. Here, authentification and routing will be used to create a small social media website.
      </p>
      { userId && <NewPosts />}
      { userId && <ListPosts />}
    </>
  )
}
