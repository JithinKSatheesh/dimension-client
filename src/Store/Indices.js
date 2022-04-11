import React, { createContext, useReducer } from 'react';

const stateModal = {
  
  amdIndicesGraph: [],
  amdIndexTableData: {},
  amdIndicesFactsheets: [],

  usdIndicesGraph: [],
  usdIndexTableData: {},
  usdIndicesFactsheets: [],

}

const initialState = { ...stateModal };

const Store = createContext(initialState);

const { Provider } = Store;


const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    let newState = {}
    switch (action.type) {
      // AMD Bond
      case 'initAmdIndicesGraph':
        newState = { ...state, amdIndicesGraph: [...action?.payload] }
        return newState;
      case 'initAmdIndexTableData':
        newState = { ...state, amdIndexTableData: { ...action?.payload } }
        return newState;
      case 'initAmdIndicesFactsheets':
        newState = { ...state, amdIndicesFactsheets: [...action?.payload] }
        return newState;
        // USD Corporate index
      case 'initUsdIndicesGraph':
        newState = { ...state, usdIndicesGraph: [...action?.payload] }
        return newState;
      case 'initUsdIndexTableData':
        newState = { ...state, usdIndexTableData: { ...action?.payload } }
        return newState;
      case 'initUsdIndicesFactsheets':
        newState = { ...state, usdIndicesFactsheets: [...action?.payload] }
        return newState;
      case 'clearState':
        return { ...stateModal }
      default:
        throw new Error();
    };
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};


export { Store, StateProvider }