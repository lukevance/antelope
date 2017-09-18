const { MongoClient } = require('mongodb');

const MONGO_URL = 'mongodb://localhost:27017/antelope';

module.exports = async() => {
    const db = await MongoClient.connect(MONGO_URL);
    return {
        Events: db.collection('events'),
        Users: db.collection('users'),
        Categories: db.collection('categories'),
	Tags: db.collection('tags')
    };

};
