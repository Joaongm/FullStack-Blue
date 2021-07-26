const mongoose, { Schema, Model } = require('mongoose');

const publicationSchema = new Schema({
    author: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
});

module.exports = Model('publication', publicationSchema);