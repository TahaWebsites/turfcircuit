const express = require('express');
const router = express.Router();
const Register = require('../models/registerModel'); // Assuming this is your user model


const authenticate = require('../controllers/authController'); 

router.delete('/user/:username', authenticate, async (req, res) => {
  const username = req.params.username;

  try {
    // Ensure the logged-in user is trying to delete their own profile
    if (req.user.username !== username) {
      return res.status(403).json({ message: "Unauthorized to delete this profile." });
    }

    // Attempt to delete the user from the database
    const deletedUser = await Register.findOneAndDelete({ username });
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found." });
    }

    res.status(200).json({ message: "User profile deleted successfully." });
  } catch (error) {
    console.error('Error deleting profile:', error); // Log for server-side debugging
    res.status(500).json({ error: "An error occurred while deleting the profile." });
  }
});

module.exports = router;
