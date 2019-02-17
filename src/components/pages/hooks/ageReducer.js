const ageReducer = {
  reducer: (state, { type, payload }) => {
    switch (type) {
      case 'MAKE_OLDER':
        return {
          ...state,
          age: state.age + 1
        };

      case 'MAKE_YOUNGER':
        return {
          ...state,
          age: state.age - 1
        };

      case 'SET_AGE':
        return {
          ...state,
          age: payload.age
        };

      default:
        return state;
    }
  },
  initialState: { age: 30 }
};

export default ageReducer;
