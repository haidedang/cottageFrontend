import React from "react";
import Card from "./card";

const Articles = ({ articles }) => {
  // sort them by published date
  articles.sort((a,b) => {
    return new Date(b.node.publishedAt) - new Date(a.node.publishedAt)
  })
  console.log(articles)
  const leftArticles = articles.slice(0, 1)
  const rightArticles = articles.slice(1, articles.length)

  return (
    <div>
      <div className="" >
        {/* Main article / NEwest article */}
        <div>
          {leftArticles.map((article, i) => {
            return (
              <Card
                article={article}
                key={`article__left__${article.node.slug}`}
              />
            );
          })}
        </div>

        {/* Old articles */}
        <div>
          <div className="uk-child-width-1-2@m uk-grid-match" data-uk-grid>
            {rightArticles.map((article, i) => {
              return (
                <Card
                  article={article}
                  key={`article__right__${article.node.slug}`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
