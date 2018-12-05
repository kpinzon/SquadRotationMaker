import React from 'react';
import Maps from '../mapData/maps'

class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: "Please Select Your Map" };

        this.handleChange = this.handleChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this)
    }


    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleAdd() {
        this.props.addMap(this.state.value)
    }

    render = () => {
        return (
            <div>
                <select value={this.state.value} onChange={this.handleChange} >
                    <option value={this.state.value} disabled hidden>{this.state.value}</option>
                    {
                        Maps.map((map) => (
                            <option key={map.layer} value={map.layer}>{map.layer}</option>
                        ))
                    }
                </select>
                <button onClick={this.handleAdd}>Add</button>
            </div>
        )
    }
}

export default Dropdown;