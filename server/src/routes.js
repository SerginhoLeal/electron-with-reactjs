const express = require('express');
const routes = express.Router();

// const UsuarioController = require('./users/controllers');
// const RoonsControllers = require('./Rooms/controllers');
// const FolderControllers = require('./upload/controllers/createFolder');
const VideoControllers = require('./upload/controllers/uploadUpload');

// routes.get('/PwYlN8StfLi85cbsOs9z', UsuarioController.index);
// routes.post('/PwbsOs9YtfLi85clN8Sz', UsuarioController.login);
// routes.post('/NRBQlog6f2Pwnqe3adQJ', UsuarioController.store);
// routes.get('/F33CSZ9TCQypzU5GrmrYU', UsuarioController.viewPostSave);
// routes.post('/pzNe5Ztxr5psdnb7CKcD/:idPost',UsuarioController.savePosts)
// routes.put('/se2Y4bkhAHMxPLRX/:id',UsuarioController.update)

// routes.get('/GdXLWUFQwwAm927q', RoonsControllers.renderMyRoom);
// routes.get('/N8StfLisOs9z85cbPwYl/:idChat', RoonsControllers.index);
// routes.post('/C7Ypo2iFU0OTT7RrH1TR/:alvo', RoonsControllers.create);
// routes.post('/85cbPN8StflLisOs9zwY/:idChat', RoonsControllers.sendMsg);

// routes.get('/n4Re6jWc7gRxp8pqVQm93nU', FolderControllers.index);
// routes.get('/HRHmex8mcf2nV5KWpNAHpa6/:idPost', ImageControllers.renderizationComments);
// routes.post('/P4bHhJkbCPVN9g2Y4EYMMwf/:idPost', ImageControllers.comments);

routes.get('/qHRjF787trq3NU8QhRqbQrv', VideoControllers.index);
routes.post('/F2gAqRAutddCEHMQ92TVuCk', VideoControllers.searchFolder);
routes.post('/7gGRGWhtz7eQjKjeKYLHJys/:linkFolder', VideoControllers.uploadVideo);
routes.post('/mKycCxFk2xQJ9xTCg9eF6Wj', VideoControllers.createFolder);

module.exports = routes;