const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {
    console.log('user', req.user, 'authed?', req.isAuthenticated());
    if(req.isAuthenticated()){
        const queryText = 'SELECT * FROM food_items WHERE user_id = $1;';
        pool.query(queryText, [req.user.id]).then((result) => {
            console.log(result.rows);
            res.send(result.rows);
        })
        .catch((error) => {
            res.sendStatus(500);
        });
    }   else {
            res.sendStatus(403);
    }
    });

router.post('/', (req, res) => {
    console.log('user', req.user, 'authed?', req.isAuthenticated());
    if (req.isAuthenticated()) {
        const food = req.body;
        console.log('food:',food);
        const queryText = `INSERT INTO food_items (user_id, name, quantity, category, location, notes, image_url) 
                         VALUES ($1, $2, $3, $4, $5, $6, $7)`
        pool.query(queryText, [req.user.id, food.name, food.quantity, food.category, food.location, food.notes, food.image_url])
        .then((result) => {
            console.log('success posting!');
            res.sendStatus(201);
        }).catch((err) => {
            res.sendStatus(500);
        })
    } else {
        res.sendStatus(403);
    }   
    
})

module.exports = router;