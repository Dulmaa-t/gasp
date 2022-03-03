const mongoose = require('mongoose');
const Author = require('./authors')

const PodcastSchema = new mongoose.Schema({
    /** Тухайн podcast гарчиг */
    title: {
        type: String,
        required: true,
    },
    /** Podcast ийн бичлэгний урт ms ээр */
    clock: {
        type: Number,
        required: true
    },
    /** Podcast ийн товч тайлбар */
    text: {
        type: String,
        required: true
    },
    /** Тухайн бичлэгийг бүртгэсэн author */
    author: {
        type: mongoose.Types.ObjectId,
        ref: Author,
        required: true,
    },
    /** Podcast ний thubmnail зурагны холбоос */
    image: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
})

const Podcast = mongoose.model('Podcast', PodcastSchema);

module.exports = Podcast
