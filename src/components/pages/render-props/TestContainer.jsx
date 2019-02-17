import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FlexColumnCenter } from '../../../styles/styles';
import Icon from '../../../components/reusable/icon/Icon';

class TestContainer extends PureComponent {

  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      value: ''
    };
  }

  componentDidUpdate(prevProps) {
    const { loading, data } = this.props;
    if (prevProps.loading !== loading && !loading && data) {
      this.handleInputChange(data.name);
    }
  }

  handleInputChange(value) {
    this.setState({ value });
    this.props.onChange(value);
  }

  render() {
    return (
      <FlexColumnCenter ref={this.props.passedRef} className={this.props.className}>
        <input
          onChange={({ target: { value } }) => this.handleInputChange(value)}
          value={this.state.value}
          type="text"
        />
        {this.props.loading && <Icon icon="spinner"/>}
      </FlexColumnCenter>
    );
  }
}

TestContainer.propTypes = {
  onChange: PropTypes.func,
  passedRef: PropTypes.func,
  loading: PropTypes.bool,
  data: PropTypes.object,
  className: PropTypes.string
};

export default TestContainer;

