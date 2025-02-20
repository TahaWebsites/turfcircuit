const { Router } = require("express");
const Queue = require('../models/queueModel');
const gallery = require('../models/galleryModel');
const users = require('../models/registerModel');
const router = Router();
const mongoose = require('mongoose');
const ensureAuthenticated = require('../controllers/authController');
const Visit = require('../models/Visit');
const dotenv = require('dotenv');

dotenv.config();

router.get('/', async (req, res) => {
    try {
        const dBase = await Queue.find().lean();
        const gallerydb = await gallery.find();
        res.render('reindex', { db: dBase, galleryDB: gallerydb, currentUser: req.user });
    }
    catch (err) {
        console.log(err);
        res.json(err);
    }
})

router.get('/login', (req, res) => {
    res.render('relogin', {error: ''});
})

router.get('/signup', (req, res) => {
    res.render('resignup', {error: ''})
})

router.get('/index', async (req, res) => {
    try {
        const dBase = await Queue.find().lean();
        const gallerydb = await gallery.find();
        res.render('reindex', { db: dBase, galleryDB: gallerydb, currentUser: req.user });
    }
    catch (err) {
        console.log(err);
        res.json(err);
    }
})

router.get('/queue', async (req, res) => {
    try {
        const queueDatabase = await Queue.find();
        const apikey = process.env.keyId;
        res.render('queue', { db: queueDatabase, currentUser: req.user, apikey: apikey, error: '' });
    } catch (err) {
        console.log(err);
    }
})

router.get('/gallery', async (req, res) => {
    try {
        const galleryDatabase = await gallery.find();
        res.render('gallery', { db: galleryDatabase, currentUser: req.user });
        console.log(galleryDatabase)
    }
    catch (err) {
        console.log(err);
    }
})

router.get('/aboutus', async (req, res) => {
    // Find or create a document to store visit count
    let visit = await Visit.findOne();  // Get the first document (assuming only one)
    if (!visit) {
        visit = new Visit();  // If no document exists, create one
        await visit.save();
    }

    // Increment the visit count
    visit.count += 1;
    await visit.save();  // Save the updated count

    const currentUser = req.user;  // Assuming user data is in session
    const matchCount = await Queue.countDocuments();
    const userCount = await users.countDocuments();
    res.render('reaboutUs', { currentUser: currentUser, visitors: visit.count, usersCount: userCount, matchCount: matchCount });
});



router.get('/contactUs', (req, res) => {
    const currentUser = req.user;
    res.render('recontactus', { currentUser: currentUser });
})

router.get('/profile',ensureAuthenticated, (req, res) => {
    res.render('profile', { db: req.user, currentUser: req.user, error: '' });
});


router.get('/players', async (req, res) => {
    const currentUser = req.user;
    const allUsers = await users.find();
    res.render('users', { currentUser: currentUser, db: allUsers, currentUser: req.user })
})

router.get('/players/:username', ensureAuthenticated, async (req, res) => {
    try {
        const username = req.params.username;
        const profile = await users.findOne({ name: username });
        if (!profile) {
            return res.status(404).send("User not found");
        }
        res.render('foundProfile', { db: profile, currentUser: req.user });
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});


module.exports = router;