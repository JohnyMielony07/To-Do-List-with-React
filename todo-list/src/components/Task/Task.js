import React from 'react';

const task = (props) => (
    <div key={props.key} className={props.category}>{props.name}</div>
);

export default task;