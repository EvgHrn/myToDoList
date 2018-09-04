import React, { Component } from 'react'
import { Task } from './Task'
import { View } from 'react-native'

export class TaskList extends Component {

    render() {

        return (
            <View>
                {this.props.taskList.map((task) => {
                    return (
                        <Task key={task.hash} taskText={task.text + ' ' + task.hash}/>
                    );
                })}
            </View>

        )
    }
}
