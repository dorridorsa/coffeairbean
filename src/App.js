import './App.css'

import { useState, createContext } from 'react'
import {Switch, Route, BrowserRouter} from 'react-router-dom'

import About from './views/About'
import Menu from './views/Menu'
import Profile from './views/Profile'
import { User }  from './views/User'
import Orderstatus from './views/Orderstatus'
import Navbar from './views/Navbar'

const UserContext = createContext(undefined)
const EmailContext = createContext(undefined)


function App() {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('');

  return (
<div className="App">
      <BrowserRouter>
      <UserContext.Provider value={ username }>
      <EmailContext.Provider value={ email }>
      <Switch>
      <Route path="/" component={ () => <User update={ setUsername } updateEmail={ setEmail } /> } exact />
        <Route path="/About" component={ About } />
        <Route path="/Menu" component={ Menu } />
        <Route path="/Profile" component={ Profile } />
        <Route path="/Orderstatus" component={ Orderstatus } />
        <Route path="/Navbar" component={ Navbar } />
      </Switch>
      </EmailContext.Provider>
      </UserContext.Provider>
    
      </BrowserRouter>
    </div>
  )
}

export { App, UserContext, EmailContext, User }