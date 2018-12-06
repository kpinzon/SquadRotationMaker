import React from 'react';
import './rotationItem.css'

const RotationItem = (props) => (
    <div>
        <button
            onClick={() => props.handleMoveUp(props.index)}
        >
            Up
        </button>
        <button 
        onClick={() => props.handleMoveDown(props.index)}
        >Down</button>
        <button
        onClick={() => {
            props.handleRemove(props.index)
        }}
        >X</button>
        <span>{props.layer.layer}</span>
        <span>{props.layer.team1}</span>
        <span>{props.layer.team2}</span>
        <span>{props.layer.attackersId === 'team1' && (
            <span>ID 1: {props.layer.team1}</span>
        )}
        </span>
        <span >{props.layer.attackersId === 'team2' && (
            <span>ID 2: {props.layer.team2}</span>
        )}
        </span>
        <span>{props.layer.attackersId === null && (
            <span></span>
        )}
        </span>
        <span >{props.layer.warningMessage && (
            <span>{props.layer.warningMessage}</span>
        )}
        </span>
    </div>
);

export default RotationItem; 
