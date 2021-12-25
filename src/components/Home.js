import React from "react";
import CharacterSearch from "./CharacterSearch";
import { useSelector } from 'react-redux'
const Page = (props) => {
  const validId = props.validId;
  if (validId) {
    return <div>Char info placeholder</div>
  }
  else {
    return <CharacterSearch />
  }
}
const Home = () => {
  const id = useSelector((state) => state.character.value);
  const validId = id ? true : false;
  console.log('validID', validId, id);
  return(
    <main className="container flex-grow-1 d-flex flex-column justify-content-sm-center">
      <Page validId={validId}></Page>
      <span>Test Span: {id}</span>
    </main>
  );
}

export default Home;