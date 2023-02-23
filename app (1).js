const mongo = require ( "mongodb" ).MongoClient;
const url = "mongodb://localhost:27017/mydb" ;

mongo.connect(url, { useNewUrlParser: true }, (err, db) => {
	if (err) {
		console .log(err);
		process.exit( 0 );
	}

	console .log( "database connected!" );
	db.close();
});

