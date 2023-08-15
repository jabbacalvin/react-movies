import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav>
      <div class="nav-wrapper">
        <ul class="right">
          <li><Link to="/">Movies List</Link></li>
          <li><Link to="/actors">Actors List</Link></li>
        </ul>
      </div>
    </nav>
  );
}