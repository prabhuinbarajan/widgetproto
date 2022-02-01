import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {render} from 'react-dom';
import styles from './Bhnlegalconsent.module.css'; // Tell Webpack that Button.js uses these styles
import {PSClickWrap} from '@pactsafe/pactsafe-react-sdk'


class Bhnlegalconsent extends React.Component{
  constructor(props) {
    super(props);
    this.prepareComponent = this.prepareComponent.bind(this);
    this.widget = this.prepareComponent();
  }
  prepareComponent() {
    return (
          <PSClickWrap accessId={process.env.REACT_APP_PACTSAFE_ACCESS_ID} groupKey={process.env.REACT_APP_PACTSAFE_GROUP_KEY} signerIdSelector={this.props.userEmail} />
    );
}
  render(dom) {
    console.log(process.env.REACT_APP_PACTSAFE_ACCESS_ID)    
    return dom ? render(this.widget, document.getElementById(dom)) : this.widget;
/*
    return (
      <PSClickWrap accessId={process.env.REACT_APP_PACTSAFE_ACCESS_ID} groupKey={process.env.REACT_APP_PACTSAFE_GROUP_KEY} signerIdSelector={this.props.userEmail} />
    ); 
*/
  }

}

export default Bhnlegalconsent;
