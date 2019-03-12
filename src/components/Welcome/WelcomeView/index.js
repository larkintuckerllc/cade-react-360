import PropTypes from 'prop-types';
import React from 'react';
import { Text, View, VrButton } from 'react-360';
import styles from './styles';

const WelcomeView = ({ onClick, sound }) => (
  <View style={styles.panel}>
    <View style={styles.greetingBox}>
      <Text style={styles.greeting}>
        Welcome to Bartram-Carr Woods
      </Text>
    </View>
    <VrButton onClick={onClick} style={styles.soundBox} >
      <Text style={styles.sound}>
        { sound ? 'Turn Off Background Sound' : 'Turn On Background Sound' }
      </Text>
    </VrButton>
  </View>
);

WelcomeView.propTypes = {
  onClick: PropTypes.func.isRequired,
  sound: PropTypes.bool.isRequired,
};

export default WelcomeView;
