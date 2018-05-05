var moment = require('moment');
let pluralize = require('pluralize')

function dairyExpDate(food) {
    let date = moment();
    switch(pluralize.singular(food.name.toLowerCase())) {

        case 'milk':
            if (food.location === 'Fridge'){
                return moment(date, "MM-DD-YYYY").add(14, 'days');
            }
            if (food.location === 'Freezer'){
                return moment(date, "MM-DD-YYYY").add(30, 'days');
            }
            return moment(date, "MM-DD-YYYY").add(0, 'days');
            break;
        case 'cream':
            if (food.location === 'Fridge'){
                return moment(date, "MM-DD-YYYY").add(14, 'days');
            }
            if (food.location === 'Freezer'){
                return moment(date, "MM-DD-YYYY").add(30, 'days');
            }
            return moment(date, "MM-DD-YYYY").add(0, 'days');
            break;
        case 'cheese':
            if (food.location === 'Fridge'){
                return moment(date, "MM-DD-YYYY").add(30, 'days');
            }
            if (food.location === 'Freezer'){
                return moment(date, "MM-DD-YYYY").add(180, 'days');
            }
            return moment(date, "MM-DD-YYYY").add(0, 'days');
            break;
        case 'butter':
            if (food.location === 'Fridge'){
                return moment(date, "MM-DD-YYYY").add(14, 'days');
            }
            if (food.location === 'Freezer'){
                return moment(date, "MM-DD-YYYY").add(365, 'days');
            }
            return moment(date, "MM-DD-YYYY").add(0, 'days');
            break;
        case 'sour cream':
            if (food.location === 'Fridge'){
                return moment(date, "MM-DD-YYYY").add(14, 'days');
            }
            if (food.location === 'Freezer'){
                return moment(date, "MM-DD-YYYY").add(14, 'days');
            }
            return moment(date, "MM-DD-YYYY").add(0, 'days');
        case 'cream cheese':
            if (food.location === 'Fridge'){
                return moment(date, "MM-DD-YYYY").add(14, 'days');
            }
            if (food.location === 'Freezer'){
                return moment(date, "MM-DD-YYYY").add(14, 'days');
            }
            return moment(date, "MM-DD-YYYY").add(0, 'days');
            break;
        case 'yogurt':
            if (food.location === 'Fridge'){
                return moment(date, "MM-DD-YYYY").add(30, 'days');
            }
            if (food.location === 'Freezer'){
                return moment(date, "MM-DD-YYYY").add(30, 'days');
            }
            return moment(date, "MM-DD-YYYY").add(0, 'days');
            break;
        default: 
            return moment(date, "MM-DD-YYYY").add(60, 'days');
    }
}


module.exports = dairyExpDate;

