import React from 'react';

const tasksList = (props) => {

    let tasksLength = props.tasks.length;

    let tasks = Object.keys(props.tasks)
        .map(tskKey => {
            return <div key={tskKey} >{props.tasks[tskKey].name}</div>
        })

    for (let i = 0; i < tasksLength; i++) {
         //tasks += <div>{props.tasks[i].name}</div>;
        console.log(tasks);


    }
    

   // console.log(props.tasks[0].name);

    return (
        tasks
    );
}

export default tasksList;