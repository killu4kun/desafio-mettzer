import React from "react";
import * as S from "./style";
import { IoIosRemoveCircle } from "react-icons/io";

export default function FavouriteCard({ favourites, handleFavorites }) {
  return (
    <S.ListArticles>
      <section>
        <strong>{favourites.title}</strong>
        <p>{favourites.authors}</p>
      </section>
      <button>
        <IoIosRemoveCircle
          fontSize={26}
          color="red"
          onClick={() => {
            handleFavorites(favourites);
          }}
        />
      </button>
    </S.ListArticles>
  );
}
