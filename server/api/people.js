const express = require("express");
const { ObjectId } = require("mongodb");
const mongoDB = require("../database/db");

const router = express.Router();
const getPeople = () => mongoDB.getCollection("people");

// @route GET api/people/test
// @description tests people route
// @access Public
router.get("/test", (req, res) => res.send("Person route testing!"));

// @route GET api/people
// @description Get all people
// @access Public
router.get("/", (req, res) => {
  getPeople()
    .find({})
    .toArray()
    .then((people) => res.json(people))
    .catch((err) => res.status(404).json({ nousersfound: "No People found" }));
});

// @route GET api/people/:id
// @description Get single Person by id
// @access Public
router.get("/:id", (req, res) => {
  getPeople()
    .findOne({ _id: ObjectId(req.params.id) })
    .then((person) => res.json(person))
    .catch((err) => res.status(404).json({ nouserfound: "No Person found" }));
});

// @route POST api/people
// @description add/save Person
// @access Public
router.post("/", (req, res) => {
  getPeople()
    .insertOne(req.body)
    .then((person) => res.json({ msg: "Person added successfully" }))
    .catch((err) =>
      res.status(400).json({ error: "Unable to add this Person" })
    );
});

// @route PUT api/people/:id
// @description Update Person
// @access Public
router.put("/:id", (req, res) => {
  getPeople()
    .updateOne({ _id: ObjectId(req.params.id) }, req.body)
    .then((person) => res.json({ msg: "Updated successfully" }))
    .catch((err) =>
      res.status(400).json({ error: "Unable to update this Person" })
    );
});

// @route GET api/people/:id
// @description Delete Person by id
// @access Public
router.delete("/:id", (req, res) => {
  getPeople()
    .deleteOne({ _id: ObjectId(req.params.id) })
    .then((person) => res.json({ mgs: "Person entry deleted successfully" }))
    .catch((err) => res.status(404).json({ error: "Unable to delete this Person" }));
});

module.exports = router;
