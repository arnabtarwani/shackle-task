require('dotenv').config()
const express = require('express');
const Contact = require('../models/contact.model');
const fetch = require('node-fetch');
const router = express.Router();

router.post('/', (req, res) => {
    res.json({
        message: 'Welcome to Explore Shacklen API!',
    });
});

router.post('/contact', async (req, res, next) => {
    try {
        const _firstName = req.body.firstName;
        const _lastName = req.body.lastName;
        const _email = req.body.email;
        const _subject = req.body.subject;

        const contact = new Contact({ firstName: _firstName, lastName: _lastName, email: _email, subject: _subject });

        await contact.save((err) => {
            if (err) {
                res.status(500).json({
                    error: err
                });
                next(err);
                return;
            } else {
                res.json({
                    message: "Your message has been successfully sent to us!"
                })
            }
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: error
        })
    }
});

router.get('/interests', async (req, res) => {
    try {
        const headers = {
            "x-api-key": process.env.SHACKLE_API_KEY
        };


        const response = await fetch(`${process.env.SHACKLE_API_URL}/interests`, {
            headers
        });

        const data = await response.json();

        if (data.errors && data.errors.length > 0) {
            return res.status(404).json({
                message: "data not found"
            })
        };

        res.json(data);

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: { "Server Error": error }
        })
    }

})

module.exports = router;

