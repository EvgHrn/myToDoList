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

  render() {
    return (
      <View style={styles.container}>
        <TaskInput addTask={this.saveTask}/>
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
