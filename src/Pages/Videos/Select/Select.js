import React, { useState, useEffect } from 'react'

import './Select.css'

import {Link} from 'react-router-dom'

import Image from '../../../img/2019-08-31.png'
import Image2 from '../../../img/2019-10-27.png'
import Image3 from '../../../img/A12.jpg'
import Image4 from '../../../img/espaço.1.png'

export default function _Select(){

  const [docs, setDocs] = useState('')

  useEffect(()=>{
    fetch(`http://localhost:5000/qHRjF787trq3NU8QhRqbQrv`, {
      method: 'GET',
      headers: { 
        'Content-Type':'application/json',
      },
    })
    .then(res => res.json())
    .then(res =>{
      setDocs(res)
    })
  },[])

  return(
    <div className="bodySelect">
      <div className="container">

        {
          docs.length === 0 
            ?
          <h1>carregando</h1>
            :
          docs.map(ret => (
            <Link to={`/episode?episodios=${JSON.stringify(ret)}`} className="card">
              <img src={ret.urlImage} className="imgHome" data-text="Design"/>
              <div className="content">
                <div className="info_content">
                  <h3 className="fontGlobal titulo">{ret.nameFolder}</h3>
                  <p className="fontGlobal texto">{ret.description}</p>
                  {/* <div className="actions">

                  </div> */}
                </div>
              </div>
            </Link>
          ))
        }
        
      </div>
    </div>
  )
}

//Titulo do anime
//Descrição do anime, img ("sizeImage" * 1.7)