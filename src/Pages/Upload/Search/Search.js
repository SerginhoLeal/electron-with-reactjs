import React, { useState } from 'react'

import './Search.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


export default function _Search({sendInfo, setNext}){
  const [docs, setDocs] = useState([])
  const [search, setSearch] = useState('')

  const searchFolder = async() => {
    try {
      await fetch('http://localhost:5000/F2gAqRAutddCEHMQ92TVuCk', {
        method: 'POST',
        headers: { 
          'Content-Type':'application/json',
        },
        body:JSON.stringify({ 
          fileAnimeName:search
        }),
      })
      .then(res => res.json())
      .then(res =>{
        setDocs(res)
        sendInfo(res)
      })
    } catch (err) {
      console.log(err)
    }
  }

  return(
    <div className="bodySearch">
      
      <div className="boxSearch">
      
        <div className="createNewFolder">
          
          <input
            placeholder="Search folder"
            className="inputSearch"
            value={search}
            onChange={e => setSearch(e.target.value)}
            onKeyPress={event => event.key === 'Enter' ? searchFolder() : null}
          />

          <FontAwesomeIcon onClick={()=>searchFolder()} className={search ? "faSearch show" : "faSearch"} icon={faSearch} />

        </div>

        {
          docs.length === 0
            ?
          <h1 className="fontGlobal texto">Pesquise a pasta</h1>
            :
          docs.map((resk, index) => (
            <div className="preView" key={index}>
              <img className="preViewImage" src={resk.urlImage} />
              <button onClick={()=>setNext(true)} className="fontGlobal texto options buttonSearch">Proximo</button>
            </div>
          ))
        }
            
      </div>

    </div>
  )
}