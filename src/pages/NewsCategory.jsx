import React from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { getNewsCategoryEndpoint } from "../api/endpoints";
import { useFetch } from "../utils/hooks/useFetch";
import Layout from "../components/Layout";
import { getNewsList } from "../api/adapters";
import NewsCardList from "../components/NewsCardList";

function NewsCategory() {
  const { categoryId } = useParams();
  const url = getNewsCategoryEndpoint(categoryId, 1);
  const data = useFetch(url);
  const newsList = getNewsList(data);
  console.log(data);
  let title = "";
  switch (categoryId) {
    case "technology":
      title = "Tech";
      break;
    case "football":
      title = "Football";
      break;
    case "fashion":
      title = "Fashion";
      break;
    default:
      break;
  }
  return (
    <Layout>
      <Container className="my-5">
        <h1 className="mb-5 pt-3">{title}</h1>
        <NewsCardList newsList={newsList} />
      </Container>
    </Layout>
  );
}

export default NewsCategory;
