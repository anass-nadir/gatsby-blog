/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'


export const YouTube = ({ id }) => {
  return (
    <Styled.div
      sx={{
        position: 'relative',
        paddingBottom: '56.25%',
        paddingTop: '25px',
        height: 0,

        iframe: {
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        }
      }}
    >
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </Styled.div>
  )
}
