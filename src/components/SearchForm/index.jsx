import React from "react";
import * as S from "./style";

export default function SearchForm({ query, setQuery, handleSearch }) {
  return (
    <S.Form>
      <input
        type="text"
        placeholder="Pesquise seu artigo aqui..."
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      {query.length > 0 ? (
        <button onClick={(event) => handleSearch(event)}>Exibir artigos</button>
      ) : (
        <button disabled>Exibir artigos</button>
      )}
    </S.Form>
  );
}
