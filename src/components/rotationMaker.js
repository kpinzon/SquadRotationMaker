import React from 'react';
import Dropdown from './Dropdown'
import LayerOptions from './LayerOptions'
import Maps from '../mapData/maps'
import Layers from '../mapData/layers'
import { Row, Col } from 'antd';
import LayerTable from "./LayerTable";

import 'antd/dist/antd.css';

class RotationMakerApp extends React.Component {
    state = { mapsRotation: [], layersToChooseFrom: [], optionRowStyle: {marginBottom: 20, height: 200} };

    //handle adding map to rotation
    handleAddMap = (layer) => {
        console.log("ADD MAP!!!", layer)
        let mapRotationArray = [...this.state.mapsRotation];



        mapRotationArray.push({...layer});
        let length = mapRotationArray.length;
        mapRotationArray[length - 1].key = Date.now();
        console.log(mapRotationArray)
        //maprotationlogic
        this.checkLayersForIssues(mapRotationArray);
        this.setState({ mapsRotation: mapRotationArray })

    }

    //handles selecting drop down, gets map name, filters through every layer to get layer data of each one
    handleSelectMap = (index) => {
        let layersToChoose = [];
        let mapName = Maps[index];

        Layers.map(layer => {
            if (layer.name.startsWith(mapName)) {
                switch (layer.team1) {
                    case 'US':
                    layer.team1Image = '/images/US_Flag.png';
                    break;
                    case 'GB':
                    layer.team1Image = '/images/GB_flag.jpg';
                    break;
                    case 'INS':
                    layer.team1Image = '/images/INS_Flag.png';
                    break;
                    case 'MIL':
                    layer.team1Image = '/images/MIL_Flag.png';
                    break;
                    case 'RUS':
                    layer.team1Image = '/images/RUS_Flag.png';
                    break;
                    default: 
                    console.log("default")
                }
                switch (layer.team2) {
                    case 'US':
                    layer.team2Image = '/images/US_Flag.png';
                    break;
                    case 'GB':
                    layer.team2Image = '/images/GB_flag.jpg';
                    break;
                    case 'INS':
                    layer.team2Image = '/images/INS_Flag.png';
                    break;
                    case 'MIL':
                    layer.team2Image = '/images/MIL_Flag.png';
                    break;
                    case 'RUS':
                    layer.team2Image = '/images/RUS_Flag.png';
                    break;
                    default: 
                    console.log("default")
                }
                layersToChoose.push(layer)
            }

            return layer
        })

        this.setState({layersToChooseFrom: layersToChoose, optionRowStyle: {marginBottom: 20}} )
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
                        layers[0].warningMessage = "Same Faction As Very Last Layer"
                    }

                    else if ((layer.attackersId === 1 && layers[mapRotationLength - 1].attackersId === 2) || (layer.attackersId === 2 && layers[mapRotationLength - 1].attackersId === 1)) {
                        layers[0].warningMessage = "Same ATK/DEF As Very Last Layer"
                    }

                    else {
                        delete layers[0].warningMessage;
                    }
                }

                else {
                    if (layer.team1 === layers[index - 1].team2 || layer.team2 === layers[index - 1].team1) {
                        layers[index].warningMessage = "Same Faction On Map Roll"
                    }

                    else if ((layer.attackersId === 1 && layers[index - 1].attackersId === 2) || (layer.attackersId === 2 && layers[index - 1].attackersId === 1)) {
                        layers[index].warningMessage = "Same ATK/DEF On Map Roll"
                    }

                    else if (layer.name === layers[index - 1].name)  {
                        layers[index].warningMessage = "Same Layer as Above"
                    }

                    else {
                        delete layers[index].warningMessage
                    }
                }

                return layer
            })
        }
    }

    render = () => {

        return (
            <div>
                <Row type="flex" justify="center" style={{marginBottom: 20, marginTop: 50}}>
                    <Col>
                        <h1>Squad Rotation Maker</h1>
                    </Col>
                </Row>
                <Row type="flex" justify="center" style={{marginBottom: 20}}>
                    <Col>
                        <Dropdown addMap={this.handleAddMap} changeSelection={this.handleSelectMap} />
                    </Col>
                </Row>
                <Row type="flex" justify="center" style={this.state.optionRowStyle}>
                    <Col span={12} >
                        <LayerOptions layers={this.state.layersToChooseFrom} addMap={this.handleAddMap} />
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