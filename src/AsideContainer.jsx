import React from 'react';
import Aside from './Aside';
import StoreContext from './StoreContext';

function AsideContainer() {
  debugger
  return (
    <StoreContext.Consumer>
    {
      (store) => {
        let state = store.getState() ;
        return (
          <Aside linkData = { state.linkData } dialogsData = {state.dialogsPage.dialogsData}/>
        );
      }
    }
  </StoreContext.Consumer>
  )
}

export default AsideContainer;