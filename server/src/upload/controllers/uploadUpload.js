const mongoose = require('mongoose')

const { cloudinary } = require('../../utils/cloudinary');

const Upload = mongoose.model('Upload')

module.exports = {

    async index(req, res){
        const docs = await Upload.find()
        return res.json(docs)
    },

    async searchFolder(req, res){
        const { fileAnimeName } = req.body

        try{
    
            const anime = await Upload.find({
                nameFolder:{
                    $in:fileAnimeName.split('').map(te => fileAnimeName.trim())
                }
            })
    
            if(anime) return res.json(anime)

        }catch(err){
            return res.json(err)
        }

    },

    async createFolder(req, res){
        const {description, urlImage, folder} = req.body;
        
        try{
            const createFolder = await Upload.create({
                nameFolder:folder,
                description,
                urlImage:(await cloudinary.uploader.upload(urlImage,{
                    upload_preset: 'MyBloguinhoHalloween',
                    resource_type: "video",
                    chunk_size:6000000,
                    folder:`video_upload/${folder}`
                })).url,
            })
    
            return res.json(createFolder)

        }catch(err){
            return res.json(err)
        }

    },

    async uploadVideo(req, res){

        const {linkFolder} = req.params

        const folderLink = await Upload.findById(linkFolder)

        const {episode, description, urlVideo} = req.body;

        try{

            folderLink.videos.push({
                episode,
                description,
                urlVideo:(await cloudinary.uploader.upload(urlVideo,{
                    upload_preset: 'MyBloguinhoHalloween',
                    resource_type: "video",
                    chunk_size:6000000,
                    folder:`video_upload/${folderLink.nameFolder}`
                })).url,
            })

            await folderLink.save()

            return res.json(folderLink)
            
        }catch(err){
            console.log(err)
        }
    }
}