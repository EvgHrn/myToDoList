import React, { Component } from 'react'
import { Button } from 'react-native'

export class CheckAllButton extends Component {
  render() {
    return (
        <Button
            onPress={() => this.props.checkAllButton()}
            title="CHECK ALL"
            color="#486B00"
        />
    )
  }
}
