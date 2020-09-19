const express = require('express');
const router = express.Router();
const db = require('../data/dbConfig.js');

router.get('/', async (req, res) => {
    try {
        const cars = await db('carSpecs');
        res.json(cars);
    } catch (err) {
        res.status(500).json({ message: 'error retrieving data' });
    }
});

router.post('/', async (req, res) => {
    const car = req.body;
    try {
        await db('carSpecs').insert(car);
        res.status(201).json({ insert: car });
    } catch (err) {
        res.status(500).json({ message: 'error posting record to database', error: err });
    }
});

module.exports = router;