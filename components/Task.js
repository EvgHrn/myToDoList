import React, { Component } from 'react'
import { View, Text } from 'react-native'

export class Task extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View>
                <Text>
                    {this.props.taskText}
                </Text>
            </View>
        )
    }
}
