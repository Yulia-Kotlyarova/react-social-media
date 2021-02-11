import React from 'react';
import { Form, Field } from 'react-final-form';
import '../../style/App.css';
import '../../style/Dialog.css';
import { NavLink, Redirect } from 'react-router-dom';
import { minValue } from '../Login/validators.js';

const DialogItem = (props) => {
  let path = "/dialog/" + props.id;

  return <li className = "nav-item d-flex dialog-item align-items-center"> 
            <img src= {props.ava} alt="" className = "ava-friend"/>
            <NavLink to={path} activeClassName = "active"> {props.name} </NavLink>
        </li>
}

const Message = (props) => {
  return  <li className = "nav-item massage-item"> {props.message} </li>
  }

function Dialog(props) {
  let state = props.dialogsPage ;

  let dialogsItems = state.dialogsData.map(el => <DialogItem ava = {el.ava} name = {el.name} id = {el.id}/>);
  let messagesItem = state.messagesData.map(el => <Message message = {el.message}/>);

  const onNewMessage = (formData) => {
    console.log(props);
    props.sendMessageActCreator(formData);
  }

  if(!props.isAuth) {
    return <Redirect to = {'/login'}/>
  }

  return (
    <section className="col-8">
      <div className = "row">
        <div className = "col-6 dialogs">
          <ul className="nav flex-column">
            { dialogsItems }
          </ul>
        </div>
        <div className = "col-6 d-flex flex-column justify-content-between">
            <MessageForm  onNewMessage = { onNewMessage }/>
            {/* <textarea ref = {newMessage} value = { newMessageText }  onChange = { onMessageChange } rows = "5" className = "send-message" autoFocus = {true}> </textarea>
            <button className = "send-btn" onClick = { sendMessage } > send</button> */}
            <ul className="nav flex-column">
              { messagesItem }
            </ul>
        </div>
      </div>
    </section>
  );
}

const newMessage = ({ input, meta }) => {
  const isError = meta.error && meta.touched;
  const emailStyle = isError && "form__error" ;
  return (
    <div>
      <input {...input} 
        // className = {emailStyle} 
        rows = "5"  
        type="text" 
        placeholder="go Minecraft?"
        id = "new_message"
        autoFocus = {true}
      />
      { isError && <div className = "form__error">{meta.error}</div> }
    </div>
)}

const MessageForm = (props) => {

  return (
    <Form onSubmit={ props.onNewMessage }>
      {({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit = { handleSubmit }>
          <Field name="messageText"  
            component="textarea"
            validate={minValue(1)}
          >
            { newMessage }
          </Field>
          <button 
            className = "send-btn" 
            type="submit" 
            // disabled={submitting || !values.messageText }
            >
              send
          </button>
        </form>
      )}
    </Form>
  )

  // return (
  //   <div >
  //     <textarea ref = {newMessage} value = { newMessageText }  onChange = { onMessageChange } rows = "5" className = "send-message" autoFocus = {true}> </textarea>
  //     <button className = "send-btn" onClick = { sendMessage } > send</button>
  //   </div>
  // )
}

export default MessageForm;
export { Dialog };
