import ActorCard from "../../components/ActorCard/ActorCard";

export default function ActorsListPage({ movies }) {
  let castsArray = [];
  movies.forEach(movie => {
    castsArray.push(...movie.cast);
  });
  const castsSet = new Set(castsArray);
  const uniqueCastsArray = Array.from(castsSet);
  return (
    <div class="container">
      <div class="row">
        {uniqueCastsArray.map((actor, index) => (
          <div class="col s3">
            <ActorCard actor={actor} />
          </div>
        ))}
      </div>
    </div>
  );
}