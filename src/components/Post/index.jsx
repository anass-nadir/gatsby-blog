/** @jsx jsx */
import { jsx, Styled, useThemeUI } from 'theme-ui'
import Img from 'gatsby-image'

import { Tag } from '../Tag'

import { formatDate, colorRange } from '../../utils'


export const Post = ({ ...props }) => {
  const context = useThemeUI()
  const { excerpt, frontmatter } = props.node
  const { date, tags, title, featuredImage } = frontmatter

  const colorScale = colorRange(
    context.theme.colors?.primary,
    context.theme.colors?.secondary,
    tags.length
  )
  return (
    <article
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flex: '1 1 auto',
        color: 'text',
        fontFamily: 'body',
        backgroundColor: 'surface',
        overflow: 'hidden',
        borderRadius: 1,
        transition: '.2s linear all',
        ':hover': {
          filter: 'brightness(105%)'
        }
      }}
    >
      <Img alt={title} fluid={featuredImage.childImageSharp.fluid} />
      <Styled.div
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flex: '1 1 auto',
          p: [2, 3]
        }}
      >
        <Styled.h4
          sx={{
            mt: [2, 4],
            ':hover': {
              textDecoration: 'underline'
            }
          }}
        >
          {title}
        </Styled.h4>
        <Styled.div
          sx={{
            fontSize: 0,
            color: 'secondary',
            mb: 3
          }}
        >
          {formatDate(date)}
        </Styled.div>
        <Styled.p
          sx={{
            flex: '1 1 auto'
          }}
        >
          {excerpt}
        </Styled.p>
        <ul
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            p: 0,
            mt: 0,
            mb: 4,
            '> :nth-of-type(n)': {
              mr: 2
            }
          }}
        >
          {tags.map((tag, index) => (
            <Tag key={index} color={colorScale[index]}>
              {tag}
            </Tag>
          ))}
        </ul>
      </Styled.div>
    </article>
  )
}
