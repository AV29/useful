import React, { PureComponent } from 'react';
import { func, string, object, bool } from 'prop-types';
import { DemoSection, FlexRow } from '../../../styles/styles';
import DataFetcher from '../../reusable/data-fetcher/DataFetcher';
import Input from '../../reusable/controls/input/Input';
import { Icon } from '../../reusable/icon/Icon';

export default function ContextMenuDemo({ sharedData, onChange }) {
  return (
    <DemoSection>
      <DataFetcher latency={2000}>
        {({ data, loading }) => (
          <TestContainer
            data={data}
            sharedData={sharedData}
            loading={loading}
            onChange={onChange}
          />
        )}
      </DataFetcher>
    </DemoSection>
  );
}

ContextMenuDemo.propTypes = {
  onChange: func,
  sharedData: string
};

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
      <FlexRow ref={this.props.passedRef} className={this.props.className}>
        <Input
          onChange={({ target: { value } }) => this.handleInputChange(value)}
          value={this.state.value}
          type="text"
        />
        {this.props.loading && <Icon icon="spinner"/>}
      </FlexRow>
    );
  }
}

TestContainer.propTypes = {
  onChange: func,
  passedRef: func,
  loading: bool,
  data: object,
  className: string
};
