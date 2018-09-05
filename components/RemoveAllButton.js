import React, { Component } from 'react'
import { Button } from 'react-native'

export class RemoveAllButton extends Component {
  render() {
    return (
        <Button
            onPress={() => this.props.removeAllTasks()}
            title="REMOVE ALL"
            color="#7D4727"
        />
    )
  }
}
