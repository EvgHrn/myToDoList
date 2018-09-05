import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TaskList } from './components/TaskList';
import { TaskInput } from './components/TaskInput';
import { CheckAllButton } from './components/CheckAllButton';
import { RemoveAllButton } from './components/RemoveAllButton';
import hash from 'string-hash';
import { SecureStore, Constants } from 'expo';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      taskList: []
    };
  }

  componentWillMount = async () => {
    let state = await SecureStore.getItemAsync('todoAppState');
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
    await SecureStore.setItemAsync('todoAppState', JSON.stringify(newStateObj));
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
    await SecureStore.setItemAsync('todoAppState', JSON.stringify(newStateObj));
  }

  removeTask = async (hash) => {
    const newStateObj = {
      taskList: this.state.taskList.filter(task => (task.hash !== hash))
    };
    this.setState(() => newStateObj);
    await SecureStore.setItemAsync('todoAppState', JSON.stringify(newStateObj));
  }

  removeAllTasks = async () => {
    const newStateObj = {
      taskList: []
    };
    this.setState(() => newStateObj);
    await SecureStore.setItemAsync('todoAppState', JSON.stringify(newStateObj));
  }

  checkAllButton = async () => {
    const newTaskList = this.state.taskList.map((task) => {
      return {
        hash: task.hash,
        text: task.text,
        done: true
      };
    });
    const newStateObj = {
      taskList: newTaskList
    };
    this.setState(() => newStateObj);
    await SecureStore.setItemAsync('todoAppState', JSON.stringify(newStateObj));
  }

  render() {
    const hashList = this.state.taskList.map(taskObj => taskObj.hash);
    return (
      <View style={styles.container}>
        <View style={styles.inputAndTasksBlock}>
          <TaskInput addTask={this.saveTask} hashList={hashList}/>
          <TaskList removeTask={this.removeTask} taskList={this.state.taskList} checkTask={this.checkTask}/>
        </View>
        <View style={styles.bottomButtons}>
          <CheckAllButton checkAllButton={this.checkAllButton}/>
          <RemoveAllButton removeAllTasks={this.removeAllTasks}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
  },
  inputAndTasksBlock: {
    flex: 1,
  },
  bottomButtons: {
    height: 80,
    marginTop: 60,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  }
});
