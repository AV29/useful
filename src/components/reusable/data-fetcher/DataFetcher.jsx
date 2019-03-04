import { Component } from 'react';
import { func, number } from 'prop-types';

class DataFetcher extends Component {

  constructor(props) {
    super(props);

    this.setLoading = this.setLoading.bind(this);
    this.setLoaded = this.setLoaded.bind(this);

    this.state = {
      loading: false,
      data: null
    };
  }

  componentDidMount() {
    this.setLoading();
    this.timeout = setTimeout(this.setLoaded, this.props.latency);
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  setLoading() {
    this.setState({ loading: true });

  }

  setLoaded() {
    this.setState({ loading: false, data: { name: 'Anton' } });
  }

  render() {
    return this.props.children({ data: { ...this.state.data }, loading: this.state.loading });
  }
}

DataFetcher.defaultProps = {
  latency: 1000
};

DataFetcher.propTypes = {
  children: func,
  latency: number
};

export default DataFetcher;

