import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import cardStyles from "./card.module.css";

const Card = ({ article }) => {
  return (
    <Link to={`/article/${article.node.slug}`} className="uk-link-reset">
      <div className="uk-card uk-card-muted">
        <Img
          className={[cardStyles.imageWrapper, "uk-card-media-top"].join(" ")}
          fluid={article.node.image.childImageSharp.fluid}
          /*  objectFit="cover"
         objectPosition="50% 50%" */
          /*  imgStyle={{ position: "static",  objectFit:"cover" }} */
          imgStyle={{ width: "100%", maxHeight: "100%" }}
        ></Img>
        <div className="uk-card-body">
          <p id="category" className="uk-text-uppercase">
            {article.node.category.name}
          </p>
          <p id="title" className="uk-text-large">
            {article.node.title}
          </p>
          <div>
            <hr className="uk-divider-small" />
            <div className="uk-grid-small uk-flex-left" data-uk-grid="true">
              <div>
                {article.node.author.picture && (
                  <Img
                    fixed={article.node.author.picture.childImageSharp.fixed}
                    imgStyle={{ position: "static", borderRadius: "50%" }}
                  />
                )}
              </div>
              <div className="uk-width-expand">
                <p className="uk-margin-remove-bottom">
                  {article.node.author.name}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
