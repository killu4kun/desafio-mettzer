import React, { useCallback, useEffect, useState } from "react";
import ArticleCard from "../../components/ArticleCard";
import FavouriteCard from "../../components/FavouriteCard";
import Loading from "../../components/Loading";
import Pagination from "../../components/Pagination";
import SearchForm from "../../components/SearchForm";
import SearchHeader from "../../components/SearchHeader";

import api from "../../services/api";
import * as S from "./styles";

export default function Search() {
  const [articles, setArticles] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [query, setQuery] = useState("");
  const [offset, setOffset] = useState(1);
  const [hasSearched, setHasSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const LIMIT = 11;

  useEffect(() => {
    const fav = localStorage.getItem("@MettzerTest: favorite");
    const favs = JSON.parse(fav);
    if (favs) {
      setFavorites(favs);
    }
  }, []);

  const handleSearch = useCallback(
    async (event) => {
      setIsLoading(true);
      const querySearch = {
        page: {
          limit: LIMIT,
          offset,
        },
      };

      if (query) {
        querySearch.filter = {
          query,
        };
      }

      event && event.preventDefault();
      try {
        const response = await api.get(
          `/articles/search/${query}?page=${offset}&pageSize=${LIMIT}&metadata=true&fulltext=false&citations=false&similar=false&duplicate=false&urls=false&faithfulMetadata=false&apiKey=Hhj9YTXOxutANGw1J0SBMiCl57m42FUq`
        );

        setArticles(response.data.data);
        setHasSearched(true);
        setIsLoading(false);
      } catch (error) {
        alert("NENHUM RESULTADO");
        setIsLoading(false);
      }
    },
    [offset, query]
  );
  useEffect(() => {
    if (articles.length > 0) {
      handleSearch();
    }
  }, [offset, articles.length, handleSearch]);

  const handleFavorites = (article) => {
    const fav = localStorage.getItem("@MettzerTest: favorite");
    const favs = JSON.parse(fav);
    if (favs) {
      const findId = favs.findIndex((favorite) => favorite.id === article.id);
      if (findId !== -1) {
        favs.splice(findId, 1);
        localStorage.setItem(
          "@MettzerTest: favorite",
          JSON.stringify([...favs])
        );
        setFavorites([...favs]);
        return;
      }

      localStorage.setItem(
        "@MettzerTest: favorite",
        JSON.stringify([...favs, article])
      );
      setFavorites([...favs, article]);
    } else {
      localStorage.setItem("@MettzerTest: favorite", JSON.stringify([article]));
      setFavorites([article]);
    }
  };
  return (
    <S.SearchPageContainer>
      <SearchHeader />
      <SearchForm
        query={query}
        handleSearch={handleSearch}
        setQuery={setQuery}
      />
      {isLoading && <Loading />}
      {hasSearched && !isLoading && (
        <>
          <h1>Artigos</h1>
          {articles.map((article) => {
            return (
              <S.Content key={article.id}>
                <ArticleCard
                  article={article}
                  favorites={favorites}
                  handleFavorites={handleFavorites}
                />
              </S.Content>
            );
          })}
          <Pagination
            limit={LIMIT}
            total={articles.totalHits}
            offset={offset}
            setOffset={setOffset}
          />
        </>
      )}
      <>
        <h1>Favoritos</h1>
        {favorites.map((favs) => {
          return (
            <S.Content key={favs.id}>
              <FavouriteCard
                favourites={favs}
                handleFavorites={handleFavorites}
                key={favs.id}
              />
            </S.Content>
          );
        })}
      </>
    </S.SearchPageContainer>
  );
}
