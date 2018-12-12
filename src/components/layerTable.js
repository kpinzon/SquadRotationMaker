import React from 'react';
import { Table } from 'antd';
import { Button } from 'antd';
import { Tag } from 'antd';

class LayerTable extends React.Component {

  
  render() {

    this.columns = [{
      title: 'Actions',
      key: 'actions',
      width: 160,
      render: (text, record, index) => (
        <span>
          <Button style={{ marginRight: 3 }} ghost type="primary" icon="caret-up" onClick={() => this.props.handleMoveUp(index)}></Button>
          <Button style={{ marginRight: 3 }} ghost type="primary" icon="caret-down" onClick={() => this.props.handleMoveDown(index)}></Button>
          <Button ghost type="danger" icon="close" onClick={() => this.props.handleRemove(index)}></Button>
        </span>
      )
    }, {
      title: 'Layer Name',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: 'Team ID 1',
      key: 'team1',
      render: (text, record) => (
          <img alt="team 1" src={record.team1Image} style={{ width: 50, heigth: 25 }}></img>
      )
    }, {
      title: 'Team ID 2',
      key: 'team2',
      render: (text, record) => (
        <img alt="team 2" src={record.team2Image} style={{ width: 50, heigth: 25 }}></img>
    )
    }, {
      title: 'Attacking Team',
      key: 'attacking',
      render: (text, record) => {
        if (record.attackersId === 1) {
          return <img alt="attackers" src={record.team1Image} style={{ width: 50, heigth: 25 }}></img>
        }
        else if (record.attackersId === 2) {
          return <img alt="attackers" src={record.team2Image} style={{ width: 50, heigth: 25 }}></img>
        }
      }
    }, {
      title: 'Warnings',
      key: 'warningMessage',
      dataIndex: 'warningMessage',
      render: text => {
        if (text) {
          return (<Tag color="red">{text}</Tag>)
        }
      }
    }];

    return (
      <Table
        columns={this.columns}
        dataSource={this.props.layerRotation}
        rowKey={record => record.key}
        pagination={false}
        style={{ width: 900 }}
      ></Table >
    )
  }
};

export default LayerTable; 