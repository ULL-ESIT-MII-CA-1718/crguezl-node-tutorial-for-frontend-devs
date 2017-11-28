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
printjson(u1);  // { "nInserted" : 1 }
var u2 = db.usercollection.insert({ "username" : "testuser2", "email" : "testuser2@testdomain.com" });
print(u2);     // WriteResult({ "nInserted" : 1 })

/* 
To print all items in a result cursor in mongo shell scripts, use the following idiom:
*/
function printAll(query) {
  var result = [];
	var cursor = db.usercollection.find(query);
	while ( cursor.hasNext() ) {
		 result.push( cursor.next() );
		 printjson( result.slice(-1)[0]);
	}
  return result;
}

print("*********** testuser2 *********");
u2 = printAll({ "username": "testuser2" }).shift();  // the only one in the array
  /* 
    Output: {
      "_id" : ObjectId("5a1d48d42a4d96ec9862cdf7"),
      "username" : "testuser2",
      "email" : "testuser2@testdomain.com"
    }
  */

let newstuff = [
      { "username" : "testuser3", "email" : "testuser3@testdomain.com" }, 
      { "username" : "testuser4", "email" : "testuser4@testdomain.com" }
];
db.usercollection.insert(newstuff);

print("************** All ***************");
// Updates an existing document or inserts a new document, depending on its document parameter.
// If the document contains an _id field, then the save() method is equivalent to an update with the upsert option set to true and the query predicate on the _id field.
db.usercollection.save({"_id": u2._id, "username" : "Juan", "email": "juan@gmail.com" });
printAll({});

