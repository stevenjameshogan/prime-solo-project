var moment = require('moment');
let pluralize = require('pluralize')

function vegExpDate(food) {
    let date = moment();
    switch(pluralize.singular(food.name.toLowerCase())) {
        case 'asparagus':
            return moment(date, "MM-DD-YYYY").add(10, 'days');
            break;
        default: 
            return moment(date, "MM-DD-YYYY").add(4, 'days')
    }
}

module.exports = vegExpDate;

