import React from 'react';
import { Ul } from '../styledComponents';
import { graphql, useStaticQuery } from 'gatsby';
import PostingHeader from './postingHeader';
import PostingBody from './postingBody';

const ReactPostListQuery = graphql`
  query ReactPostListQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
      filter: { frontmatter: { subCategory: { eq: "react" } } }
    ) {
      edges {
        node {
          excerpt(truncate: true, pruneLength: 200)
          frontmatter {
            title
            path
            date(formatString: "YYYY-MM-DD HH:mm:ss")
          }
          id
        }
      }
    }
  }
`;

const ReactPosting = () => {
  const data = useStaticQuery(ReactPostListQuery);
  return (
    <>
      <PostingHeader />
      <Ul margin='0.2rem' listStyle='none'>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <PostingBody node={node} />
        ))}
      </Ul>
    </>
  );
};

export default ReactPosting;