import { useParams } from "react-router-dom"

export default function MovieDetailPage({ movies }) {
  let { movieName } = useParams();
  let movie = movies.find(m => m.title === movieName);

  return (
    <div class="container">
      <h1>{movie.title}</h1>
      <h6><b>Released on {new Date(movie.releaseDate).toLocaleDateString()}</b></h6>
      <hr />
      <div class="row">
        <div class="col s6">
          <ul class="collection with-header">
            <li class="collection-header"><h4>Cast</h4></li>
            {
              movie.cast.map(actor => {
                return <li class="collection-item" key={actor}>{actor}</li>
              })
            }
          </ul>
        </div>
        <div class="col s6">
          <img class="responsive-img" src={movie.posterPath} />
        </div>
      </div>
    </div>
  );
}