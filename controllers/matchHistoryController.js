const { Router } = require('express');
const Register = require('../models/registerModel');
const router = Router();
const mongoose = require('mongoose');
const ensureAuthenticated = require('../controllers/authController');

router.post('/update/:username/matchHistory', ensureAuthenticated, async (req, res) => {
    const matchHistoryObject = {
        status: req.body.status,
        gameName: req.body.gameName,
        date: req.body.date,
        score: req.body.score
    };

    const username = req.params.username;

    try {
        const updatedUser = await Register.findOneAndUpdate(
            { username }, // Find the user by username
            { $push: { matchHistory: matchHistoryObject } }, // Push the new match history object into the array
            { new: true } // Return the updated document
        );

        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ message: 'Match history updated successfully', user: updatedUser });
    } catch (err) {
        console.error('Error updating match history:', err);
        res.status(500).json({ message: 'Internal server error', error: err.message });
    }
});

module.exports = router;