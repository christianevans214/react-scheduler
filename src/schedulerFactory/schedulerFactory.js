import React from 'react';
import PropTypes from 'prop-types';

export default function schedulerFactory(family) {
  class Scheduler extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        currentKey: null,
        keysPlayed: {},
      };
      this.currentAnimation = null; // setTimeout
    }

    componentDidMount() {
      if (this.props.on) this.executetTimeBlock(this.props.timeline);
    }

    componentWillUpdate(nextProps) {
      if (!this.props.on && nextProps.on) {
        this.setState({
          keysPlayed: {},
        }, () => {
          this.executetTimeBlock(nextProps.timeline);
        });
      } else if (this.props.on && !nextProps.on) {
        clearTimeout(this.currentAnimation);
        this.setState({
          currentKey: null,
        });
      }
    }

    getChildContext() {
      return {
        [family]: {
          timeline: this.props.timeline,
          currentAnimation: this.props.timeline.find(({ key }) => this.state.currentKey === key) || {},
          keysPlayed: this.state.keysPlayed,
        },
      };
    }

    executetTimeBlock(timeline) {
      const shiftedTimeline = timeline.slice();
      const { key, duration } = shiftedTimeline.shift();
      this.setState({
        currentKey: key,
        keysPlayed: Object.assign({}, this.state.keysPlayed, { [key]: true }),
      });
      this.currentAnimation = setTimeout(() => {
        if (shiftedTimeline.length) {
          this.executetTimeBlock(shiftedTimeline);
        } else {
          this.setState({ currentKey: null });
        }
      }, duration);
    }

    render() {
      return (
        <React.Fragment>
          {this.props.children}
        </React.Fragment>
      );
    }
  }

  Scheduler.defaultProps = {
    on: false,
  };

  Scheduler.propTypes = {
    timeline: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.string.isRequired,
      duration: PropTypes,
    })).isRequired,
    on: PropTypes.bool,
  };

  Scheduler.childContextTypes = {
    [family]: PropTypes.object.isRequired,
  };

  return Scheduler;
}
