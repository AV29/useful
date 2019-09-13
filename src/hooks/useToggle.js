import { useReducer } from 'react';

const defaultInitialState = [
  {
    id: '1',
    label: 'Enabled',
    disabled: false,
    checked: true,
    leftLabel: true
  },
  {
    id: '2',
    label: 'Disabled Checked',
    disabled: true,
    checked: true
  },
  {
    id: '3',
    label: 'Disabled Unchecked',
    disabled: true,
    checked: false
  },
  {
    id: '4',
    disabled: false,
    checked: false
  }
];

const reducer = (state, { type, index }) => {
  switch (type) {
    case 'TOGGLE':
      return state
        .slice(0, index)
        .concat({ ...state[index], checked: !state[index].checked })
        .concat(state.slice(index + 1));

    default:
      return state;
  }
};

const useToggle = (initialState = defaultInitialState) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggle = index => dispatch({ type: 'TOGGLE', index });

  return [state, toggle];
};

export default useToggle;
