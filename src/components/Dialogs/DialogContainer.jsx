import '../../style/App.css';
import '../../style/Dialog.css';
import { Dialog } from './Dialog';
import { sendMessageActCreator, onMessageChangeActCreator} from '../data/dialog-reducer';
import { connect } from 'react-redux';
import { withAuthRedirectComponent } from '../hoc/AuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => { // SEND OBJECT
  return {
    dialogsPage: state.dialogsPage,
  }
}

export default compose(
  connect(mapStateToProps, { onMessageChangeActCreator, sendMessageActCreator}),//3) put result in connect
  withAuthRedirectComponent // 2) put Dialog in that Func and get result
)(Dialog)// 1) takes Dialog

// const DialogRedirectComponent = withAuthRedirectComponent(Dialog); // HOC for redirect

// const DialogContainer = connect(mapStateToProps, 
//   { onMessageChangeActCreator, sendMessageActCreator})(DialogRedirectComponent);

// export default DialogContainer;