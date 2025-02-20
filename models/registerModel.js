const mongoose = require('mongoose');

const socialSchema = new mongoose.Schema({
    instagram: {
        type: String,
    },
    facebook: {
        type: String,
    }
})

const playersStatsSchema = new mongoose.Schema({
    gamesPlayed: { type: Number, default: 0 },
    card: { type: Number, default: 0 },
    freeKicks: { type: Number, default: 0 },
    penalties: { type: Number, default: 0 },
    goals: { type: Number, default: 0 },
    motmAwards: { type: Number, default: 0 },
    Assists: { type: Number, default: 0 }, 
    wdl: { type: [Number], default: [0, 0, 0] },
    rating: { type: Number, default: 0 }
});


const gamesStatsSchema = new mongoose.Schema({
    passing: { type: Number, default: 10 },
    dribbling: { type: Number, default: 10 },
    shooting: { type: Number, default: 10 },
    defence: { type: Number, default: 10 }
})

const matchHistorySchema = new mongoose.Schema ({
    status: { type: String },
    gameName: { type: String },
    date: { type: Date },
    score: { type: String }
})

const registerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    fullName: { type: String },
    age: { type: Number },
    playerTag: { type:String },
    gender: { type: String },
    preferredPosition: { type: String },
    preferredJerseyNumber: { type: Number },
    favClub: { type: String },
    homeTown: { type: String },
    HeightandWeight: { type: String },
    Socials: socialSchema,
    playerStats: playersStatsSchema,
    gameStats: gamesStatsSchema,
    Achievements: [String],
    matchHistory: [matchHistorySchema]
}, { timestamps: true });


const Register = mongoose.model('register', registerSchema);


module.exports = Register;