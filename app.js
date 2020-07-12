const mongo = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";

mongo.connect(
  url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) {
      console.log(err);
      return;
    }
  }
);

const db = client.db("kennel");
const collection = db.collection("dogs");

collection.insertOne({ name: "Roger" }, (err, result) => {});

collection.insertMany([{ name: "Tom" }, { name: "Chop" }], (err, result) => {});

collection.find().toArray((err, items) => {
  console.log(items);
});

collection.find({ name: "Tom" }).toArray((err, items) => {
  console.log(items);
});

collection.findOne({ name: "Chop" }, (err, item) => {
  console.log(item);
});

collection.updateOne(
  { name: "Tom" },
  { $set: { name: "Ajay" } },
  (err, item) => {
    console.log(item);
  }
);

collection.deleteOne({ name: "Chop" }, (err, item) => {
  console.log(item);
});

client.close();
