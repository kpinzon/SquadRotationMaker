import React from 'react';
import Dropdown from './dropdown'
import ColumnNames from './columnNames'
import Maps from '../mapData/maps'
import RotationItem from './rotationItem'

class RotationMakerApp extends React.Component {
    state = { mapsRotation: [] };

    //handle adding map to rotation
    handleAddMap = (index) => {

        let mapRotationArray = [...this.state.mapsRotation]
        mapRotationArray.push(Maps[index]);
        this.setState({mapsRotation: mapRotationArray})
        
    }

    render = () => {

        return (
            <div>
            <h1>Squad Map Rotation Maker</h1>    
            <Dropdown addMap={this.handleAddMap}/> 
            <ColumnNames />
            {this.state.mapsRotation.map((map) => (
                <RotationItem key={Date.now} layer={map} />
            ))}
            </div>
        )
    }
}


export default RotationMakerApp;