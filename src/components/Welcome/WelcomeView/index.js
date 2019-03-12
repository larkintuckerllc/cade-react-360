import React from 'react';
import { Text, View } from 'react-360';
import styles from './styles';

const WelcomeView = () => (
  <View style={styles.panel}>
  <View style={styles.greetingBox}>
    <Text style={styles.greeting}>
      Welcome to Bartram-Carr Woods
    </Text>
  </View>
</View>
);

export default WelcomeView;
