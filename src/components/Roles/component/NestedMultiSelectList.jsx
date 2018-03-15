import React, { Component } from 'react';
//include react widegt to implemnet multiple check
import {Multiselect, DropdownList, SelectList } from 'react-widgets';


//include connection to redux 
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { saveSelectedScopes,saveSelectedResources } from '../action/role-action';


class NestedMultiSelect extends Component{
    constructor(props){
        super(props);
        console.log('NestedMultiSelect',props);
    }

    prepareList(obj){
        if(this.props.resourcesList){
        for(let i in obj){
            let heading = obj[i].privilNme;
            this.options.push(
            
            // <li className="nav-item has-child-options" key={obj[i].privilId} onClick = {event => this.toggleChildMenu(heading, event)}>
            
            // <Link to = {`${this.props.url}${obj[i].refUrl}`} className = "nav-link menu-text">
            // { heading } </Link>
            // <SelectList 
            // data={obj}
            // textField='name'
            // />
            
            // { (obj)[i].children.length !== 0 ? <NestedList rooturl = {this.props.url} list = {obj[i].children} heading = {(obj)[i].privilNme} subheading = {(obj)[i].sub_heading}/> :
            //  '' }
            
            // </li>
            );
         } 
      }else {
        for(let i in obj){
            let heading = obj[i].privilNme;
            this.options.push(

            )
        }
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
    //   this.options.splice(0, this.options.length);
    //   this.prepareList(this.data);
      return (
        // <div className="container-fluid"><div className="row">
        //   <div className="col-md-2 sidebar">
        //   <div className="sidebar-sticky">
        //       <ul className = "nav flex-column">
        //           {this.options}
        //       </ul></div></div>
        //   </div>
        //   </div>
        <h1>checkbox tree structure</h1>  
      )
  }
  
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    saveSelectedScopes,
    saveSelectedResources
}, dispatch);

export default connect(null,mapDispatchToProps)(NestedMultiSelect);