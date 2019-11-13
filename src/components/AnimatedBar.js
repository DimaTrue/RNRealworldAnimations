import React, { Component } from 'react';
import { View, Animated } from 'react-native';

export default class AnimatedBar extends Component {
  constructor(props) {
    super(props);
    this.width = new Animated.Value(0);
  }

  animateBar = () => {
    const { value, index } = this.props;
    this.width.setValue(0);
    Animated.timing(this.width, {
      toValue: value,
      delay: index * 150,
    }).start();
  };

  componentDidMount() {
    this.animateBar();
  }

  componentDidUpdate() {
    this.animateBar();
  }

  render() {
    let widthStyle = { width: this.props.value };
    let barWidth = {
      width: this.width,
    };
    return <Animated.View style={[styles.bar, barWidth]} />;
  }
}

const styles = {
  bar: {
    height: 15,
    borderWidth: 1,
    borderColor: '#c72f06',
    backgroundColor: '#e75832',
  },
};
