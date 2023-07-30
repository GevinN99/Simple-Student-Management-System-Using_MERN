const router = require("express").Router();
const Student = require("../models/Student");

router.route("/add").post(async (req, res) => {
    try {
        const { name, age, gender } = req.body;

        const newStudent = new Student({
            name,
            age: Number(age),
            gender
        });

        await newStudent.save();
        res.status(200).json({ status: "success", message: "Student Added." });
    } catch (err) {
        console.log(err);
        res.status(500).json({ status: "error", message: "Error with saving data" });
    }
});

router.route("/").get(async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (err) {
        console.log(err);
        res.status(500).send({status: "Error with fetching data"});
    }
});

router.route("/update/:id").put(async (req, res) => {
    try {
        let userId = req.params.id;
        const {name, age, gender} = req.body;

        const updateStudent = {
            name,
            age,
            gender
        };

        const update = await Student.findByIdAndUpdate(userId, updateStudent);
        res.status(200).send({status: "User Updated"});
    } catch (err) {
        console.log(err);
        res.status(500).send({status: "Error with updating data"});
    }
});

router.route("/delete/:id").delete(async (req, res) => {
    try {
        let userId = req.params.id;

        await Student.findByIdAndDelete(userId);

        res.status(200).send({status: "User Deleted"});
    } catch (err) {
        console.log(err.message);
        res.status(500).send({status: "Error with Deleting data", error: err.message});
    }
});

router.route("/get/:id").get(async (req, res) => {
    try {
        let userId = req.params.id;
        const user = await Student.findById(userId);

        res.status(200).send({status: "User Fetched", user: user});
    } catch (err) {
        console.log(err.message);
        res.status(500).send({status: "Error with Fetching data", error: err.message});
    }
});

router.route("/count").get(async (req, res) => {
    try {
        const count = await Student.countDocuments();
        res.status(200).send({status: "Successfully Counted", count: count});
    } catch (err) {
        console.log(err.message);
        res.status(500).send({status: "Error with Counting Data", error: err.message});
    }
});



module.exports = router;
