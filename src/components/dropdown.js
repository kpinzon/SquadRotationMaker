import React from 'react';
import Maps from '../mapData/maps'
import { throws } from 'assert';

class Dropdown extends React.Component {
    state = {
        addButtonDisabled: true
    }
    mapSelectRef = React.createRef();
    emptyText = "Select a Layer";
    
    
    handleChange = (event) => {
        this.setState({addButtonDisabled: false})
    }
    
    handleAdd = () => {
        this.props.addMap(this.mapSelectRef.current.value)
    }
    
    render = () => {
       
        return (
            <div>
                <select onChange={this.handleChange} ref={this.mapSelectRef} name="selectLayer">
                    <option value="empty" hidden>Select a Layer</option>
                    {
                        Maps.map((map, index) => (
                            <option key={map.layer} value={index}>{map.layer}</option>
                        ))
                    }
                </select>

            
                <button onClick={this.handleAdd} disabled={this.state.addButtonDisabled}>Add</button>
            </div>
        )
    }
}

export default Dropdown;