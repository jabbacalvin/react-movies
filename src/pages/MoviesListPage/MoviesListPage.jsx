import MovieCard from "../../components/MovieCard/MovieCard";

export default function MoviesListPage({ movies }) {
  return (
    <div class="container">
      <div class="row">
        {movies.map((movie, index) => (
          <div class="col s6">
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
}