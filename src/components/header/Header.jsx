import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="container">
      <nav className="nav-bar">
        <div className="logo">
          <img src="/images/logo.svg" alt="Logo" className="logo" />
        </div>
        <div className="nav-menu">
          <Link className="link" to="/home">
            <img src="/images/home-icon.svg" alt="" />
            <span>HOME</span>
          </Link>
          <Link className="link" to="/search">
            <img src="/images/search-icon.svg" alt="" />
            <span>SEARCH</span>
          </Link>
          <Link className="link" to="/watchlist">
            <img src="/images/watchlist-icon.svg" alt="" />
            <span>WATCHLIST</span>
          </Link>
          <Link className="link" to="/original">
            <img src="/images/original-icon.svg" alt="" />
            <span>ORIGINAL</span>
          </Link>
          <Link className="link" to="/movies">
            <img src="/images/movie-icon.svg" alt="" />
            <span>MOVIES</span>
          </Link>
          <Link className="link" to="/series">
            <img src="/images/series-icon.svg" alt="" />
            <span>SERIES</span>
          </Link>
        </div>
        <img src="/images/viewers-disney.png" alt="" className="user-image" />
      </nav>
    </header>
  );
}

export default Header;
