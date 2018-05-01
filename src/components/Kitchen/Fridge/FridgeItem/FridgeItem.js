import React, { Component } from 'react';

class FridgeItem extends Component {
    render() {
        return (
            <div>
                <div>{this.props.item.name}</div>
            </div>
        )
    }
}

export default FridgeItem;