import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TaskList } from './components/TaskList';
import { TaskInput } from './components/TaskInput';
import hash from 'string-hash';
import Expo from 'expo';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      taskList: [
        {
          hash: 3321321321,
          text: 'some task1',
          done: false
        },
        {
          hash: 3213221321,
          text: 'some task2',
          done: false
        },
        {
          hash: 3213215321,
          text: 'some task3',
          done: false
        },
      ]
    };
  }

  addTask = (taskText) => {
    this.setState((prevState) => {
      const newTaskObj = {
        hash: hash(taskText),
        text: taskText,
        done: false,
      };
      return {
        taskList: [newTaskObj, ...prevState.taskList]
      };
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TaskInput addTask={this.addTask}/>
        <TaskList taskList={this.state.taskList}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: Expo.Constants.statusBarHeight,
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    //justifyContent: 'center',
  },
});
