import React from 'react';
import Dropdown from './dropdown'
import ColumnNames from './columnNames'
import Maps from '../mapData/maps'
import RotationItem from './rotationItem'
import { Row, Col } from 'antd';
import LayerTable from "./layerTable";
import { Button } from 'antd';
import 'antd/dist/antd.css';

class RotationMakerApp extends React.Component {
    state = { mapsRotation: [] };

    //handle adding map to rotation
    handleAddMap = (index) => {
        
        let mapRotationArray = [...this.state.mapsRotation];
        mapRotationArray.push({...Maps[index]});
        let length = mapRotationArray.length;
        mapRotationArray[length - 1].key = Date.now();
        console.log(mapRotationArray)
        //maprotationlogic
        this.checkLayersForIssues(mapRotationArray);
        this.setState({ mapsRotation: mapRotationArray })

    }

    handleMoveLayerUpInArray = (index) => {
        const mapRotationArray = [...this.state.mapsRotation]

        if (index > 0) {
            let movedArray = this.moveItemInArrayFromIndexToIndex(mapRotationArray, index, index - 1);
            this.checkLayersForIssues(movedArray);
            this.setState({ mapsRotation: movedArray })
        }
    }

    handleMoveLayerDownInArray = (index) => {
        const mapRotationArray = [...this.state.mapsRotation]

        if (index < mapRotationArray.length - 1) {
            let movedArray = this.moveItemInArrayFromIndexToIndex(mapRotationArray, index, index + 1);
            this.checkLayersForIssues(movedArray);
            this.setState({ mapsRotation: movedArray })
        }
    }

    handleRemoveLayerInArray = (index) => {
        const mapRotationArray = [...this.state.mapsRotation]
        mapRotationArray.splice(index, 1);
        this.checkLayersForIssues(mapRotationArray);
        this.setState({ mapsRotation: mapRotationArray })

    }

    moveItemInArrayFromIndexToIndex = (array, fromIndex, toIndex) => {
        if (fromIndex === toIndex) return array;

        const newArray = [...array];

        const target = newArray[fromIndex];
        const inc = toIndex < fromIndex ? -1 : 1;

        for (let i = fromIndex; i !== toIndex; i += inc) {
            newArray[i] = newArray[i + inc];
        }

        newArray[toIndex] = target;

        return newArray;
    };

    checkLayersForIssues = (layers) => {
        let mapRotationLength = layers.length;
        if (mapRotationLength === 1) {
            delete layers[0].warningMessage;
        }

        else if (mapRotationLength > 1) {
            layers.map((layer, index) => {
                if (index === 0) {
                    if (layer.team1 === layers[mapRotationLength - 1].team2 || layer.team2 === layers[mapRotationLength - 1].team1) {
                        layers[0].warningMessage = "Same Faction As Last Layer"
                    }

                    else if ((layer.attackersId === 'team1' && layers[mapRotationLength - 1].attackersId === 'team2') || (layer.attackersId === 'team2' && layers[mapRotationLength - 1].attackersId === 'team1')) {
                        layers[0].warningMessage = "Same ATK/DEF Side As Last Layer"
                    }

                    else {
                        delete layers[0].warningMessage;
                    }
                }

                else {
                    if (layer.team1 === layers[index - 1].team2 || layer.team2 === layers[index - 1].team1) {
                        layers[index].warningMessage = "Same Faction As Prev Layer"
                    }

                    else if ((layer.attackersId === 'team1' && layers[index - 1].attackersId === 'team2') || (layer.attackersId === 'team2' && layers[index - 1].attackersId === 'team1')) {
                        layers[index].warningMessage = "Same ATK/DEF Side As Prev Layer"
                    }

                    else {
                        delete layers[index].warningMessage
                    }
                }
            })
        }
    }

    render = () => {

        return (
            <div>
                <Row type="flex" justify="center">
                    <Col>
                        <h1>Squad Rotation Maker</h1>
                    </Col>
                </Row>
                <Row type="flex" justify="center">
                    <Col>
                        <Dropdown addMap={this.handleAddMap} />
                    </Col>
                </Row>
                <Row type="flex" justify="center">
                    <Col>
                        <LayerTable 
                        layerRotation={this.state.mapsRotation}
                        handleMoveUp={this.handleMoveLayerUpInArray}
                        handleMoveDown={this.handleMoveLayerDownInArray}
                        handleRemove={this.handleRemoveLayerInArray}
                        />
                    </Col>
                </Row>
            </div>
        )
    }
}


export default RotationMakerApp;