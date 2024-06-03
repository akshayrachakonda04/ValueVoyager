const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const url = process.env.MONGO_URL || 'mongodb+srv://2211cs010490:2211cs010490@cluster0.ri5dkxp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const dbName = process.env.DB_NAME || 'ValueVoyager';
const port = process.env.PORT || 3000;
const jwtSecret = process.env.JWT_SECRET || 'your_jwt_secret_here';

let db;

const initializeDBAndServer = async () => {
  try {
    const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    console.log('Connected to MongoDB');

    db = client.db(dbName);

    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}/`);
    });
  } catch (e) {
    console.error(`DB Error: ${e.message}`);
    process.exit(1);
  }
};

initializeDBAndServer();

app.get("/", (req, res) => {
  res.send("Hello Backend");
});

app.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  const userCollection = db.collection('register');
  const dbUser = await userCollection.findOne({ email });

  if (!dbUser) {
    const hashedPassword = await bcrypt.hash(password, 10);
    await userCollection.insertOne({
      username,
      email,
      password: hashedPassword
    });
    res.send({ display_msg: "Successfully Registered" });
  } else {
    res.status(400).send({ display_msg: "User already exists" });
  }
});

app.get("/register", async (req, res) => {
  const userCollection = db.collection('register');
  const users = await userCollection.find({}).toArray();
  res.send(users);
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const userCollection = db.collection('register');
    const dbUser = await userCollection.findOne({ email });

    if (!dbUser) {
      res.status(400).send({ display_msg: "Not Registered User" });
    } else {
      const isPasswordMatched = await bcrypt.compare(password, dbUser.password);
      if (isPasswordMatched) {
        const payload = { email };
        const jwtToken = jwt.sign(payload, jwtSecret);
        res.send({ jwtToken, display_msg: "Logged In Successfully" });
      } else {
        res.status(400).send({ display_msg: "Incorrect Password" });
      }
    }
  } catch (error) {
    console.error("Error processing login request:", error);
    res.status(500).send("Backend Error");
  }
});
