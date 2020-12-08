import react from 'react'

import NavBar from '../Components/NavBar/NavBar'

import Home from '../Pages/Home/Home'
import Select from '../Pages/Videos/Select/Select'
import Play from '../Pages/Videos/Play/Videos'
import Upload from '../Pages/Upload/index.routes'
import Episode from '../Pages/Videos/Episode/Episode'

import { BrowserRouter as Router, Route } from "react-router-dom";

export default function _Routes(){
  return(
    <Router>

      {/* {
        Episode
          ?
        null
          :
        <NavBar />
      } */}
      <NavBar />

      <Route path="/" exact component={Home} />
      <Route path="/select" component={Select} />
      <Route path="/episode" component={Episode} />
      <Route path="/play" component={Play} />
      <Route path="/upload" component={Upload} />

    </Router>
  )
}