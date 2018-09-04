import React, { Component } from 'react'
import { View, Text } from 'react-native'
import CheckBox from 'react-native-check-box'

export class Task extends Component {

    constructor(props) {
        super(props);
        this.state = {
            done: this.props.done
        }
    }

    render() {
        const textDecorationLine = this.props.done ? 'line-through' : 'none';
        const opacity = this.props.done ? 0.4 : 1;
        return (
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    opacity: opacity
                }}>
                <Text style={{
                    textDecorationLine: textDecorationLine
                }}>
                    {this.props.taskText}
                </Text>
                <CheckBox
                    onClick={()=>{
                        this.setState({
                            done: !this.state.done
                        });
                        this.props.checkTask(this.props.hash);
                    }}
                    isChecked={this.state.done}
                />
            </View>
        )
    }
}
