import React, {createContext, useReducer} from 'react';

const stateModal = {
    amdIndicesGraph : [],
    usdIndicesGraph : [],
    amdIndexTableData : {},
    usdIndexTableData : {}
    
  }
  
  const initialState = {...stateModal};

  const Store = createContext(initialState);

  const { Provider } = Store;


const StateProvider = ( { children } ) => {
    const [state, dispatch] = useReducer((state, action) => {
      let newState = {}
      switch(action.type) {
        case 'initAmdIndicesGraph':
          newState = {...state, amdIndicesGraph : [ ...action?.payload] }
          return newState;
        case 'initUsdIndicesGraph':
          newState = {...state, usdIndicesGraph : [ ...action?.payload] }
          return newState;
        case 'initAmdIndexTableData':
          newState = {...state, amdIndexTableData : {...action?.payload} }
          return newState;
        case 'initUsdIndexTableData':
          newState = {...state, usdIndexTableData : { ...action?.payload } }
          return newState;
        case 'clearState' :
          return {  ...stateModal  }
        default:
          throw new Error();
      };
    }, initialState);
  
    return <Provider value={{ state, dispatch }}>{children}</Provider>;
  };
  

  export { Store , StateProvider }