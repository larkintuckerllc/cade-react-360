import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { asset, NativeModules } from 'react-360';
import InfoView from './InfoView';
import withSound from '../../sound';

const { AudioModule } = NativeModules;

class Info extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    sound: PropTypes.bool.isRequired,
  };

  state = {
    open: false,
  };

  render() {
    const { name } = this.props
    const { open } = this.state;
    return (
      <InfoView
        name={name}
        open={open}
        onClick={this.handleClick}
      />
    );
  }

  handleClick = () => {
    const { sound } = this.props;
    this.setState(({ open }) => ({ open: !open }));
    if (!sound) {
      return;
    }
    AudioModule.playOneShot({
      source: asset('ray-gun.wav'),
    });
  };
}

export default withSound(Info);
