import React, { Component } from 'react';

class PantryItem extends Component {
    render() {
        return (
            <div>
                <div>{this.props.item.name}</div>
            </div>
        )
    }
}

export default PantryItem;