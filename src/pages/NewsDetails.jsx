import React from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

function NewsDetails() {
  const { newsId } = useParams();
  const decodedUrl = decodeURIComponent(newsId);
  console.log(decodedUrl);
  return (
    <div>
      <Container>NewsDetails</Container>
    </div>
  );
}

export default NewsDetails;
