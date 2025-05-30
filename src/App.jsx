
import './App.css'

function App() {


  return (
    <>
      <header>
        <div className="navBar flex justify-around align-center">
          <div className="navCol">
            <img src="/dc-logo.png" alt="Logo Dc" className='headerLogo' />
          </div>
          <div className="navCol">
            <ul className='navUl'>
              <li><div className='pageOff'><a href="">Characters</a></div></li>
              <li><div className='activePage '><a href="" className='primaryColor'>Comics</a></div></li>
              <li><div className='pageOff'><a href="">Movies</a></div></li>
              <li><div className='pageOff'><a href="">Tv</a></div></li>
              <li><div className='pageOff'><a href="">Games</a></div></li>
              <li><div className='pageOff'><a href="">Collectibles</a></div></li>
              <li><div className='pageOff'><a href="">Videos</a></div></li>
              <li><div className='pageOff'><a href="">Fans</a></div></li>
              <li><div className='pageOff'><a href="">News</a></div></li>
              <li><div className='pageOff'><a href="">Shop</a></div></li>

            </ul>
          </div>
        </div>
      </header>
    </>
  )
}

export default App
