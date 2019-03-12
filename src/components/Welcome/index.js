import React, { PureComponent } from 'react';
import { asset, NativeModules } from 'react-360';
import WelcomeView from './WelcomeView';

const {AudioModule} = NativeModules;


export default class Welcome extends PureComponent {
  state = {
    first: true,
    sound: false,
  };

  render() {
    const { sound } = this.state;
    return (
      <WelcomeView
        onClick={this.handleClick}
        sound={sound}
      />
    );
  }

  handleClick = () => {
    const { first } = this.state;
    if (first) {
      this.setState({ first: false, sound: true });
      AudioModule.playEnvironmental({
        source: asset('birds.wav'),
        volume: 1.0,
      });
      return;
    }
    this.setState(({ sound }) => {
      AudioModule.setEnvironmentalParams({ muted: sound });
      return { sound: !sound };
     });
  };
};
