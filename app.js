import { Web5 } from '@web5/api';
import express from 'express';
import bodyParser from 'body-parser';
import validator from 'validator';


const app = express();
app.use(bodyParser.json());

// Sign up
app.post('/signup', async (req, res) => {
    try {
        // Receive req.body
        const { name, age, email, nationality, userType } = req.body;

        // Check if user submitted the required values
        if (!name || ! age || !email || !nationality || !userType) {
            return res.status(400).send({ message: 'Name, age, email, nationality, and Usertype are required' });
        }

        if (userType !== "Client" && userType !== "Service Provider") {
            return res.status(400).send({ message: 'Enter correct usertype' });
        }
        // If usertype is a Client
    if (userType === 'Client') {
            if (age < 18) {
          return res.status(400).send({ message: 'Age cannot be less than 18' });
        }

        // Check if email address is valid
        if (!validator.isEmail(email)) {
            return res.status(400).send({ message: 'Enter valid email address' });
        }
    }

        // If usertype is a service provider
    if (userType === "Service Provider") {
            const serviceText = req.body.serviceText;
            return res.status(200).send({ message: 'Service Provider registration successful', data: { serviceText } });
        }


        // Creating DWN record
        const { newUserRecord } = await web5.dwn.records.create({
            data: {
                name: req.body.name,
                age: req.body.age,
                email: req.body.email,
                nationality: req.body.nationality,
                userType: req.body.userType
            },
            message: {
                dataFormat: 'application/json'
            }   
        });

        // Read value from record
        const newUserData = await newUserRecord.data.json()

        // Generating user DID
        const { web5, did: newUserDid } = await Web5.connect();

        return res.status(200).send({ message: 'Signup successful', newUserDid, data: { user: newUserData } });

    } catch (error) {
        console.log(error);
        return res.status(500).send({ error: 'Internal Server Error' });
    }
});

// LOGIN
app.post('/login', async (req, res) => {
    const { email } = req.body;

    try {
        // Check if email exists
        if (!email ) {
            return res.status(400).send({ message: 'Email is required' });
        }

        return res.status(200).send({ message: 'Login successful', newUserDid });

    } catch (error) {
        console.log(error);
        return res.status(500).send({ message: 'Internal Server Error' });
    }
});

app.listen(3000, async () => {
    console.log('Server is running on port 3000')
});

