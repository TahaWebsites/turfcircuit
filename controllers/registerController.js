const { Router } = require('express');
const Register = require('../models/registerModel');
const router = Router();
const ensureAuthenticated = require('../controllers/authController');

router.post('/signup', (req, res) => {
    const { name, username, password, fullName, age, gender, preferredPosition, preferredJerseyNumber, favClub, homeTown, heightAndWeight, playerTag } = req.body;

    // Check if the username already exists
    Register.findOne({ 'username': username })
        .then(existingUser => {
            if (existingUser) {
                // If the username already exists, return an error response
                return res.render('resignup', {error : 'Username already exists.'});
            }

            if(req.body.password.length < 8) {
                return res.render('resignup', {error : 'Password must be 8 characters long.'})
            }

            const socialsFormatted = {
                instagram: req.body.instagram,
                facebook: req.body.facebook
            };

            const playersStatsFormatted = {
                gamesPlayed: req.body.gamesPlayed,
                card: req.body.card,
                freeKicks: req.body.freeKicks,
                penalties: req.body.penalties,
                goals: req.body.goals,
                motmAwards: req.body.motmAwards,
                Assists: req.body.Assists,
                wdl: req.body.wdl,
                rating: req.body.rating
            }

            const gameStatsFormatted = {
                passing: req.body.passing,
                dribbling: req.body.dribbling,
                shooting: req.body.shooting,
                defence: req.body.defence
            }

            const matchHistoryFormatted = {
                status: req.body.status,
                gameName: req.body.gameName,
                date: req.body.date,
                score: req.body.score
            };

            // Create a new user if the username doesn't exist
            const newUser = new Register({
                name,
                username,
                password,
                fullName,
                age,
                gender,
                playerTag,
                preferredPosition,
                homeTown,
                preferredJerseyNumber,
                favClub,
                HeightandWeight: heightAndWeight,
                Socials: socialsFormatted,
                playerStats: playersStatsFormatted,
                gameStats: gameStatsFormatted,
                Achievements: req.body.Achievements,
                matchHistory: []
            });

            newUser.matchHistory.push(matchHistoryFormatted)

            // Save the new user to the database
            newUser.save()
                .then(() => {
                    // Successfully saved the user
                    return res.render('resignup', {error: 'User Successfully Registered'});
                })
                .catch(err => {
                    // Log the error to understand what's going wrong
                    return res.render('resignup', {error: 'Error while adding user'});
                });
        })
        .catch(err => {
            // Handle any errors during the username check
            console.error('Error checking username:', err);
            return res.status(500).json({ error: 'Error checking username availability.' });
        });
});

router.post('/updateUser/:username', ensureAuthenticated, async (req, res) => {
    if (!req.user || !req.user.username) {
        throw new Error("User not authenticated.");
    }

    const existingUser = await Register.findOne({ username: req.user.username });

    if (!existingUser) {
        return res.status(404).json({ error: 'User not found' });
    }

    let newPass = "";

    if (req.body.newPassword) {
        if (req.body.oldPassword === existingUser.password) {
            if (req.body.newPassword === req.body.renewPassword) {
                newPass = req.body.newPassword;
            }
            else {
                return res.render('profile', { db: req.user, currentUser: req.user, error: 'Passwords Do Not Match' });
            }
        }
        else {
            return res.render('profile', { db: req.user, currentUser: req.user, error: 'Incorrect Old Password' });
        }
    }

    try {

        const updatedUser = await Register.findOneAndUpdate(
            { username: req.user.username },
            {
                password: newPass || existingUser.password,
                fullName: req.body.fullName || existingUser.fullName,
                playerTag: req.body.playerTag || existingUser.playerTag,
                age: req.body.age || existingUser.age,
                gender: req.body.gender || existingUser.gender,
                preferredPosition: req.body.preferredPosition || existingUser.preferredPosition,
                homeTown: req.body.homeTown || existingUser.homeTown,
                favClub: req.body.favClub || existingUser.favClub,
                preferredJerseyNumber: req.body.preferredJerseyNumber || existingUser.preferredJerseyNumber,
                HeightandWeight: req.body.HeightandWeight || existingUser.HeightandWeight,
                "Socials.instagram": req.body.instagram || existingUser.Socials.instagram,
            },
            { new: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.redirect(`/profile`);
    } catch (err) {
        console.error('Error updating user:', err);
        res.status(500).json({ error: 'Failed to update user' });
    }
});

module.exports = router;
