import React from "react";
import articleContent from "./article-content";
import ArticleList from "../components/ArticleList";

const ArticlePage = ({ match }) => {
  const name = match.params.name;
  const article = articleContent.find((article) => article.name === name);
  const otherArticles = articleContent.filter(
    (article) => article.name !== name
  );
  if (!article) return <h1>Article doesn't exist</h1>;
  return (
    <>
      <div>
        <h1>{article.name}</h1>
        {article.content.map((paragraph) => (
          <p>{paragraph}</p>
        ))}
      </div>
      <h2>Other articles</h2>
      <div>
        <ArticleList articles={otherArticles} />
      </div>
    </>
  );
};

export default ArticlePage;
