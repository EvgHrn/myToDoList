import React, { Component } from 'react'
import { Task } from './Task'
import { View, FlatList } from 'react-native'

export class TaskList extends Component {

    constructor(props) {
        super(props);
    }

    _renderItem = (task) => {
        return (
            <Task removeTask={this.props.removeTask} checkTask={this.props.checkTask} key={task.item.hash} taskText={task.item.text} done={task.item.done} hash={task.item.hash}/>
        );
    }

    _keyExtractor = (item) => String (item.hash);

    render() {

        return (
            <View style={{ paddingHorizontal: 20 }}>
                <FlatList
                    data={this.props.taskList}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                />
            </View>

        )
    }
}
