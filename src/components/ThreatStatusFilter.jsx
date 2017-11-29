import React from 'react';
import PropTypes from 'prop-types';
import emitter from '../services/eventEmitter';


export default class ThreatStatusFilter extends React.Component {

  static EVENTS = {
    SELECT: 'THREAT_STATUS_FILTER/SELECT',
  };

  static propTypes = {
    threatCounts: PropTypes.arrayOf(PropTypes.object),
    onClick: PropTypes.func,
  };

  static defaultProps = {
    threatCounts: [],
    onClick: () => {},
  };

  constructor (props) {
    super(props);
    this.state = {
      threatCounts: this.props.threatCounts,
      selected: null,
      colors: {
        '0': '#333',
        '1': '#94b60a',
        '2': '#f8a80d',
        '3': '#d00000',
      },
      labels: {
        '0': 'Unknown',
        '1': 'Known',
        '2': 'Suspicious',
        '3': 'Malicious',
      },
    };

    this.handleSelect = this._handleSelect.bind(this);
  }

  componentDidMount () {
    emitter.on(ThreatStatusFilter.EVENTS.SELECT, this.handleSelect);
  }

  componentWillUnmount () {
    emitter.removeListener(ThreatStatusFilter.EVENTS.SELECT, this.handleSelect);
  }

  _getThreatPercentage (count) {
    const total = (this.state.selected || this.state.threatCounts).map((i) => i.count).reduce((a, b) => a + b);
    return (count / total) * 100;
  }

  _handleSelect (item) {
    const newState = {};

    if (this.state.selected) {
      newState.selected = null;
    } else {
      newState.selected = this.state.threatCounts.map((i) => {
        const el = Object.assign({}, i);
        if (el.threat !== item.threat) {
          el.count = 0;
        }
        return el;
      });
    }

    this.setState(newState);
    this.props.onClick(item.threat);
  }

  render () {
    const collection = this.state.selected || this.state.threatCounts;
    return (
      <div style={{overflow: 'hidden', height: '20px'}}>
        {collection.map((item) => {
          const percentage = this._getThreatPercentage(item.count);
          return (
            <a
              key={item.threat}
              onClick={() => this._handleSelect(item)}
              title={`${item.count} ${this.state.labels[item.threat]} - ${percentage.toFixed(0)}%`}
            >
              <div style={{cursor: 'pointer', display: 'inline-block', width: `${percentage}%`, height: '20px', backgroundColor: this.state.colors[item.threat], transition: 'all 0.1s ease-out'}}></div>
            </a>
          );
        })}
      </div>
    );
  }

}
