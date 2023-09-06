db.inventory.find().limit(1);           // this will limit to 1 document only

db.inventory.find().skip(1);            // this will skip 1 document only

db.inventory.find().sort({qty: 1})      // this will sort in increasing order

db.inventory.find().sort({qty: -1})     // this will sort in decreasing order



// Achieveing pagination using MongoDb find and limit
// if we want to do pagination 1 - 10
// no = no.of blogs we want to show
db.blogs.find().skip((pageNo-1)*no).limit(no)

// pageno = 1  -> db.blogs.find().skip(0).limit(8)
// pageno = 2  -> db.blogs.find().skip(8).limit(8)
 