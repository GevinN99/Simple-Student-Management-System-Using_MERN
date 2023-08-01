const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
const multer = require("multer");
require("dotenv").config();

/* Configs */
app.use(cors());
app.use(bodyParser.json());

/* ROUTES */
const studentRouter = require ("./routes/students");
app.use("/student", studentRouter);

/* Create a storage engine to define where and how to store the uploaded images */
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/profile-images"); // Specify the folder where uploaded files will be saved
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, file.fieldname + "-" + uniqueSuffix + "-" + file.originalname); // Rename the file with a unique name
    },
});

// Initialize multer with the storage engine
const upload = multer({ storage });

// Routes for image upload
app.post("/upload-profile-image", upload.single("profileImage"), (req, res) => {
    res.json({ message: "File uploaded successfully." });

    if (!req.file) {
        return res.status(400).json({ message: "No image file provided" });
    }

    /* Access the file details from req.file object */
    const { filename, path, mimetype } = req.file;

    // Save this information to database along with the user's profile
    // For example:
    // User.updateOne({ _id: userId }, { profileImage: filename }, (err, result) => {
    //   if (err) {
    //     return res.status(500).json({ message: "Failed to update profile image" });
    //   }
    //   res.status(200).json({ message: "Profile image updated successfully" });
    // });
});

/* Mongoose Setup */
const PORT = process.env.PORT || 8070;
const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Mongodb Connection Success!");
});

app.listen(PORT, () => {
    console.log(`Server is up and running on port number : ${PORT}`);
});