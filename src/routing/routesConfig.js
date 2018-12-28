import guid from '../utilities/guid';

export default {
  root: {
    id: guid(),
    name: 'Useful Apps',
    path: '/'
  },
  moneyCalculator: {
    id: guid(),
    name: 'Money Calculator',
    path: 'money-calculator',
    icon: 'money'
  }
};
