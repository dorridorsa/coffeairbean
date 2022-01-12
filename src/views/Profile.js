import '../css/Profile.css';
import user from '../assets/user.png';
import Header from '../components/Header'
import OrderItem from '../components/OrderItem'
import { UserContext, EmailContext } from '../App.js'

import { useContext } from 'react'

function Profile() {

  const username = useContext(UserContext)
  const email = useContext(EmailContext)
  


  return (
    <div>
         <Header />
    <div id="profil">
    <img src={user} alt="Profilbild"/>

    <h3 className="username-text">{ username }</h3>
    <h3 className="email-text">{ email }</h3>
    


    <h2 id="text-profil">Orderhistorik</h2>
  

    <OrderItem />
    </div>
    </div>
  )
}

export default Profile