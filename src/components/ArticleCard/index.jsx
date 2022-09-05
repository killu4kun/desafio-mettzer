import React from "react";
import * as S from "./style";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";

export default function ArticleCard({ article, handleFavorites, favorites }) {
  return (
    <S.ListArticles>
      <section>
        <strong>{article.title}</strong>
        <p>{article.description}</p>
        <h2>Autores:</h2> <p>{article.authors}</p>
        <h2>Contribuidores:</h2>
        <p>{article.contributors}</p>
      </section>
      <button>
        {favorites.find((favourite) => favourite.id === article.id) ? (
          <IoIosHeart
            fontSize={26}
            color="red"
            onClick={() => {
              handleFavorites(article);
            }}
          />
        ) : (
          <IoIosHeartEmpty
            fontSize={26}
            color="red"
            onClick={() => {
              handleFavorites(article);
            }}
          />
        )}
      </button>
    </S.ListArticles>
  );
}
