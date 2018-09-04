import React, { Component } from 'react'
import { Task } from './Task'
import { View, Text } from 'react-native'
import hash from 'string-hash';

export class TaskList extends Component {

    taskArr = this.props.taskList;

    render() {

        return (
            <View>
                {this.props.taskList.map((task) => {
                    console.log(hash(task.text));
                    
                    return (
                        <Task key={hash(task.text)} taskText={task.text + hash(task.text)}/>
                    );
                })}
            </View>

        )
    }
}
