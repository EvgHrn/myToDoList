import React, { Component } from 'react'
import { Task } from './Task'
import { View, FlatList } from 'react-native'

export class TaskList extends Component {

    constructor(props) {
        super(props);
        console.log(props);
        
    }

    _renderItem = (task) => {
        return (
            <Task key={task.item.hash} taskText={task.item.text + ' ' + task.item.hash}/>
        );
    }

    _keyExtractor = (item) => String (item.hash);

    render() {

        return (
            <View>
                <FlatList
                    data={this.props.taskList}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                />
            </View>

        )
    }
}
