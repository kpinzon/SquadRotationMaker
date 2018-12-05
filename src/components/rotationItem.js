import React from 'react';
import './rotationItem.css'

const RotationItem = (props) => (
    <div>
        <button>Up</button>
        <button>Down</button>
        <button>X</button>
        <span className="itemBaseStyle">{props.layer.layer}</span>
        <span className="itemBaseStyle">{props.layer.team1}</span>
        <span className="itemBaseStyle">{props.layer.team2}</span>
        <span className="itemBaseStyle">{props.layer.attackersId == 'team1' && (
            <span>{props.layer.team1}</span>
        )}
        </span>
        <span className="itemBaseStyle">{props.layer.attackersId == 'team2' && (
            <span>{props.layer.team2}</span>
        )}
        </span>
        <span className="itemBaseStyle">{props.layer.attackersId == null && (
            <span></span>
        )}
        </span>
    </div>
);

export default RotationItem; 
