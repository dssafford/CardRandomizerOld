/**
 * Created by Doug on 2/20/16.
 */
var mongoose = require('mongoose');

module.exports = mongoose.model('ShuffledDeck', {
    timestamp: Number,
    cards: Array,
    comments: String
});
