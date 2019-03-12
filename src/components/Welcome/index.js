import React, { PureComponent } from 'react';
import { Text, View } from 'react-360';
import styles from './styles';

export default class Welcome extends PureComponent {
  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>
            Welcome to Bartram-Carr Woods
          </Text>
        </View>
      </View>
    );
  }
};
