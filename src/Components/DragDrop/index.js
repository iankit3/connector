import React, { Component } from 'react';

class DragDrop extends Component {
    render() {
        return (
            <div className="component" draggable 
                onDragStart={this.props.onDrag} 
                onDragOver={(ev) => ev.preventDefault()}
                onDrop={this.props.onDrop}>
              {this.props.children}  
            </div>
        );
    }
}

export default DragDrop;