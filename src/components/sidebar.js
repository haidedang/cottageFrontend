import React from "react";
import Insta from "./instaFooter";
import { Link, StaticQuery, graphql } from "gatsby";
import InputField from "../components/input";

let styles = {
  font: {
    fontFamily: "Varela Round",
    fontSize: "14px",
  },
  h4:
    "tracking-widest uppercase font-black text-center border-black pt-2 pb-2 border-solid border-t border-b",
  footer: "flex flex-wrap",
  media: "w-4/12 pr-2 pb-2",
};

const Sidebar = () => (
  <StaticQuery
    query={graphql`
      query {
        strapiGlobal {
          siteName
        }
        allStrapiCategory {
          edges {
            node {
              slug
              name
            }
          }
        }
      }
    `}
    render={(data) => (
      <div className="w-full p-3" style={{ "background-color": "#f2f2f2" }}>
        <div className="aboutMe">
          <h4 className={styles.h4} style={styles.font}>
            About Us
          </h4>
          <img src={require("../../static/home2.jpg")}></img>
          <p style={styles.font}>
            The Cottagecore Dream is a lifestyle blog and community inspired by
            the ideas of simplicity, sustainability, slow living and harmony
            with nature. We offer a safe and peaceful place, where you can find
            lovely written articles and guides about various cottagecore themes.
            Our mission is to build an inclusive cottagecore community, where
            everybody can escape to and LIVE the Cottagecore Dream.
          </p>
        </div>
        <div className="newsletter">
          <h4 className={styles.h4} style={styles.font}>
            {" "}
            subscribe
          </h4>
          <InputField title="subscribe" />
        </div>
        <div className="instaWidget mt-4">
          <h4 className={styles.h4} style={styles.font}>
            {" "}
            instagram
          </h4>
          <Insta
            footer={styles.footer}
            media={styles.media}
            userName="cottagecoredream"
          />
        </div>
        <div className="categories mt-4">
        <h4 className={styles.h4} style={styles.font}>
            Categories
          </h4>
          <ul className="uk-nav uk-dropdown-nav">
            {data.allStrapiCategory.edges.map((category, i) => (
              <li style={{}} key={`category__${category.node.slug}`}>
                <Link to={`/category/${category.node.slug}`}>
                  {category.node.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )}
  />
);

export default Sidebar;
