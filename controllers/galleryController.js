const express = require('express');
const router = express.Router();
const gallery = require('../models/galleryModel');
const ensureAuthenticated = require('../controllers/authController');

router.post('/gallery', ensureAuthenticated, async (req, res) => {

    const newVideo = new gallery({
        thumbnail: req.body.thumbnail,
        videoURL: req.body.videoURL,
        title: req.body.title,
        description: req.body.description,
        videoTag: req.body.videoTag,
        potw: req.body.potw
    })

    newVideo
        .save()
        .then(() => {
            res.status(201).json({ "Message": "Video Added to Database" })
        })
        .catch(err => {
            res.status(500).json({ "message": 'Error', "error": err })
        });

})

module.exports = router;