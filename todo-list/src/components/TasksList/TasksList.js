import React from 'react';

import Task from '../Task/Task';

const tasksList = (props) => {
    
    let tasks = Object.keys(props.tasks)
        .map(tskKey => {
            return <Task key={tskKey} name={props.tasks[tskKey].name} category={props.tasks[tskKey].category} />
        })
   
    return (
        tasks
    );
}

export default tasksList;