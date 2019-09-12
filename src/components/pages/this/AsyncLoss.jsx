import React, { useState, Component, Fragment } from 'react';
import { string, shape, func } from 'prop-types';
import { useTranslation } from 'react-i18next';
import Button from '../../reusable/controls/button/Button';
import { DemoSectionTitled, GridWrapper, SmallHeading } from '../../../styles/styles';

function AsyncLoss ({ name }) {
  const [user, setUser] = useState({ name: 'Anton' });
  const { t } = useTranslation('common');
  return (
    <DemoSectionTitled title={t('dataLoss')}>
      <GridWrapper>
        <DemoSectionTitled title={`${t('example')} 1`}>
          <Button onClick={() => setUser({ name: 'John' })}>{t('changeUserFromAbove')}</Button>
          <Consumer user={user} t={t}/>
        </DemoSectionTitled>
      </GridWrapper>
    </DemoSectionTitled>
  );
}

AsyncLoss.propTypes = {
  name: string
};

export default AsyncLoss;

class Consumer extends Component {
  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      name: this.props.user.name,
      inJob: false
    };
  }

  handleClick () {
    this.setState({ inJob: true });
    /** This is where we can preserve user even if it was changed during timer ticking */
    // const { user } = this.props;
    // setTimeout(() => this.setState({ name: user.name, inJob: false }), 3000);

    /** This would lead to change users info */
    setTimeout(() => this.setState({ name: this.props.user.name, inJob: false }), 3000);
  }

  render () {
    return (
      <Fragment>
        <SmallHeading>
          {this.state.name}
          <Button onClick={this.handleClick}>{this.props.t('startAsync')}</Button>
          {this.state.inJob ? this.props.t('waiting') : this.props.t('ok')}
        </SmallHeading>
      </Fragment>
    );
  }
}

Consumer.propTypes = {
  user: shape({
    name: string
  }),
  t: func
};


