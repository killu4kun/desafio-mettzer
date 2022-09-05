import React, { useEffect, useState } from "react";
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

  const LIMIT = 11;

  useEffect(() => {
    const fav = localStorage.getItem("@MettzerTest: favorite");
    const favs = JSON.parse(fav);
    if (favs) {
      setFavorites(favs);
    }
  }, []);

  useEffect(() => {
    if (articles.length > 0) {
      handleSearch();
    }
  }, [offset]);

  const handleSearch = async (event) => {
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

      console.log(articles, "articles");
    } catch (error) {}
  };

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
    <>
      <SearchHeader />
      <SearchForm
        query={query}
        handleSearch={handleSearch}
        setQuery={setQuery}
      />
    </>
  );
}
