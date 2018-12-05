import React from 'react';
import Dropdown from './dropdown'
import ColumnNames from './columnNames'
import Maps from '../mapData/maps'
import RotationItem from './rotationItem'

class RotationMakerApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = { mapsRotation: [] };

        this.handleAddMap = this.handleAddMap.bind(this)
    }

    handleAddMap = (value) => {
        let index = Maps.findIndex(map => {
            return map.layer == value
        })

        let mapRotationArray = this.state.mapsRotation.slice();
        mapRotationArray.push(Maps[index]);
        this.setState({mapsRotation: mapRotationArray})
        setTimeout(() => {
            console.log("state after", this.state)

        }, 500)
    }

    render = () => {

        return (
            <div>
            <h1>Squad Map Rotation Maker</h1>    
            <Dropdown addMap={this.handleAddMap}/> 
            <ColumnNames />
            {this.state.mapsRotation.map((map) => (
                <RotationItem key={map.layer} layer={map} />
            ))}
            </div>
        )
    }
}

export default RotationMakerApp;