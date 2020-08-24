import React from 'react';
import { Styled } from 'theme-ui';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import { PostList } from '../components/PostList/PostList';
import { Seo } from '../components/Seo';

const Category = ({
  pageContext,
  data: {
    allMdx,
    site: {
      siteMetadata: { title }
    }
  }
}) => {
  const { category } = pageContext;
  const { edges, totalCount } = allMdx;
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } under "${category}" category`;
  const listItems = edges.map((item) => item);
  return (
    <div>
      <Seo
        title={`${title} | ${category}`}
        description={tagHeader}
        path={`/category/${category}`}
      />
      <Styled.h2>{tagHeader}</Styled.h2>
      <PostList listItems={listItems} />
    </div>
  );
};

Category.propTypes = {
  pageContext: PropTypes.shape({
    category: PropTypes.string.isRequired
  }),
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
              featuredImage: PropTypes.object.isRequired,
              date: PropTypes.string.isRequired
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired
            })
          })
        }).isRequired
      )
    })
  })
};

export default Category;

export const categoryQuery = graphql`
  query($category: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      totalCount
      edges {
        node {
          excerpt(pruneLength: 100)
          fields {
            slug
          }
          frontmatter {
            title
            tags
            date
            featuredImage {
              childImageSharp {
                fluid {
                  aspectRatio
                  sizes
                  src
                  srcSet
                }
              }
            }
          }
        }
      }
    }
  }
`;
