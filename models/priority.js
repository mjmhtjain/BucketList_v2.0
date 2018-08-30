//Require mongoose package
const mongoose = require('mongoose');

// const PrioritySchema = mongoose.Schema({
//     level: {
//         type: String,
//         required: true,
//         enum: ['High', 'Medium', 'Low']
//     }
// });

const PrioritySchema = mongoose.Schema({
    level: {
        type: String,
        required: true,
        enum: ['High', 'Medium', 'Low']
    }
}, {collection : 'priorities'});

const priorityList = mongoose.model('priorities', PrioritySchema);

module.exports.priorityList = priorityList;

module.exports.findAll = (callback) => {
    priorityList.find(callback);
}