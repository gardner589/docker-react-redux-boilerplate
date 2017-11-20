import React from 'react';
import { connect } from 'react-redux';
import selectors from '../redux/selectors';


/*** Redux Actions */

import { actions as alertsActions } from '../redux';


class AlertsContainer extends React.Component {

  componentWillMount () {
    const { fetchAlerts } = this.props;
    fetchAlerts();
  }

  _toggleSelection (alertItem) {
    const { selectAlert, deselectAlert } = this.props;
    alertItem.isSelected ? deselectAlert(alertItem.id) : selectAlert(alertItem.id);
  }

  _toggleAll () {
    const { alerts, selectedAlerts, selectAllAlerts, deselectAllAlerts } = this.props;
    selectedAlerts.length === alerts.length ? deselectAllAlerts() : selectAllAlerts();
  }

  render () {
    const { alerts, selectedAlerts, alertsFetching, alertsError } = this.props;
    return (
      <div>
        {alertsFetching && <p>Loading...</p>}
        {alerts.length > 0 && <button onClick={this._toggleAll.bind(this)}>
          {selectedAlerts.length === alerts.length ? 'Deselect' : 'Select'} All
        </button>}
        {alerts.map((alertItem) => {
          return (
            <div key={alertItem.id}>
              <button onClick={this._toggleSelection.bind(this, alertItem)}>
                <h3>{alertItem.title} {`${alertItem.isSelected ? '(selected)' : ''}`}</h3>
              </button>
            </div>
          )
        })}
        <pre>{`${JSON.stringify(selectedAlerts, null, 2)}`}</pre>
      </div>
    );
  }

}


const mapStateToProps = (state) => {
  return {
    alertsFetching: state.alerts.fetching,
    alertsError: state.alerts.error,
    alerts: selectors.allAlerts(state),
    selectedAlerts: selectors.filterAlerts(state, 'SELECTED'),
  }
};


const mapDispatchToProps = (dispatch) => {
  return {
    fetchAlerts: (data) => dispatch(alertsActions.getAlertsRequest(data)),
    selectAlert: (id) => dispatch(alertsActions.selectAlert(id)),
    deselectAlert: (id) => dispatch(alertsActions.deselectAlert(id)),
    selectAllAlerts: () => dispatch(alertsActions.selectAllAlerts()),
    deselectAllAlerts: () => dispatch(alertsActions.deselectAllAlerts()),
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(AlertsContainer);
