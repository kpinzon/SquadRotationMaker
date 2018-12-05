import React from 'react'


const ColumnNames = () => (
    
       <div>
            <span style={headerStyle}>Actions</span>
            <span style={headerStyle}>Map Name</span>
            <span style={headerStyle}>Team ID 1</span>
            <span style={headerStyle}>Team ID 2</span>
            <span style={headerStyle}>Attacking Team</span>
            <span style={headerStyle}>Warnings</span>
        </div>
)

let headerStyle = {
    "margin": "0px 30px",
    "font-size": 15,
}

export default ColumnNames;
