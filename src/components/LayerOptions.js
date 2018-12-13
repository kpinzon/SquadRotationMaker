import React from "react";
import { Card, Col, Row } from 'antd';
import { Modal, Button } from 'antd';
const { Meta } = Card;

class LayerOptions extends React.Component {
  state = { visible: false, layerSelected: {} }

  test = () => {
    console.log("Test")
  }

  showModal = (layer) => {
    console.log(layer)
    this.setState({
      visible: true,
      layerSelected: layer
    });
  }

  handleOk = (e) => {

    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {

    this.setState({
      visible: false,
    });
  }

  render() {
    return (
      <Row type="flex" justify="center" gutter={12}>
        {this.props.layers.map(layer => (
          <Col key={layer.name}>
            <Card
            bodyStyle={{backgroundColor: "#d9e8e7 "}}
              key={layer.name}
              style={{ width: 250, marginBottom: 10 }}
              actions={[<span onClick={() => this.showModal(layer)}>View Map</span>, <span onClick={() => this.props.addMap(layer)}>Add</span>]}
            >
              <Meta
                title={layer.name}
                description={(
                  <Row justify="center">
                    <Col span={8}>
                      <img alt="team1Image" src={layer.team1Image} style={{ width: 50, heigth: 25 }}></img>
                    </Col>
                    <Col span={2}></Col>
                    <Col span={4} >
                      <span>VS.</span>
                    </Col>
                    <Col span={2}></Col>
                    <Col span={8}>
                      <img alt="team2Image" src={layer.team2Image} style={{ width: 50, heigth: 25 }}></img>
                    </Col>
                    <Col>
                      <span style={{fontSize: 10}}>Faction Info Last Updated: v{layer.factionDataVers}</span>
                    </Col>
                  </Row>


                )}
              />
            </Card>
            <Modal
              title={this.state.layerSelected.name}
              visible={this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
              centered={true}
              width={700}
              footer={[
                <Button key="ok" type="primary" onClick={this.handleOk}>
                  Close
            </Button>
              ]}
            >
              <p>Image As Of Squad Version: {this.state.layerSelected.imageVers}</p>
              <p>Reminder: RAAS layers have random capture points</p>
              <img alt="layer" style={{ width: 600, height: 600 }} src={this.state.layerSelected.layerImage}></img>
            </Modal>
          </Col>
        ))}
      </Row>
    )
  }

}


export default LayerOptions; 
