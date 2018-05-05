var moment = require('moment');

function addExpDate(food) {
    let date = moment();
    console.log(date);
    let exp_date = moment(date, "MM-DD-YYYY").add(5, 'days')
    console.log(exp_date);
    // let difference = moment([2018, 5, 7]).fromNow(true);
    let difference = date.to(exp_date) 
    console.log(difference);
    
    
    switch(food.category) {
        case 'Meat':
            return moment(date, "MM-DD-YYYY").add(5, 'days');
            break;
        default: 
            return moment(date, "MM-DD-YYYY").add(20, 'days')
    }
}

module.exports = addExpDate;

