import { Link } from "react-router-dom"

function randomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

export default function ActorCard({ actor }) {
  let random = randomNumber(1, 400);
  return (
    <div class="row">
      <div class="col s12">
        <div class="card hoverable">
          <div class="card-image">
            <img src={`https://picsum.photos/seed/${random}/200/300`} />
          </div>
          <div class="card-content">
            <span class="card-title truncate">{actor}</span>
          </div>
        </div>
      </div>
    </div>
  );
}