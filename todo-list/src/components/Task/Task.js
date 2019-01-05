import React from 'react';

const task = (props) => (
    <div key={props.key} className={props.color}>{props.name}</div>
);

export default task;