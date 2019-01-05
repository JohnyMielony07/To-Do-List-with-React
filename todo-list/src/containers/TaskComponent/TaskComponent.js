import React, { Component } from 'react';

import TaskBuilder from '../../components/TaskBuilder/TaskBuilder';
import Aux from '../../hoc/Ax';

class TaskComponent extends Component {

    render() {
        return (
            <Aux>
                <p>It's a very nice app to store your task using database. Enjoy!</p>
                <TaskBuilder></TaskBuilder>
            </Aux>
        );
    }
}

export default TaskComponent;