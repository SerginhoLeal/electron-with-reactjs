import React from 'react'

import './Episode.css'

import queryString from 'query-string';

import Image from '../../../img/2019-08-31.png'
import Image2 from '../../../img/2019-10-27.png'
import Image3 from '../../../img/A12.jpg'
import Image4 from '../../../img/espaço.1.png'

import {Link} from 'react-router-dom'

export default function _Episode({location}){

  const [rende, seTrender] = React.useState(false)

  setTimeout(function(){
    seTrender(true)
  }, 500);

  const {episodios} = queryString.parse(location.search);

  const getAllData = JSON.parse(episodios)

  // console.log(getAllData)

  return(
    <div className="bodySelect">
      
      <img src={getAllData.urlImage} className="background" data-text="Design"/>

      <div className={rende === true ? "showEpisode slide" : "showEpisode"}>

        <div className="container">

        <p className="fontGlobal texto">{episodios.description}</p>

          {
            getAllData.videos.map(tes => (
              <Link to={`/play?playVideo=${JSON.stringify(tes)}`}className="card">
                <img src={getAllData.urlImage} className="imgHome" data-text="Design"/>
                <div className="content">
                  <div className="info_content">
                    <h3 className="fontGlobal titulo">{tes.episode}</h3>
                    <p className="fontGlobal texto">{tes.description}</p>
                    <div className="actions">

                    </div>
                  </div>
                </div>
              </Link>
            ))
          }

        </div>

      </div>
    </div>
  )
}