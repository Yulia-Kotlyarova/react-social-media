import React from 'react';

const passwordField = ({ input, meta }) => {
    const isError = meta.error && meta.touched;
    const passwordStyle = isError && "form__error" ;
    return(
      <div className = "sing-in__input-box">
        {/* <label htmlFor ="password">Password</label> */}
        <input {...input} 
          type="password" 
          placeholder= "Password: min 6 symbols"
          className = {passwordStyle}
          id = "password" />
        { isError && <div className = "form__error">{meta.error}</div> }
      </div>
  )}

  const userName = ({ input, meta }) => {
    const isError = meta.error && meta.touched;
    const emailStyle = isError && "form__error" ;
    return (
      <div className = "sing-in__input-box">
        {/* <label htmlFor ="userName">Name</label> */}
        <input {...input} 
          className = {emailStyle} 
          type="text" 
          placeholder="Name"
          id = "userName"
        />
        { isError && <div className = "form__error">{meta.error}</div> }
      </div>
  )}

export { passwordField, userName };
