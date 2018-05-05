let moment = require('moment');
let vegExpDate = require('./vegExpDate')
let fruitExpDate = require('./fruitExpDate')
let meatExpDate = require('./meatExpDate')
let grainExpDate = require('./grainExpDate')


function addExpDate(food) {
    switch(food.category) {
        case 'Vegetables':
            return vegExpDate(food);
            break;
        case 'Fruits':
            return fruitExpDate(food);
            break;
        case 'Meat/Seafood':
            return meatExpDate(food);
            break;
        case 'Grains':
            return grainExpDate(food);
            break;
        case 'Dairy':
            return moment(date, "MM-DD-YYYY").add(10, 'days');
            break;
        case 'Sugars':
            return moment(date, "MM-DD-YYYY").add(10, 'days');
            break;
        default: 
            return moment(date, "MM-DD-YYYY").add(7, 'days')
    }
}

module.exports = addExpDate;

