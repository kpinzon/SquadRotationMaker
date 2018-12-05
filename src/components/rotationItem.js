import React from 'react';

const RotationItem = (props) => (
    <div>
        <button>Up</button>
        <button>Down</button>
        <button>X</button>
        <span>{props.layer.layer}</span>
        <span>{props.layer.team1}</span>
        <span>{props.layer.team2}</span>
        <span>{props.layer.attackersId == 'team1' && (
            <span>{props.layer.team1}</span>
        )}
        </span>
        <span>{props.layer.attackersId == 'team2' && (
            <span>{props.layer.team2}</span>
        )}
        </span>
        <span>{props.layer.attackersId == null && (
            <span></span>
        )}
        </span>
    </div>
);

export default RotationItem; 