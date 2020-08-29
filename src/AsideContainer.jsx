import React from 'react';
import Aside from './Aside';

function AsideContainer(props) {

  return (
    <Aside linkData = { props.linkData } dialogsData = {props.dialogsData}/>
  );
}

export default AsideContainer;