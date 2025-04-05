import { FaSearch } from 'react-icons/fa'
import './header.css'

const Header = () => {
  return (
    <header>
        <div className="container">
            <div className="row">
                <div className="col-md-2">
                    <div className="header-logo">
                        <h1>LOGO HERE</h1>
                    </div>
                </div>
                <div className="col-md-10">
                    <nav>
                        <ul>
                            <li>Home</li>
                            <li>providers</li>
                            <li>specialities</li>
                            <li>services</li>
                            <li>patient info</li>
                            <li>physical therapy</li>
                            <li>Location/Contact</li>
                            <li><button className='search-btn'><FaSearch/>Search</button></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header