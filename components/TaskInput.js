import React, { Component } from 'react'
import { View, TextInput } from 'react-native'
import hash from 'string-hash'

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
                <TextInput style={{
                    height: 50,
                    fontSize: 20,
                }}
                    ref={(input) => {this.textInput = input}}
                    placeholder="Add a new task"
                    onChangeText={
                        (text) => {
                            this.setState({text})
                        }
                    }
                    onSubmitEditing={() => {
                        this.textInput.clear();
                        const isDuplicate = (this.props.hashList.indexOf(hash(this.state.text)) !== -1);
                        if((this.state.text !== '') && !isDuplicate) {
                            this.props.addTask(this.state.text);
                            this.setState({text: ''});
                        }
                        }
                    }
                />
            </View>
        )
    }
}
