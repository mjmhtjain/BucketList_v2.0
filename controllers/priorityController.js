const express = require('express');
const app = express();
const priorityModel = require('../models/priority');

app.get('/fetchAll', (req, res) => {
    priorityModel.findAll((err, list) => {
        if (err) {
            res.json({ success: false, message: `Failed to fetch. Error: ${err}` });
        } else {
            res.json({ success: true, message: 'Success', object: list });
        }
    });
});

module.exports = app;