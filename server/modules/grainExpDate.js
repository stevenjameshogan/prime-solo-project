var moment = require('moment');
let pluralize = require('pluralize')

function grainExpDate(food) {
    let date = moment();
    switch(pluralize.singular(food.name.toLowerCase())) {
        case 'flour':
            return moment(date, "MM-DD-YYYY").add(365, 'days');
            break;
        case 'white rice':
            return moment(date, "MM-DD-YYYY").add(700, 'days');
            break;
        case 'rice':
            return moment(date, "MM-DD-YYYY").add(700, 'days');
            break;
        case 'brown rice':
            return moment(date, "MM-DD-YYYY").add(180, 'days');
            break;
        case 'cereal':
            return moment(date, "MM-DD-YYYY").add(365, 'days');
            break;
        case 'pasta':
            return moment(date, "MM-DD-YYYY").add(365, 'days');
            break;
        case 'bread':
            if (food.location === 'Fridge'){
                return moment(date, "MM-DD-YYYY").add(21, 'days');
            }
            if (food.location === 'Freezer'){
                return moment(date, "MM-DD-YYYY").add(60, 'days');
            }
            return moment(date, "MM-DD-YYYY").add(7, 'days');
            break;
        default: 
            return moment(date, "MM-DD-YYYY").add(60, 'days');
    }
}


module.exports = grainExpDate;

