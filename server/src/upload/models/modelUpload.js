const { Schema, model } = require('mongoose');
// const bcrypt = require('bcryptjs');

const UploadSchema = new Schema({
    nameFolder:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    urlImage:{
        type:String,
        required:true,
    },
    videos:[{
        episode:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true,
        },
        urlVideo:{
            type:String,
            required:true,
        },
    }]
},{
    timestamps: true,
});

module.exports = model('Upload', UploadSchema);