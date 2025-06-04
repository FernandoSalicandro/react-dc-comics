import HeaderLink from "./AppHeaderNavLinks";
const navLinks = [
  {
    title: 'CHARACTERS',
    state: 'off',
    url: '#'
  },
  {
    title: 'COMICS',
    state: 'active',
    url: '#'
  },
  {
    title: 'MOVIES',
    state: 'off',
    url: '#'
  },
  {
    title: 'TV',
    state: 'off',
    url: '#'
  },
  {
    title: 'GAMES',
    state: 'off',
    url: '#'
  },
  {
    title: 'COLLECTIBLES',
    state: 'off',
    url: '#'
  },
  {
    title: 'VIDEOS',
    state: 'off',
    url: '#'
  },
  {
    title: 'FANS',
    state: 'off',
    url: '#'
  },
  {
    title: 'NEWS',
    state: 'off',
    url: '#'
  },
  {
    title: 'SHOP',
    state: 'off',
    url: '#'
  }
];


function App() {


  return (
    <>
      <div className="navBar">

        <div className="row">
          <div className="container flex align-center justify-between"><div className="navLogo"><img src="/dc-logo.png" alt="" /></div>
            <div className="navList">  <ul className="flex g1">
              {navLinks.map((curLink, index) => (
                <HeaderLink key={index} state={curLink.state} title={curLink.title} url={curLink.url} />
              ))}

            </ul></div>

          </div>
        </div>

      </div>

    </>
  )
}

export default App


//           <li><a href="#">Ciao</a></li>
//           <li><a href="#">Ciao</a></li>
//           <li><a href="#">Ciao</a></li>
//           <li><a href="#">Ciao</a></li>
//           <li><a href="#">Ciao</a></li>
//           <li><a href="#">Ciao</a></li>
//           <li><a href="#">Ciao</a></li>
//           <li><a href="#">Ciao</a></li>
//           <li><a href="#">Ciao</a></li>
//           <li><a href="#">Ciao</a></li>