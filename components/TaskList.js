import React, { Component } from 'react'
import { Task } from './Task'
import { View, Text } from 'react-native'
import { hasha } from 'hasha';

export class TaskList extends Component {

    taskArr = this.props.taskList;

    render() {



        return (
            <View>
                {this.props.taskList.map((task) => {
                    console.log(hasha(task.text));
                    
                    return (
                        <Task key={task.id} taskText={task.text + hasha(task.text)}/>
                    );
                })}
            </View>

        )
    }
}
