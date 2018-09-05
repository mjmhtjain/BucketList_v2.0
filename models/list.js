//Require mongoose package
const mongoose = require('mongoose');

//Define BucketlistSchema with title, description and category
const BucketlistSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    category: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
});

const BucketList = module.exports = mongoose.model('BucketList', BucketlistSchema);

//BucketList.find() returns all the lists
module.exports.getAllLists = (callback) => {
    BucketList.find(callback);
}

//newList.save is used to insert the document into MongoDB
module.exports.addList = (newList) => {
    return newList.save();
}

//Here we need to pass an id parameter to BUcketList.remove
module.exports.deleteListById = (id, callback) => {
    let query = { _id: id };
    BucketList.remove(query, callback);
}

var fetchBucketList = function () {
    return BucketList.aggregate([
        {
            $lookup: {
                from: "priorities",
                localField: "category",
                foreignField: "_id",
                as: "category_priorities"
            }
        }
    ]);
}

module.exports.fetchBucketList = fetchBucketList;

var fetchBucketListById = function (bucketId) {
    return BucketList.aggregate([
        { $match: { _id: bucketId } },
        {
            $lookup: {
                from: "priorities",
                localField: "category",
                foreignField: "_id",
                as: "category_priorities"
            }
        }
    ]);
}

module.exports.fetchBucketListById = fetchBucketListById;