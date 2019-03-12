import React, { PureComponent } from 'react';

let globalState = {
  sound: false,
};

const subscriptions = [];

const subscribe = (observer) => {
  subscriptions.push(observer);
};

const unsubscribe = (observer) => {
  const index = subscriptions.indexOf(observer);
  subscriptions.splice(index, 1);
};

const setGlobalState = (updates) => {
  globalState = { ...globalState, ...updates };
  subscriptions.map(observer => observer());
};

const getDisplayName = WrappedComponent => (
  WrappedComponent.displayName || WrappedComponent.name || 'Component'
);

const withSound = (WrappedComponent) => {
  class WithSound extends PureComponent {
    componentDidMount() {
      subscribe(this.handleGlobalStateChange);
    }

    componentWillUnmount() {
      unsubscribe(this.handleGlobalStateChange);
    }

    handleToggleSound = () => {
      const { sound } = globalState;
      setGlobalState({
        sound: !sound
      });
    };

    handleGlobalStateChange = () => {
      this.forceUpdate();
    }

    render() {
      const { sound } = globalState;
      return (
        <WrappedComponent
          {...this.props}
          sound={sound}
          onToggleSound={this.handleToggleSound}
        />
      );
    }
  }

  WithSound.displayName = `withSound(${getDisplayName(WrappedComponent)})`;

  return WithSound;
};

export default withSound;
