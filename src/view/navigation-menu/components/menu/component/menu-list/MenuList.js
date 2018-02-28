import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './menu-list.css';

class MenuList extends Component{
    constructor(props){
        super(props);
        this.data = props.menuList;
        this.prepareList = this.prepareList.bind(this);
        this.options = []; 
    }

        prepareList(obj){
          for(let i in obj){
              let heading = obj[i].privil_Names;
              this.options.push(<li className="has-child-options" key={heading} onClick = {event => this.toggleChildMenu(heading, event)}>
              <Link to={heading.split(" ").join("_")} className = "menu-text">{heading} </Link> {(obj)[i].children.length !== 0 ? <NestedList list = {obj[i].children} heading = {(obj)[i].privil_Names} subheading = {(obj)[i].sub_heading}/> : ''}
              </li>);
          }
        };

        toggleChildMenu(item, event) {
          event.preventDefault();
          let allChilds = document.getElementsByClassName("hide-child-option");
          for (let i = 0; i < allChilds.length ; i++){
           allChilds[i].style.display = 'none';
          }
          let cols = document.getElementsByClassName(item);
          if(cols.length > 0){
            cols[0].style.display = (cols[0].style.display ===  'block') ? 'none' : 'block';
          }
      };

    render(){
        this.options.splice(0, this.options.length);
        this.prepareList(this.data);
        return (
            <ul className = "nav nav-sidebar">
                {this.options}
            </ul>
        )
    }
    
}

class NestedList extends Component{
  constructor(props){
    super(props);
    this.count = 0;
    this.childOptions = [];
    this.hideChildMenu = this.hideChildMenu.bind(this);
  }

  hideChildMenu(item, event) {
    event.stopPropagation();
    let allChilds = document.getElementsByClassName(item);
    for (let i = 0; i < allChilds.length ; i++){
      allChilds[i].style.display = 'none';
    }
  };

  renderChildMenu(obj){
    for(let i in obj){
      let heading = obj[i].privil_Names;
      this.childOptions.push(<li className="menu-container has-child-options" onClick = {event => this.hideChildMenu(this.props.heading, event)}  key={heading+this.count++}>
      <Link to={ heading.split(" ").join("_")} className = "menu-text">{heading}</Link>
      </li>);
    }
  }
  render(){
    this.childOptions = [];
    this.renderChildMenu(this.props.list);
    return(
      <div className = {`hide-child-option ${this.props.heading}`}>
        <h3>{this.props.heading}<span>*</span></h3>
        <p>{this.props.subheading}</p>
        <ul key = {`${this.props.heading}${this.count++}`}>{this.childOptions}</ul>
      </div>
    )
  }
}

export default connect()(MenuList);