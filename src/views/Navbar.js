import cross from'../assets/cross.png'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import '../css/Navbar.css'


function Navbar() {

  const history = useHistory();
  
function currentPage(){

  history.go(-1); return false

}

  return (
    <div id="navbar">
    <img id="cross" src={ cross } alt="menykryss" role="button" onClick={currentPage}/>
    <nav className="wrap">
      <Link className="text-link" to="/Menu">Meny</Link>
      <hr></hr>
      <Link className="text-link" to="/About">Vårt kaffe</Link>
      <hr></hr>
      <Link className="text-link" to="/Profile">Min profil</Link>
      <hr></hr>
      <Link className="text-link" to="/Orderstatus">Orderstatus</Link>
    </nav>
    </div>
  )
}


export default Navbar