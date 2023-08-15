import { Link } from "react-router-dom"

export default function MovieCard({ movie }) {
  return (
    <div class="row">
      <div class="col s12">
        <div class="card hoverable">
          <div class="card-image">
            <img src={ movie.posterPath } />
          </div>
          <div class="card-content">
            <span class="card-title truncate">{movie.title}</span>
            <p><small>released on {new Date(movie.releaseDate).toLocaleDateString()}</small></p>
          </div>
          <div class="card-action">
            <Link to={`/movies/${movie.title}`}>Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
}