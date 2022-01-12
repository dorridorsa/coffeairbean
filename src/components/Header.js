import './header.css'
import header from '../assets/header.png'
import navicon from'../assets/navicon.png'
import { useHistory } from 'react-router-dom'

function Header() {
const history = useHistory()

function displayNavbar() {
    history.push("/Navbar")
    

  }

  return (
    <div id="header">
      <img id="navicon" src={ navicon } alt="hamburgermenu"  role="button" onClick={displayNavbar}/>
    <img src={ header } alt="natur" className='Natur'/>
    </div>

  )
}
export default Header