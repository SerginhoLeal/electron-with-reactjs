import React from 'react'

import './NavBar.css'
import '../../GlobalStyles.css'

import {Link} from 'react-router-dom'

export default function NavBar(){
  return(
    <header>
      <a href="/" className="fontGlobal title options">Usuário</a>
      <nav>
        <div className="nav_links">
          <li><Link to="/select" className="fontGlobal texto options">Animes</Link></li>
          <li><Link to="/" className="fontGlobal texto options">Sua Biblioteca</Link></li>
          <li><Link to="/upload" className="fontGlobal texto options">Upload</Link></li>
        </div>
      </nav>
      <button className="fontGlobal texto options button">Criadores</button>
    </header>
  )
}