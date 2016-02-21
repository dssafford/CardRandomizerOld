/**
 * Created by Doug on 2/21/16.
 */
var mongoose = require('mongoose');

module.exports = mongoose.model('Scores', {
    userid: Number,
    timestamp: Number,
    masterList: Array,
    answerList: Array,
    scoreList: Array,
    comments: String
});