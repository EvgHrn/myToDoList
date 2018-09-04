import React, { Component } from 'react'
import { View, TextInput } from 'react-native'

export class TaskInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text:''
        }
        this.props.addTask.bind(this);
    }

    render() {
        return (
            <View>
                <TextInput
                    ref={(input) => {this.textInput = input}}
                    placeholder="Add a new task"
                    onChangeText={
                        (text) => {
                            this.setState({text})
                        }
                    }
                    onSubmitEditing={() => {
                            if(this.state.text !== '') {
                                this.props.addTask(this.state.text);
                                this.textInput.clear();
                                this.setState({text: ''});
                            }
                        }
                    }
                />
            </View>
        )
    }
}
