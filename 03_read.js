// db.inventory.find()      -  Fetch all documents
db.inventory.find({
    age:"21"
})

db.inventory.find( { status: { $in: [ "A", "D" ] } } )


// AND operator
db.inventory.find( { status: "A", qty: { $lt: 30 } } )

// OR operator
db.inventory.find( { $or: [ { status: "A" }, { qty: { $lt: 30 } } ] } )

// findOne
db.inventory.findOne( { status: { $in: [ "A", "D" ] } } )
// Pulled as a document not as an array


db.inventory.insertMany([
    { 
        item : "journal",
        qty : 25, 
        size : { 
            h: 14, 
            w: 21, 
            uom: "cm",
        }, 
        status : "A",
    },
    { 
        item : "notebook",
        qty : 50, 
        size : { 
            h: 8.5, 
            w: 11, 
            uom: "in",
        }, 
        status : "A",
    },
    { 
        item : "paper", 
        qty : 100, 
        size : { 
            h: 8.5, 
            w: 11, 
            uom: "in", 
        }, 
        status : "D",
    },
    { 
        item : "planner", 
        qty : 75, 
        size : { 
            h: 22.85, 
            w: 30, 
            uom: "cm",
        }, 
        status : "D",
    },
    { 
        item : "postcard", 
        qty : 45, 
        size : { 
            h: 10, 
            w: 15.25, 
            uom: "cm",
        }, 
        status : "A",
    }
])