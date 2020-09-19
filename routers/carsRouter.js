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

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const changes = req.body;
    try {
        const count = await db('carSpecs').update(changes).where({ id });
        if (count) {
            res.json({ update: count });
        } else {
            res.status(404).json({ message: 'invalid id' });
        }
    } catch (err) {
        res.status(500).json({ message: 'error updating record', error: err });
    }
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const count = await db('carSpecs').where({ id }).del();
        if (count) {
            res.json({ deleted: count });
        } else {
            res.status(404).json({ message: 'invalid id' });
        }
    } catch (err) {
        res.status(500).json({ message: 'error deleting record', error: err });
    }
});

module.exports = router;