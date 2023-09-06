db.inventory.insertOne({
    name : "Joyjeet",
    age : "21",
    branch : "CSE",
    course : "C++ Stl"
})

db.inventory.insertMany(
[{
    name : "Hemant",
    age : "19",
    branch : "CSE",
    course : "C++ Stl"
},
{
    name : "Sam",
    age : "21",
    branch : "CSE new",
    course : "C++ Stl"
},
{
    name : "Ramesh",
    age : "21",
    branch : "CSE old",
    course : "C++ Stl"
}
])