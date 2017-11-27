import {createSelector} from 'reselect';


export const allAlerts = (state) => state.alerts.payload;

export const getSelectionFilter = (state, selectionFilter) => selectionFilter;

export const filterAlerts = createSelector(
  allAlerts,
  getSelectionFilter,
  (alerts, selectionFilter) => {
    switch (selectionFilter) {
      case 'ALL':
        return alerts;
      case 'SELECTED':
        return alerts.filter((item) => item.isSelected);
      default:
        return alerts;
    }
  }
);


export default {
  allAlerts,
  getSelectionFilter,
  filterAlerts,
};
