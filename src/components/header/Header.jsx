import './Header.css'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <header className='container'>
      <nav className='nav-bar'>
        <div className='logo'>
          <img src="/images/logo.svg" alt="Logo" className='logo'/>
        </div>
        <div className='nav-menu'>
            <Link className='link' to="/home">
              <img src="/images/home-icon.svg" alt="" />
              <span>Home</span>
            </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header