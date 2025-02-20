const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema({
    thumbnail: { type: String },
    videoURL: { type: String },
    title: { type: String },
    description: { type: String },
    videoTag: { type: String, lowercase: true },
    potw: { type: Boolean }
}, { timestamps: true });

const gallery = new mongoose.model('gallery', gallerySchema);

module.exports = gallery;