import React from 'react';
import Maps from '../mapData/maps'
import { Select } from 'antd';
const Option = Select.Option;

class Dropdown extends React.Component {
    
    state = {
        addButtonDisabled: true,
        selectedMap: null
    }
    mapSelectRef = React.createRef();
    emptyText = "Select a Map";
    
    
    handleChange = (value) => {
        this.setState({ selectedMap: value});
        this.props.changeSelection(value);
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
                name="selectMap"
                style={{ width: 300 }}
                optionFilterProp="children"
                placeholder="Select a Map"
                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                >
                   
                    {
                        Maps.map((map, index) => (
                            <Option key={map} value={index}>{map}</Option>
                        ))
                    }
                </Select>
            </div>
        )
    }
}

export default Dropdown;