import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import cardStyles from "./card.module.css";

const Card = ({ article }) => {
  return (
    <Link to={`/article/${article.node.slug}`} className="">
      <div className="mb-2 rounded-lg">
        <Img
          className="rounded-md"
          fluid={{...article.node.image.childImageSharp.fluid, aspectRatio: 4/3}}
          style={{maxHeight:"600px"}}
        ></Img>
        <div className="flex flex-col items-center mb-4">
          <p id="category" className="mb-1 mt-2 tracking-widest " style={{color:"#be9656"}}>
            {article.node.category.name}
          </p>
          <p id="title" className="text-center m-0">
            {article.node.title}
          </p>
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
    </Link>
  );
};

export default Card;
