import React, {createContext, useReducer} from 'react';

const stateModal = {
    configs : {},
    hy : {},
    en : {},
    currentLang : 'hy'
  }
  
  const initialState = {...stateModal};

  const Store = createContext(initialState);

  const { Provider } = Store;


const StateProvider = ( { children } ) => {
    const [state, dispatch] = useReducer((state, action) => {
      let newState = {}
      switch(action.type) {
        case 'initState':
          newState = {
              ...state, 
              configs : { ...action?.payload?.default }, 
              hy :  { ...action?.payload?.hy },
              en :  { ...action?.payload?.en },
              currentLang : 'hy'
            }
          return newState;
        case 'locale_hy':
          newState = { ...state,  configs :  state?.hy, currentLang : 'hy' }
          return newState;
        case 'locale_en':
          newState = { ...state,  configs :  state?.en, currentLang : 'en' }
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