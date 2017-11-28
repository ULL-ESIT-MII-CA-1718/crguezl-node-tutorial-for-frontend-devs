// Script to stop the mongod server
var conn = new Mongo();
// use notdetest1
var db = conn.getDB("nodetest1");
/*
You can use db.getSiblingDB() as an alternative to the use <database> helper. This is particularly useful when writing scripts using the mongo shell where the use helper is not available
*/
db = db.getSiblingDB('nodetest1'); 

db.usercollection.deleteMany({}); // delete all

var u1 = db.usercollection.insert({ "username" : "testuser1", "email" : "testuser1@testdomain.com" });
printjson(u1);
var u2 = db.usercollection.insert({ "username" : "testuser2", "email" : "testuser2@testdomain.com" });
print(u2);

/* 
To print all items in a result cursor in mongo shell scripts, use the following idiom:
*/
function printAll() {
	var cursor = db.usercollection.find();
	while ( cursor.hasNext() ) {
		 printjson( cursor.next() );
	}
}

db.names.save({"username" : "Juan" });
printAll();
