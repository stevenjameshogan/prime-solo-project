import React, { Component } from 'react';

class FreezerItem extends Component {
    render() {
        return (
            <div>
                <div>{this.props.item.name}</div>
            </div>
        )
    }
}

export default FreezerItem;