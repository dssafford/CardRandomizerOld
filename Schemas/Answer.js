/**
 * Created by Doug on 2/21/16.
 */
var mongoose = require('mongoose');

module.exports = mongoose.model('Answer', {
    timestamp: Number,
    answers: Array,
    comments: String
});