import React, {createContext, useReducer} from 'react';

const stateModal = {
    articles : [],
    
  }
  
  const initialState = {...stateModal};

  const Store = createContext(initialState);

  const { Provider } = Store;


const StateProvider = ( { children } ) => {
    const [state, dispatch] = useReducer((state, action) => {
      let newState = {}
      switch(action.type) {
        case 'initState':
          newState = {...state, articles : [ ...action?.payload] }
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