import React from 'react';
import Maps from '../mapData/maps'
import { Select } from 'antd';
import { Button } from 'antd';
const Option = Select.Option;

class Dropdown extends React.Component {
    
    state = {
        addButtonDisabled: true,
        selectedLayer: null
    }
    mapSelectRef = React.createRef();
    emptyText = "Select a Layer";
    
    
    handleChange = (value) => {
        this.setState({addButtonDisabled: false, selectedLayer: value})
    }
    
    handleAdd = () => {
       
        this.props.addMap(this.state.selectedLayer)
    }
    
    render = () => {
       
        return (
            <div>
                <Select 
                showSearch
                onChange={this.handleChange} 
                ref={this.mapSelectRef} 
                name="selectLayer"
                style={{ width: 300 }}
                optionFilterProp="children"
                placeholder="Select a Layer"
                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                >
                   
                    {
                        Maps.map((map, index) => (
                            <Option key={map.layer} value={index}>{map.layer}</Option>
                        ))
                    }
                </Select>

            
                <Button style={{marginLeft: 5 }}type="primary" onClick={this.handleAdd} disabled={this.state.addButtonDisabled}>Add</Button>
            </div>
        )
    }
}

export default Dropdown;