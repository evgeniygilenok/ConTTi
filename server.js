var mongodb = require('mongodb');

var uri = 'mongodb://localhost:27017/contti';
mongodb.MongoClient.connect(uri, function(error, db) {
	if (error) {
		console.log(error);
		process.exit(1);
	}
	db.collection('todos').find().toArray(function(error, docs) {
		if (error) {
			console.log(error);
			process.exit(1);
		}
		console.log('Found docs');
		docs.forEach(function(doc) {
			console.log(JSON.stringify(doc));
		});
		process.exit(0);
	});
});