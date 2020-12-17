const multer = require('multer')
const path = require('path')
// const r = require('../../upload')

const storage = multer.diskStorage({
    destination: function (req, res, cb) {
        cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
        console.log('file');
        // './png'
        console.log(path.extname(file.originalname));
        cb(null, 'img' + '-' + Date.now() + path.extname(file.originalname))
    }
})

const filerFilter = (req, file, cb) => {
    console.log('file.mimetype',file.mimetype);
    if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
        cb(null, true);
    } else {
        cb(null, false);
        return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    }
}

let upload = multer({
    storage: storage,
    fileFilter: filerFilter
})

//categoryImage = key
module.exports = upload.single('categoryImage')