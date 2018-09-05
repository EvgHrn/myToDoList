import React, { Component } from 'react'
import { View, Text,TouchableOpacity, Image } from 'react-native'

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
                    paddingVertical: 10,
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    opacity: opacity
                }}>
                <View style={{
                    flex: 1,
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                    <Text style={{
                        textDecorationLine: textDecorationLine,
                    }}>
                        {this.props.taskText}
                    </Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <CheckBox style={{
                        marginHorizontal: 20
                    }}
                        onClick={()=>{
                            this.setState({
                                done: !this.state.done
                            });
                            this.props.checkTask(this.props.hash);
                        }}
                        isChecked={this.state.done}
                    />
                    <TouchableOpacity
                        onPress={() => this.props.removeTask(this.props.hash)}>
                        <Image
                            style={{
                                width: 14,
                                height: 14
                            }}
                            source={require('../assets/removeButton.png')}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
