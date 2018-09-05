import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image, CheckBox } from 'react-native'

export class Task extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const textDecorationLine = this.props.done ? 'line-through' : 'none';
        const opacity = this.props.done ? 0.4 : 1;
        return (
            <View
                style={{
                    paddingVertical: 6,
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
                        fontSize: 18,
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
                        marginLeft: 20
                    }}
                        onValueChange={()=>{
                            this.props.checkTask(this.props.hash);
                        }}
                        value={this.props.done}
                    />
                    <TouchableOpacity
                        onPress={() => this.props.removeTask(this.props.hash)}>
                        <Text style={{
                            padding: 10,
                        }}>
                            X
                        </Text>
                        {/* <Image
                            style={{
                                width: 14,
                                height: 14
                            }}
                            source={require('../assets/removeButton.png')}
                        /> */}
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
