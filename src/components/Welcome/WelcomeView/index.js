import PropTypes from 'prop-types';
import React from 'react';
import { asset, Image, Text, View, VrButton } from 'react-360';
import styles from './styles';

const onImage = asset('on.png');
const offImage = asset('off.png');

const WelcomeView = ({ onClick, sound }) => (
  <View style={styles.panel}>
    <View style={styles.greetingBox}>
      <Text style={styles.greeting}>
        Welcome to Bartram-Carr Woods
      </Text>
    </View>
    <VrButton onClick={onClick} style={styles.soundBox} >
      <Image source={sound ? onImage : offImage} style={styles.soundImage} />
    </VrButton>
  </View>
);

WelcomeView.propTypes = {
  onClick: PropTypes.func.isRequired,
  sound: PropTypes.bool.isRequired,
};

export default WelcomeView;
