import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { getNewsDetailsEndpoint } from "../api/endpoints";
import { getNewsDetails } from "../api/adapters";
import { useFetch } from "../utils/hooks/useFetch";
import Layout from "../components/Layout";
import style from "./NewsDetails.module.css";

function NewsDetails() {
  const { newsId } = useParams();
  const decodedUrl = decodeURIComponent(newsId);
  const url = getNewsDetailsEndpoint(decodedUrl);
  const newsData = useFetch(url);
  const adaptedNewsData = getNewsDetails(newsData);
  const { title, image, description, content } = adaptedNewsData;

  return (
    <Layout>
      <Container className={`${style.newsDetails} my-5`}>
        <Row className="d-flex justify-content-center">
          <Col xs={12} lq={8}>
            <h1 className="mb-5 pt-3">{title}</h1>
            <p>{description}</p>
            <div dangerouslySetInnerHTML={{ __html: image }} />
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export default NewsDetails;
