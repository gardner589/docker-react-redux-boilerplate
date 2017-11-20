import React from 'react';
import emitter from '../services/eventEmitter';


export default class Notification extends React.Component {

  static EVENTS = {
    TOGGLE: 'NOTIFICATION/TOGGLE',
  };

  constructor (props) {
    super(props);
    this.state = {
      isVisible: this.props.isVisible,
    };

    this.handleToggle = this._handleToggle.bind(this);
  }

  componentDidMount () {
    emitter.on(Notification.EVENTS.TOGGLE, this.handleToggle);
  }

  componentWillUnmount () {
    emitter.removeListener(Notification.EVENTS.TOGGLE, this.handleToggle);
  }

  _handleToggle (isVisible) {
    this.setState({isVisible});
  }

  render () {
    if (!this.state.isVisible) return null;
    return (
      <div>
        <h1>ALERT IS SHOWN!</h1>
      </div>
    );
  }

}
