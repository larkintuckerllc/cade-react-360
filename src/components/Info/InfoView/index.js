import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Animated,
  Text,
  View,
  VrButton,
} from 'react-360';
import styles from './styles';

export default class InfoView extends Component { 
  static propTypes = {
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
  };

  state = {
    fadeButton: new Animated.Value(1),
    fadeText: new Animated.Value(0),
  };

  componentDidUpdate() {
    const { open } = this.props;
    const valueText = open ? 1 : 0;
    const valueButton = open ? 0.6 : 1;
    Animated.timing(
      this.state.fadeText,
      {
        toValue: valueText,
        duration: 1000,
      }
    ).start();  
    Animated.timing(
      this.state.fadeButton,
      {
        toValue: valueButton,
        duration: 1000,
      }
    ).start(); 
  }

  render() {
    const { name, onClick } = this.props;
    const { fadeButton, fadeText } = this.state;
    return (
      <View style={styles.root}>
        <Animated.View
          style={[
            styles.rootInfo,
            { opacity: fadeText }
          ]}
        >
          <Text style={styles.rootInfoText}>
            {name}
          </Text>
        </Animated.View>
        <Animated.View style={{
          opacity: fadeButton,
        }}>
          <VrButton
            style={styles.rootButton}
            onClick={onClick}
          />
        </Animated.View>
      </View>
    );
  }
}
