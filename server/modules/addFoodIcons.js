
function addFoodIcon(food) {
    switch(food.name) {
        case 'bacon':
            return image_url='../../src/images/bacon.png'
            break;
        default: image_url = undefined;
    }
}

module.exports = addFoodIcon;

