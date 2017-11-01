import React, { Component } from 'react';
import DragDrop from './Components/DragDrop'

var start = { x: 0, y: 0 };
var end = { x: 0, y: 0 }

const onDrag = (ev) => {
  //console.log(ev.clientY);//ev.target.getClientRects()[0].top
  start.x = ev.clientX;
  start.y = ev.clientY;
}

const onDrop = (ev) => {
  //console.log(ev.clientX);
  end.x = ev.clientX;
  end.y = ev.clientY;
  drawLine(start, end);
}

function drawLine(start, end) {
  var path = `M ${start.x} ${start.y} L ${end.x} ${end.y}`;
  var svg = document.getElementsByTagName('svg')[0]; //Get svg element
  var newElement = document.createElementNS("http://www.w3.org/2000/svg", 'path'); //Create a path in SVG's namespace
  newElement.setAttribute(`d`, path); //Set path's data
  newElement.style.stroke = "#000"; //Set stroke colour
  newElement.style.strokeWidth = "5px"; //Set stroke width
  svg.appendChild(newElement);
}

class App extends Component {
  render() {
    return (
      <div>
        <DragDrop onDrag={onDrag} onDrop={onDrop}>
          <div>A</div>
        </DragDrop>
        <DragDrop onDrag={onDrag} onDrop={onDrop}>
          <div>B</div>
        </DragDrop>
        <br />
        <svg width="100vw" height="100vh" style={{ position: "absolute", top: 0, zIndex: -1 }}>
        </svg>
        <DragDrop onDrag={onDrag} onDrop={onDrop}>
          <div>B</div>
        </DragDrop>
      </div>
    )
  }
}

export default App;
