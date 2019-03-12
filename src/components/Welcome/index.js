import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { asset, NativeModules } from 'react-360';
import WelcomeView from './WelcomeView';
import withSound from '../../sound';

const { AudioModule } = NativeModules;

class Welcome extends PureComponent {
  static propTypes = {
    onToggleSound: PropTypes.func.isRequired,
    sound: PropTypes.bool.isRequired,
  };

  state = {
    first: true,
  };

  render() {
    const { sound } = this.props;
    return (
      <WelcomeView
        onClick={this.handleClick}
        sound={sound}
      />
    );
  }

  handleClick = () => {
    const { onToggleSound, sound } = this.props;
    const { first } = this.state;
    onToggleSound();
    if (first) {
      this.setState({ first: false });
      AudioModule.playEnvironmental({
        source: asset('birds.wav'),
        volume: 1.0,
      });
      return;
    }
    AudioModule.setEnvironmentalParams({ muted: sound });
  };
};

export default withSound(Welcome);
