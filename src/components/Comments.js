import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

const Comments = ({ slug }) => (
  <>
    <Helmet>
      <script
        async
        src={`${process.env.COMMENTS_SERVER_URL}/embed.js`}
        data-schnack-slug={slug}
        data-schnack-target=".blog-post-comments"
      />
    </Helmet>
    <section className="blog-comments">
      <h3 className="blog-comments-headline">Comments</h3>
      <div id="blog-post-comments" className="blog-post-comments" />
    </section>
  </>
);

Comments.propTypes = {
  slug: PropTypes.string.isRequired,
};

export default Comments;
