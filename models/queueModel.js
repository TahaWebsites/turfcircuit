const { default: mongoose } = require("mongoose");

const reservedPlayers = new mongoose.Schema({
    playerName: {
        type: String,
    },
    playerContact: {
        type: String,
    }
}, { timestamps: true })

const queueSchema = new mongoose.Schema({
    groundName: {
        type: String,
        required: true,
    },
    groundLocation: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    PlayersLen: {
        type: Number,
        required: true,
    },
    Date: {
        type: Date,
        required: true,
    },
    gameType: {
        type: String,
        required: true,
        lowercase: true,
    },
    playersJoined: [reservedPlayers],
}, { timestamps: true, });

const Queue = mongoose.model("Queue", queueSchema);

module.exports = Queue;
