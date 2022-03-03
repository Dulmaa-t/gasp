const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    /** Тухайн үүсгэгчийн мэдээнд харагдах нэр */
    nickName: {
        type: String,
        required: true
    },
    /** Тухайн үүсгэгчийн цахим хаяг */
    email: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
})

const News = mongoose.model('Author', AuthorSchema);

module.exports = News
