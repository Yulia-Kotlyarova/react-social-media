import React from 'react';
import Aside from './Aside';
import { Provider, connect } from 'react-redux';

// function AsideContainer() {
//   debugger
//   return (
//     <Provider.Consumer>
//     {
//       (store) => {
//         let state = store.getState() ;
//         return (
//           <Aside linkData = { state.linkData } dialogsData = {state.dialogsPage.dialogsData}/>
//         );
//       }
//     }
//   </Provider.Consumer>
//   )
// }

let mapStateToProps = (state) => { // SEND OBJECT
  return {
    linkData: state.linkData,
    dialogsData: state.dialogsPage.dialogsData
  }
}

const AsideContainer = connect(mapStateToProps)(Aside);

export default AsideContainer;