import React, { Component } from 'react';

import TaskBuilder from '../../components/TaskBuilder/TaskBuilder';
import TasksList from '../../components/TasksList/TasksList';
import Aux from '../../hoc/Ax';

class TaskComponent extends Component {

    state = {
        tasks: [
           { name: 'asdasd', color: 'red'},
           { name: 'asd', color: 'green'}
        ]
    };

    

    componentWillMount = () => {
        console.log(this.state.tasks.length); 
    }

    render() {
        return (
            <Aux>
                <p>It's a very nice app to store your task using database. Enjoy!</p>
                <TaskBuilder></TaskBuilder>
                <TasksList tasks={this.state.tasks} />
            </Aux>
        );
    }
}

export default TaskComponent;