// Import libs for making a component

import React from 'react';
import { Text, View } from 'react-native';

// Make a component

const Header = (props) => {
  const { textStyle } = styles
  var { viewStyle } = styles
  viewStyle = props.viewStyles && Object.assign(viewStyle, props.viewStyles) || viewStyle

	return (
    <View style={viewStyle} >
      <Text style={textStyle}>  {props.headerText} </Text>
    </View>
  )
}

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    position: 'relative',
    elevation: 2
  },
  textStyle: {
  	fontSize: 20
  }
}

// Make component to other parts of the app

export { Header };