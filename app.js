const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { request } = require('http');


const app = express();
app.use(bodyParser.json());

// SIGN UP
app.post('/signup', async (req, res) => {
    try {
        // Receive req.body
        const { name, age, email, password, nationality } = req.body;

        // 1. Check if user submitted the required values
        if (!name || ! age || !email || !password || !nationality ) {
            return res.status(400).send({ message: 'Name, age, email, password, and nationality are required' });
        }

        if (age < 18) {
          return res.status(400).send({ message: 'Age cannot be less than 18' });
      }

        // 2. Check if email address is valid
        if (!validator.isEmail(email)) {
            return res.status(400).send({ message: 'Enter valid email address' });
        }
        // 3. Check if password length is not less than 8 characters
        if (password.length < 8) {
            return res.status(400).send({ message: 'Password must be at least 8 characters' });
        }


        // 4. Check if the name already exists in the database
        const existingName = await UserModel.findOne({ name });
        if (existingName) {
            return res.status(400).send({ message: 'Name already in use' });
        }

        // 5. Check if the email already exists in the database
        const existingEmail = await UserModel.findOne({ email });
        if (existingEmail) {
            return res.status(400).send({ message: 'Email already in use' });
        }

        // 6. Hash the password before saving it in the database
        const hashedPassword = await bcrypt.hash(password, 12);

        // 7. Save the user to the database
        const newUser = await UserModel.create({
            name: req.body.name,
            age: req.body.age,
            email: req.body.email,
            password: hashedPassword,
            nationality: request.body.nationality
        });

        // 8. Generate a unique token for the user (JWT token)
        const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN
        });

        return res.status(200).send({ message: 'Signup successful', token, data: { user: newUser } });

    } catch (error) {
        console.log(error);
        return res.status(500).send({ error: 'Internal Server Error' });
    }
});

// LOGIN
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // 1. Check if email and pwd exist
        if (!email || !password) {
            return res.status(400).send({ message: 'Email and password are required' });
        }

        // 2. Check if user exists and pwd is correct
        const user = await UserModel.findOne({ email: email }).select('+password');

        // Compare the provided password with the hashed password stored in the database
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(400).send({ message: 'Incorrect email or password' });
        }

        // 3. If everything is ok, send token back to the client
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN
        });
        return res.status(200).send({ message: 'Login successful', token });

    } catch (error) {
        console.log(error);
        return res.status(500).send({ message: 'Internal Server Error' });
    }
});

// Connect to MongoDB and start the server
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
    })
    .catch(error => console.error('MongoDB connection error:', error));
