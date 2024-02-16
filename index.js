import express from "express";
// creating an instance of express
const server = express();

// middleware
server.use(express.json());

const MyDemoDB = [
  {
    name: "Xyz",
    age: 12,
    class: "6th",
  },
  {
    name: "ABC",
    age: 12,
    class: "6th",
  },
  {
    name: "PQR",
    age: 12,
    class: "6th",
  },
  {
    name: "MNO",
    age: 12,
    class: "6th",
  },
];

// all student
server.get("/all-student", (req, res) => {
  res.send(MyDemoDB);
});

// API End points
// Data of a single Student
server.get("/get-data/:name", (req, res) => {
  const name = req.params.name.toLowerCase();

  for (let i = 0; i < MyDemoDB.length; i++) {
    if (MyDemoDB[i].name.toLowerCase() === name) {
      return res.send(MyDemoDB[i]);
    }
  }
  return res.send("student Data Not Found!");
});

// POST Request
// ADD new student
server.post("/add-student", (req, res) => {
  // Getting data in request body
  const { name, age, class1 } = req.body;

  // store in DB
  MyDemoDB.push({
    name: name,
    age: age,
    class: class1,
  });

  res.send("Data Inserted Successfully.");
});

// UPDATE (PUT, PATCH)

// DELETE

// Listening the API
server.listen("8080", () => {
  console.log("Server is running on the PORT 8080.");
});
