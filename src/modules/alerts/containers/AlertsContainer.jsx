import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {allAlerts, filterAlerts} from '../redux/selectors';
import ThreatStatusFilter from '../../../components/ThreatStatusFilter';

/* Redux Actions */

import {actions as alertsActions} from '../redux';


class AlertsContainer extends React.Component {

  static propTypes = {
    fetchAlerts: PropTypes.func,
    selectAlert: PropTypes.func,
    deselectAlert: PropTypes.func,
    selectAllAlerts: PropTypes.func,
    deselectAllAlerts: PropTypes.func,
    alerts: PropTypes.arrayOf(PropTypes.object),
    selectedAlerts: PropTypes.arrayOf(PropTypes.object),
    alertsFetching: PropTypes.bool,
    alertsError: PropTypes.bool,
  };

  componentWillMount () {
    const {fetchAlerts} = this.props;
    fetchAlerts();
  }

  _toggleSelection (alertItem) {
    const {selectAlert, deselectAlert} = this.props;
    if (alertItem.isSelected) {
      deselectAlert(alertItem.id);
    } else {
      selectAlert(alertItem.id);
    }
  }

  _toggleAll () {
    const {alerts, selectedAlerts, selectAllAlerts, deselectAllAlerts} = this.props;
    if (selectedAlerts.length === alerts.length) {
      deselectAllAlerts();
    } else {
      selectAllAlerts();
    }
  }

  render () {
    const {alerts, selectedAlerts, alertsFetching, alertsError} = this.props;
    return (
      <div>
        <ThreatStatusFilter
          onClick={(threat) => console.log('todo: refresh grid for status:', threat)}
          threatCounts={[{'count': 4000, 'threat': 3}, {'count': 300, 'threat': 2}, {'count': 1000, 'threat': 1}, {'count': 200, 'threat': 0}]}
        />
        {alertsFetching && <p>Loading...</p>}
        {alerts.length > 0 && <button onClick={() => this._toggleAll()}>
          {selectedAlerts.length === alerts.length ? 'Deselect' : 'Select'} All
        </button>}
        {alerts.map((alertItem) => (
          <div key={alertItem.id}>
            <button onClick={() => this._toggleSelection(alertItem)}>
              <h3>{alertItem.title} {`${alertItem.isSelected ? '(selected)' : ''}`}</h3>
            </button>
          </div>
        ))}
        <pre>{`${JSON.stringify(selectedAlerts, null, 2)}`}</pre>
      </div>
    );
  }

}


const mapStateToProps = (state) => ({
  alertsFetching: state.alerts.fetching,
  alertsError: state.alerts.error,
  alerts: allAlerts(state),
  selectedAlerts: filterAlerts(state, 'SELECTED'),
});


const mapDispatchToProps = (dispatch) => ({
  fetchAlerts: (data) => dispatch(alertsActions.getAlertsRequest(data)),
  selectAlert: (id) => dispatch(alertsActions.selectAlert(id)),
  deselectAlert: (id) => dispatch(alertsActions.deselectAlert(id)),
  selectAllAlerts: () => dispatch(alertsActions.selectAllAlerts()),
  deselectAllAlerts: () => dispatch(alertsActions.deselectAllAlerts()),
});


export default connect(mapStateToProps, mapDispatchToProps)(AlertsContainer);
