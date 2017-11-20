import React from 'react';
import { connect } from 'react-redux';


/*** Redux Actions */

import {NotificationComponentActions} from './redux';


class NotificationComponent extends React.Component {

  render () {
    if (!this.props.isVisible) return null;
    return (
      <div>
        <h1>ALERT IS SHOWN!</h1>
      </div>
    );
  }

}


const mapStateToProps = ({notificationComponent}) => {
  return {
    isVisible: notificationComponent.isVisible,
  }
};


const mapDispatchToProps = (dispatch) => {
  return {
    show: () => dispatch(NotificationComponentActions.show()),
    hide: () => dispatch(NotificationComponentActions.hide()),
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(NotificationComponent);
