var moment = require('moment');

function addExpDate(food) {
    let date = moment();
    console.log(date);
    switch(food.category) {
        case 'Meat':
            return moment(date, "MM-DD-YYYY").add(5, 'days');
            break;
        default: 
            return moment(date, "MM-DD-YYYY").add(20, 'days')
    }
}

module.exports = addExpDate;

