import React from 'react';
import { Form, Field } from 'react-final-form';
import { minValue } from '../Login/validators.js';

function NewPostForm(props) {
  
    const onAddPost = (newPost) => {
      props.addPost(newPost);
    }

    const newPost = ({ input, meta }) => {
        const isError = meta.error && meta.touched;
        const style = isError && "form__error" ;
        return(
          <div className = "sing-in__input-box">
            <input {...input} 
              type="text" 
              placeholder= "kookooshka"
              className = {style}
              id = "newPost" />
            { isError && <div className = "form__error">{meta.error}</div> }
          </div>
      )}

    return (
        <Form onSubmit={ onAddPost }>
          {({ handleSubmit, form, submitting, pristine, values }) => (
            <form className = "" onSubmit = { handleSubmit }>
              <Field name="new_post" validate={minValue(1)}>
                { newPost }
              </Field>
              <button 
                className = "send-btn" 
                type="submit" 
                disabled={submitting || !values.new_post}>
                  send
              </button>
            </form>
          )}
        </Form>
      )
  
    // return (
    //   <div>
    //       <div>
    //               <textarea ref = { newPost } value = { props.newPostText } onChange = { onPostChange } autoFocus={true}/>
    //               <button className = "send-btn" onClick = { onAddPost } > send </button>
  
    //       </div> 
    //   </div>
    // );
  }
  
  export default NewPostForm;
