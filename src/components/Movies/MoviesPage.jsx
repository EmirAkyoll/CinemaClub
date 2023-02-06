import { useSelector } from "react-redux";
import { Container } from "semantic-ui-react"
import MovieCard from "./MovieCard"

function MoviesPage() {
  const movieState = useSelector(state => state.movies);

  return (
    <section>
      <Container style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '300px 300px 300px 300px', gridColumnGap: '35px', gridRowGap: '50px' }}>
          {
            movieState.movies.map((movie, index) => {
              return (
                <MovieCard
                  key={index}
                  title={movie.title}
                  description={movie.description}
                  publishedYear={movie.publishedYear}
                />
              )
            })
          }
        </div>
      </Container>
    </section>
  )
}

export default MoviesPage
