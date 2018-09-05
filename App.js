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
      taskList: []
    };
  }

  componentWillMount = async () => {
    let state = await Expo.SecureStore.getItemAsync('todoAppState');
    this.setState(() => JSON.parse(state));
  }

  saveTask = async (taskText) => {
    const newTaskObj = {
      hash: hash(taskText),
      text: taskText,
      done: false
    };
    const newStateObj = {
      taskList: [ newTaskObj, ...this.state.taskList ]
    };
    this.setState(() => {
      return newStateObj;
    });
    await Expo.SecureStore.setItemAsync('todoAppState', JSON.stringify(newStateObj));
  }

  checkTask = async (hash) => {
    const newTaskList = this.state.taskList.map((task) => {
      if (task.hash === hash) {
        return {
          hash: task.hash,
          text: task.text,
          done: !task.done
        };
      }
      return task;
    });
    const newStateObj = {
      taskList: newTaskList
    };
    this.setState(() => newStateObj);
    await Expo.SecureStore.setItemAsync('todoAppState', JSON.stringify(newStateObj));
  }

  removeTask = async (hash) => {
    const newStateObj = {
      taskList: this.state.taskList.filter(task => (task.hash !== hash))
    };
    this.setState(() => newStateObj);
    await Expo.SecureStore.setItemAsync('todoAppState', JSON.stringify(newStateObj));
  }

  render() {
    const hashList = this.state.taskList.map(taskObj => taskObj.hash);
    return (
      <View style={styles.container}>
        <TaskInput addTask={this.saveTask} hashList={hashList}/>
        <TaskList removeTask={this.removeTask} taskList={this.state.taskList} checkTask={this.checkTask}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: Expo.Constants.statusBarHeight,
    flex: 1,
    backgroundColor: '#fff',
    padding: 20
    // alignItems: 'center',
    //justifyContent: 'center',
  },
});
