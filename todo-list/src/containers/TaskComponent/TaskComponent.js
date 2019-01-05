import React, { Component } from 'react';
import axios from 'axios';

import TaskBuilder from '../../components/TaskBuilder/TaskBuilder';
import TasksList from '../../components/TasksList/TasksList';
import Aux from '../../hoc/Ax';

class TaskComponent extends Component {

    state = {
        tasks: [
        //    { name: 'asdasd', category: 'red'},
        //    { name: 'asd', category: 'green'}
        ]
    };   

    componentWillMount = () => {
        console.log(this.state.tasks.length); 
    }

    componentDidMount() {
        axios.get('https://to-do-list-14d66.firebaseio.com/tasks.json')
        .then(response => {
            this.setState({tasks: response.data});
        })
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