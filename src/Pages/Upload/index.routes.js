import React,{useState} from 'react'

import Search from './Search/Search'
import Upload from './Upload/Upload'

export default function _Routes(){

  const [info, setinfo] = useState('')
  const [next, setNext] = useState(false)

  return next === true ? <Upload getInfo={info} /> : <Search setNext={setNext} sendInfo={setinfo} />
  
}