import React, { Component } from 'react';
import { func } from 'prop-types';
import Button from '../../reusable/controls/button/Button';
import { withTranslation } from 'react-i18next';
import { DemoSection, SmallHeading } from '../../../styles/styles';

class SetStateNature extends Component {
  constructor (props) {
    super(props);

    this.handleSequencedClick = this.handleSequencedClick.bind(this);
    this.handleSporadicClick = this.handleSporadicClick.bind(this);
    this.handleBatchedClick = this.handleBatchedClick.bind(this);

    this.state = {
      counterBatched: 0,
      counterSequenced: 0,
      counterSporadic: 0
    };
  }

  handleBatchedClick () {
    for (let i = 0; i < 5; i += 1) {
      this.setState(({ counterBatched }) => ({ counterBatched: counterBatched + 1 }));
    }
  }

  handleSporadicClick () {
    // for (let i = 0; i < 5; i += 1) {
    //   console.log('qw');
    //   this.setState({ counterSporadic: this.state.counterSporadic + 1 });
    // }
    this.setState({ counterSporadic: this.state.counterSporadic + 1 });
    this.setState({ counterSporadic: this.state.counterSporadic + 1 });
    this.setState({ counterSporadic: this.state.counterSporadic + 1 });
    this.setState({ counterSporadic: this.state.counterSporadic + 1 });
    this.setState({ counterSporadic: this.state.counterSporadic + 1 });
  }

  handleSequencedClick () {
    //this.makeSequencedUpdates(5, () => ({ counterSequenced: this.state.counterSequenced + 1 }));
    this.makeSequencedUpdates(5);
  }

  makeSequencedUpdates (count, updater) {
    let counter = 0;

    const func = () => {
      counter += 1;
      if (counter > count) return;
      //this.setState(updater(), func);
      this.setState({ counterSequenced: this.state.counterSequenced + 1 }, func);
    };

    func.bind(this)();
  }

  render () {
    return (
      <DemoSection>
        <SmallHeading>{this.props.t('setStateNature')}</SmallHeading>
        <Button onClick={this.handleBatchedClick}>{this.props.t('batched')} = {this.state.counterBatched}</Button>
        <Button onClick={this.handleSequencedClick}>{this.props.t('sequenced')} = {this.state.counterSequenced}</Button>
        <Button onClick={this.handleSporadicClick}>{this.props.t('sporadic')} = {this.state.counterSporadic}</Button>
      </DemoSection>
    );
  }
}

SetStateNature.propTypes = {
  t: func
};

export default withTranslation('common')(SetStateNature);
