import React, {useState} from 'react'

import './Upload.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderPlus, faVideo } from '@fortawesome/free-solid-svg-icons'

import PreUpload from '../../../Components/Upload/Upload'

export default function _Upload({getInfo}){

  const [episodio, setEpisodio] = useState('')
  const [descricao, setDescricao] = useState('')

  const [fileInputState, setFileInputState] = useState('');
  const [previewSource, setPreviewSource] = useState('');
  const [selectedFile, setSelectedFile] = useState();


  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
    setSelectedFile(file);
    setFileInputState(e.target.value);
  }

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const handleSubmitFile = (e) => {
    e.preventDefault();
    if(!selectedFile){
      return;
    }else{
      const reader = new FileReader();
      reader.readAsDataURL(selectedFile);
      reader.onloadend = () => {
        uploadImage(reader.result);
      };
      // reader.onerror = () => {
      //   setErrMsg('something went wrong!');
      // };
    }
  };

  const uploadImage = async (base64EncodedImage) => {
    // setgetLoaded(true)
    try {
      await fetch(`http://localhost:5000/7gGRGWhtz7eQjKjeKYLHJys/${getInfo[0]._id}`, {
        method: 'POST',
        headers: { 
          'Content-Type':'application/json',
        },
        body: JSON.stringify({ 
          episode:episodio,
          description:descricao,
          urlVideo:base64EncodedImage,
        }),
      })
      .then(res => res.json())
      .then(res =>{
        setFileInputState('');
        setPreviewSource('');
        setEpisodio('')
        setDescricao('')
      })
    } catch (err) {
      // setErrMsg('Something went wrong!');
    }
  };

  return(
    <div className="bodyUplaod">

      <h1 className="fontGlobal title">{getInfo[0].nameFolder}</h1>
      
        <div className="allPreView">
    
          {
            previewSource
              ?
              <div className="fileUpload">
                <PreUpload urlPreview={previewSource} />
              </div>
              :
            <label for="uploadFile" className="fileUpload">
              <FontAwesomeIcon color="#fff" icon={faVideo} />
            </label>
            
          }

          <div className="addInfoPreview">

            {/* <h1 className="fontGlobal title">Episodio</h1> */}
            <input type="text" className="inputAdd" placeholder="Episodio" value={episodio} onChange={e => setEpisodio(e.target.value)} required/>

            {/* <h1 className="fontGlobal title">Descrição</h1> */}
            <input type="text" className="inputAdd" placeholder="Descrição" value={descricao} onChange={e => setDescricao(e.target.value)} required/>

            <div onClick={handleSubmitFile} className="PreViewButton">
              <h1 className="fontGlobal texto">Publicar</h1>
            </div>

          </div>

        </div>

      <input type="file" id="uploadFile" name="uploadFile" accept="video/mp4" onChange={handleFileInputChange} />

    </div>
  )
}