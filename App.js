import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TaskList } from './components/TaskList';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      taskList: [
        {
          text: 'some task',
          done: false
        },
        {
          text: 'some task',
          done: false
        },
        {
          text: 'some task',
          done: false
        },
      ]
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TaskList taskList={this.state.taskList}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
