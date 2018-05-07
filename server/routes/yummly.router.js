const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const request = require('request')

/**
 * GET route template
 */
router.post('/getAllRecipes', (req, res) => {
    // Construct unique URL string based on yummly requirements and user inputs
    // Define root URL string to add to (with my unique app id and key)
    let baseUrlString = `http://api.yummly.com/v1/api/recipes?_app_id=4fe75761&_app_key=b467b28b7553146b3589a8eb934349d4`;
    // If a user has added keywords to include in search, store as keywordString and add special characters per Yummly reqs
    let keywordString = '&';
    if (req.body.searchParams.keywords.length) {
      keywordString = req.body.searchParams.keywords + '&'
    };
    // If a user has added specific food items to include in search, store as includedString, change to lower case and add  special characters per Yummly reqs
    let includedString = '';
    if (req.body.searchItems.length) {
      for (let i = 0; i < req.body.searchItems.length; i++){
        includedString =  includedString + 'allowedIngredient[]=' + req.body.searchItems[i].toLowerCase() + '&';
      }
    };
    // If a user has added specific food items to include in search, store as excludedString and add special characters per Yummly reqs
    let excludedString = '';
    if (req.body.searchParams.excludedFoods.length) {
      excludedString = req.body.searchParams.excludedFoods
    }
    // Concatenate all strings to form near-final Yummly query URL
    let preEncodedFinalString = baseUrlString + keywordString + includedString + excludedString + 'requirePictures=true&maxResult=10';
    // URL-encode that string to form our final query URL
    let encodedFinalString = encodeURI(preEncodedFinalString);
    // Send cookie and session data along with axios request

    let options = {method: 'GET', url: encodedFinalString};
    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        res.send(body)
    });
});



/**
 * POST route template
 */
router.post('/getRecipeDetails', (req, res) => {
    // Construct unique URL string based on yummly requirements and unique recipe id of user-selected recipe
    let urlString = `http://api.yummly.com/v1/api/recipe/${req.body.id}?_app_id=4fe75761&_app_key=b467b28b7553146b3589a8eb934349d4`;

    let options = {method: 'GET', url: urlString};
    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        res.send(body)
    });
});

module.exports = router;