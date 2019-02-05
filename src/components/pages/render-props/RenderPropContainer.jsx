import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RenderPropInnerContainer from './RenderPropInnerContainer';
import RenderPropAsync from './RenderPropAsync';

class RenderPropContainer extends Component {

  render() {
    const { onNotifyParent, sharedData } = this.props;
    return (
      <RenderPropAsync latency={2000}>
        {({ data, loading }) => {
          return (
            <RenderPropInnerContainer
              data={data}
              sharedData={sharedData}
              loading={loading}
              onChange={onNotifyParent}
            />
          );
        }}
      </RenderPropAsync>
    );
  }
}

RenderPropContainer.propTypes = {
  onNotifyParent: PropTypes.func,
  sharedData: PropTypes.string
};

export default RenderPropContainer;

