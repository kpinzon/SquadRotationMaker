import React from 'react';
import { Table } from 'antd';
import { Button } from 'antd';
import { Tag } from 'antd';

class LayerTable extends React.Component {

  
  render() {

    this.columns = [{
      title: 'Actions',
      key: 'actions',
      render: (text, record, index) => (
        <span>
          <Button style={{ marginRight: 3 }} ghost type="primary" icon="caret-up" onClick={() => this.props.handleMoveUp(index)}></Button>
          <Button style={{ marginRight: 3 }} ghost type="primary" icon="caret-down" onClick={() => this.props.handleMoveDown(index)}></Button>
          <Button ghost type="danger" icon="close" onClick={() => this.props.handleRemove(index)}></Button>
        </span>
      )
    }, {
      title: 'Layer Name',
      dataIndex: 'layer',
      key: 'layer',
    }, {
      title: 'Team ID 1',
      dataIndex: 'team1',
      key: 'team1',
    }, {
      title: 'Team ID 2',
      key: 'team2',
      dataIndex: 'team2',
    }, {
      title: 'Attacking Team',
      key: 'action'
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